import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'


const Book = ({book}) => {

    const {bookName, image, tags, author, category, rating, bookId} = book;
    return (
        <Link to={`/books/${bookId}`}>
        <div className='flex flex-col gap-y-2 p-8 border-2 rounded-2xl h-full'>
            <div className='bg-[#1313130D] p-8 flex justify-center items-center rounded-xl'>
                <img src={image} className='h-[200px]' alt="" />
            </div>
            <div className='flex justify-center items-center gap-2'>
                {
                    tags.map((t, idx) => <button key={idx} className='bg-[#1313130D] px-3 py-1 text-[#23BE0A] rounded-lg'>{t}</button>)
                }
            </div>
            <h2 className='text-2xl font-bold'>{bookName}</h2>
            <h3 className='font-medium'>By: {author}</h3>
            <hr />
            <div className='flex justify-between'>
                <p>{category}</p>
                <p><Rating className='max-w-28' value={parseInt(rating)}></Rating></p>
            </div>
        </div>
        </Link>
    );
};

export default Book;