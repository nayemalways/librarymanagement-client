import type { IBook } from '@/interface/IBook';
import { useGetBookQuery } from '@/redux/rtkQuery/apiSlice';
import { Link } from 'react-router-dom';

const BookCollection = () => {
    const {data} = useGetBookQuery({});
    console.log(data);
    return (
        <>
            <section>
                <h1 className='text-4xl text-center font-semibold text-teal-400'>Book collection</h1>

                <div className='flex max-w-[90%] m-auto pt-20 pb-20 flex-wrap gap-2'>
                    {
                        data?.data?.map((book: IBook) => (
                             <div key={book?._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Title: {book?.title}
                        </h5>
                        <div>
                            <p>Author: {book?.author}</p>
                            <p>Genre: {book?.genre}</p>
                        </div>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Description: {book?.description}
                    </p>
                </div>
                        ))
                    }
                </div>
                

            </section>
        </>
    );
};

export default BookCollection;