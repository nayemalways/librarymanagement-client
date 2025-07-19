import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { IBook } from '@/interface/IBook';
import { usePostBookMutation } from '@/redux/rtkQuery/apiSlice';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const BookAdd = () => {
    const [postBook] = usePostBookMutation();
   const form = useForm<IBook>({
    defaultValues: {
        title: "",
        author: "",
        genre: "",
        isbn: "",
        copies: 0,
        description: "",
    }
});


    const navigate = useNavigate();

    const onsubmit = async(data: IBook)=> {
        const copies =  Number(data.copies);
        const payload = {
            ...data,
            copies,
            available: true
        }
         
        // Post on server
        const res = await postBook(payload);
        if(res?.data?.success) {
            toast.success(res?.data?.message);
            navigate('/all_book');
        }
        form.reset()
    };
    return (
        <div>
            <Popover>
                <PopoverTrigger className='bg-teal-500 px-3 py-2 rounded'>+ Add Book</PopoverTrigger>
                <PopoverContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit)}>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem className="mt-3">
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                         <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem className="mt-3">
                                    <FormLabel> Genre</FormLabel>
                                    <FormControl>
                                          <Select 
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select a genre" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                    <SelectLabel>Fruits</SelectLabel>
                                                    <SelectItem value="FICTION">FICTION</SelectItem>
                                                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                            />

                            <FormField
                                control={form.control}
                                name="isbn"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Isbn</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="copies"
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Copies</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField 
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                        <FormItem className="mt-3">
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder="Write book description" />
                                            </FormControl>
                                        </FormItem>
                                )}
                            
                            />
                             

                            <Button className='mt-2 w-30' type='submit'>
                                Submit
                            </Button>
                        </form>
                </Form>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default BookAdd;