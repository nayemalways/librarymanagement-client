import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { IBook, IBorrow } from '@/interface/IBook';
import { useBorrowBookMutation, useGetBookQuery } from '@/redux/rtkQuery/apiSlice';
import { ChevronDownIcon, HandCoins } from 'lucide-react';
import { useState } from 'react';
import { useForm,  type SubmitHandler } from "react-hook-form"
import toast from 'react-hot-toast';
 


const BorrowModal = () => {
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const form = useForm<IBorrow>();
    const {data} = useGetBookQuery([]);
    const [borowBook] = useBorrowBookMutation();

    const onsubmit: SubmitHandler<IBorrow> = async (data) => {
        try {
            const res = await borowBook(data).unwrap();
            if(res.success === true) {
                toast.success(res.message);
                form.reset();
                setDate(undefined);
            }
            
            setOpenDialog(false)
            } catch (error: unknown) {
                 if (typeof error === 'object' && error !== null) {
                     const err = error as { data?: { error?: string }; message?: string };
                     toast.error(err?.data?.error || err?.message || "An error occurred");
                 } else {
                     toast.error("An error occurred");
                 }
            }
    }



return (
    <>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger>
                    <HandCoins />
                </DialogTrigger>
                <DialogContent>
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit)}>
                            <FormField
                            control={form.control}
                            name="book"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>book</FormLabel>
                                    <FormControl>
                                        <Select 
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a book" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                    {
                                                        data?.data.map((book: IBook) => (
                                                            <SelectItem  key={book?._id} value={book?._id}>{book?.title}</SelectItem>
                                                        ))
                                                    } 
                                                </SelectGroup>
                                            </SelectContent>
                                            </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem className="mt-2">
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                         <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="mt-2">
                                    <FormLabel> Due Time</FormLabel>
                                    <FormControl>
                                        <div className="flex flex-col gap-3">
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    id="date"
                                                    className="w-full justify-between font-normal"
                                                >
                                                    {date ? date.toLocaleDateString() : "Select date"}
                                                    <ChevronDownIcon />
                                                </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ? new Date(field.value) : undefined}
                                                    captionLayout="dropdown"
                                                    onSelect={(selectedDate) => {
                                                        const isoString = selectedDate?.toISOString() || '';
                                                        field.onChange(isoString); // now form value is a string
                                                        setDate(selectedDate);     // for UI
                                                    }}


                                                />
                                                </PopoverContent>
                                            </Popover>
                                            </div>
                                    </FormControl>
                                </FormItem>
                            )}
                            />

                            <Button className='mt-2 w-30' type='submit'>
                                Submit
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
                </Dialog>
            
        </>
    );
};

export default BorrowModal;