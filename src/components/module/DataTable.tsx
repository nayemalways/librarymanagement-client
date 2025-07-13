import {  Edit } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import ConfirmModal from './app_component/ConfirmModal';
import { Badge } from '../ui/badge';
import { data } from '@/data/data';
import BorrowModal from './app_component/BorrowModal';

const DataTable = () => {
     
    return (
        <Table  className='max-w-5xl h-auto m-auto rounded bg-slate-300 dark:bg-slate-800 md:mt-15'>
            <TableCaption>A list of all recent books.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Borrow</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Edit</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data?.data.map((book, i) => (
                        <>
                            <TableRow >
                                <TableCell className="font-medium">{i+1}</TableCell>
                                    <TableCell>{book?.title}</TableCell>
                                    <TableCell>{book?.author}</TableCell>
                                    <TableCell>{book?.genre}</TableCell>
                                    <TableCell>{book?.isbn}</TableCell>
                                    <TableCell>
                                        <BorrowModal  />
                                    </TableCell>
                                    <TableCell>
                                        {
                                            book?.available ? 
                                            (
                                                <Badge variant="secondary">Available</Badge>
                                            ):
                                            (
                                                <Badge variant="destructive">Unavailable</Badge>
                                            )
                                        }
                                        
                                    </TableCell>
                                    <TableCell>
                                        <Edit/>
                                    </TableCell>
                                    <TableCell>
                                        <ConfirmModal/>
                                    </TableCell>
                            </TableRow>
                        </>
                    ))
                }
            </TableBody>
            </Table>
    );
};

export default DataTable;