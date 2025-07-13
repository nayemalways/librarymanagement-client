import App from "@/App";
import { createBrowserRouter } from "react-router-dom"; 
import AddBook from './../pages/AddBook';
import BorrowSummery from './../pages/BorrowSummery';
import AllBook from "@/pages/AllBook";
import Home from "@/pages/Home";


const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'add_book',
                Component: AddBook
            },
            {
                path: 'borrow_summery',
                Component: BorrowSummery
            },
            {
                path: 'all_book',
                Component: AllBook
            }
        ]
    }
])


export default router;