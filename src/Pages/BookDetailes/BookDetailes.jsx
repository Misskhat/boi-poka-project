import React from "react";
import {useLoaderData, useParams} from "react-router";

const BookDetailes = () => {
    const {id} = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data);
    const singleData = data.find((bk) => bk.bookId === Number(id));
    const {bookId, bookName, author, category, image, publisher, rating, review, totalPages, yeaOfPublishing, tags} =
        singleData;
    return (
        <div>
            <div className="my-14 flex items-start justify-between ">
                <div className="bg-[#1313130d] p-[74px] rounded-2xl w-1/2">
                    <img src={image} alt={bookName} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold"> {bookName} </h1>
                    <p className="text-xl">By : {author} </p>
                    <div className="divider"></div>
                    <p className="text-xl"> {category} </p>
                    <div className="divider"></div>
                    <p className="w-[550px]">
                        <span className="font-bold">Review:</span> {review}{" "}
                    </p>
                    <div className="flex gap-3 items-center mt-7">
                        <p className="font-bold">Tag: </p>
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <button className="btn rounded-4xl text-[#23BE0A]"> #{tag} </button>
                            ))}
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="w-[345px]">
                        <div className="flex items-center justify-between">
                            <p></p>
                            <p></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p></p>
                            <p></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p></p>
                            <p></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailes;
