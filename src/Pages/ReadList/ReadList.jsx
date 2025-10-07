import {useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {getStoredBook} from "../../Utilities/addToDB";
import {getDataForWishList} from "../../Utilities/addToWishList";
import Book from "../Book/Book";

const ReadList = () => {
    const [sort, setSort] = useState("");
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const data = useLoaderData();
    // console.log(data);
    useEffect(() => {
        const savedBook = getStoredBook();
        const waishBook = getDataForWishList();
        // console.log(savedBook);
        const wishBookParse = waishBook.map((id) => JSON.parse(id));
        const storedWishList = data.filter((book) => wishBookParse.includes(book.bookId));
        setWishList(storedWishList);
        const savedBookParse = savedBook.map((id) => JSON.parse(id));
        // console.log(savedBookParse);
        const storedReadBook = data.filter((book) => savedBookParse.includes(book.bookId));
        setReadList(storedReadBook);
    }, [data]);


    const handleSort = (type) =>{
        setSort(type);
        if(type === 'pages'){
            const sortByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortByPages)
            // console.log(sortByPages);
        }
        if(type === "rating"){
            const sortByRating = [...readList].sort((a,b)=>a.rating - b.rating)
            setReadList(sortByRating)
        }
    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1"> {`Sort by: ${sort? sort: "Random"} `}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <a onClick={()=>handleSort('pages')}>Pages</a>
                    </li>
                    <li >
                        <a onClick={()=>handleSort('rating')}>Rating</a>
                    </li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>read: {readList.length} </h2>
                    <div>
                        {readList.map((book) => (
                            <Book key={book.bookId} book={book}></Book>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>wishlist: {wishList.length} </h2>
                    <div>
                        {wishList.map((book) => (
                            <Book key={book.bookId} book={book}></Book>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
