import { Edit, Trash } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import BorrowModal from './app_component/BorrowModal';
import { useDeleteBookMutation, useGetBookQuery } from '@/redux/rtkQuery/apiSlice';
import { Skeleton } from '../ui/skeleton';
import type { IBook } from '@/interface/IBook';
import { 
    AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger 
} from '../ui/alert-dialog';
import toast from 'react-hot-toast';
import BookAdd from './app_component/BookAdd';





const DataTable = () => {
    const { data, isLoading } = useGetBookQuery({});

    // Delete a book
    const [deleteBook] = useDeleteBookMutation();
    const handleDelete = async (bookId: string) => {
        const res = await deleteBook(bookId);
        if(res?.data?.success) {
            toast.success(res?.data?.message)
        }else {
            toast.error("Can't delete book");
        }
    }



    if(isLoading) {
        return(
            <div className='h-screen w-full flex justify-center items-center flex-col gap-4'>
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
                <Skeleton className="h-[20px] w-5xl rounded-full" />
            </div>
        )
    }

    return (
        <div>
            <div className='max-w-220 m-auto flex justify-between mt-5'>
                <h1 className='text-4xl font-semibold'>All books</h1>
                 <BookAdd />
            </div>
            <Table  className='max-w-5xl h-auto m-auto rounded bg-slate-300 dark:bg-slate-800 md:mt-15 md:mb-10 -z-1'>
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
                        data?.data.map((book: IBook, i: number) => (
                                <TableRow key={i}>
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
                                            <AlertDialog>
                                                <AlertDialogTrigger>
                                                    <Trash/>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Want to delete this item?</AlertDialogTitle>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleDelete(book?._id)} >Continue</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default DataTable;