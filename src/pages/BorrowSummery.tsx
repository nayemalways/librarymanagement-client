import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  useBorrowSummeryQuery } from "@/redux/rtkQuery/apiSlice";
  

 
const BorrowSummery = () => {
    const {data} = useBorrowSummeryQuery({});

    console.log(data?.data[0]);

    return (
        <div>
            <Table className='max-w-2xl h-auto m-auto rounded bg-slate-300 dark:bg-slate-800 md:mt-15 md:mb-10 -z-1'>
                <TableHeader>
                    <TableRow className=" ">
                        <TableHead>No</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>TOTAL QUANTITY</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.data.map((summery, i) => (
                                <TableRow key={i}>
                                        <TableCell className="font-medium">{i+1}</TableCell>
                                        <TableCell>{summery?.book?.title}</TableCell>
                                        <TableCell>{summery?.book?.isbn}</TableCell>
                                        <TableCell>{summery?.totalQuantity}</TableCell>
                                </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default BorrowSummery;