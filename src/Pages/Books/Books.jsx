import React, {Suspense, useEffect, useState} from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch("/booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>setAllBooks(data))
    // }, [])

    // const booksPromise = fetch('/booksData.json').then(res=>res.json())

    return (
        <div>
            <h1 className="mb-9 font-bold text-[40px] text-center">Books</h1>
            <Suspense>
                <div className="grid grid-cols-3 gap-6 mb-32">
                    {data.map((book) => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Books;
