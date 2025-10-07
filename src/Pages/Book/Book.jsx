import {User} from "lucide-react";
import React, {use} from "react";
import {Link} from "react-router";

const Book = ({book}) => {
    // console.log(book);
    const {bookId, bookName, author, category, image, publisher, rating, review, totalPages, yeaOfPublishing, tags} = book;
    // const bookData = use(booksPromise)
    // console.log(bookData);
    return (
        <Link to={`/bookdetailes/${bookId}`}>
            <div className="card bg-base-100 shadow-xl p-6">
                <div className="bg-[#F3F3F3] rounded-xl h-[230px] flex items-center justify-center">
                    <figure className="w-[112px] mx-auto py-8 object-contain flex">
                        <img src={image} alt="Shoes" />
                    </figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                    <p> {`${review.slice(0, 300)}.............See more`} </p>
                    <div className="card-actions justify-between py-3 items-center">
                        <div className="border rounded px-2">Total Pages: {totalPages}</div>
                        <div className="flex border rounded px-2">
                            <User></User> Author: {author.slice(0, 10)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
