import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { data } from '@/data/data';
import { Select } from '@radix-ui/react-select';
import { ChevronDownIcon, HandCoins } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const BorrowModal = () => {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const form = useForm();
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <HandCoins />
                </DialogTrigger>
                <DialogContent>
                     <Form {...form}>
                        <FormField
                            control={form.control}
                            name="Title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a book" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                    {
                                                        data?.data.map((book) => (
                                                            <SelectItem  key={book?._id} value={book?.title}>{book?.title}</SelectItem>
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
                            name="Genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a book" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                     <SelectItem value="Fiction">FICTION</SelectItem>
                                                     <SelectItem value="Non_Fiction">NON_FICTION</SelectItem>
                                                     <SelectItem value="History">HISTORY</SelectItem>
                                                     <SelectItem value="Fantasy">FANTASY</SelectItem>
                                                     <SelectItem value="Classic">CLASSIC</SelectItem>
                                                     <SelectItem value="Dystopian">DYSTOPIAN</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                            </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="Genre"
                            render={({ field }) => (
                                <FormItem>
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

                                                    {...field}
                                                    mode="single"
                                                    selected={date}
                                                    captionLayout="dropdown"
                                                    onSelect={(date) => {
                                                    setDate(date)
                                                    setOpen(false)
                                                    }}
                                                />
                                                </PopoverContent>
                                            </Popover>
                                            </div>
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                    </Form>
                </DialogContent>
                </Dialog>
            
        </>
    );
};

export default BorrowModal;