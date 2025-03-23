import React from 'react';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";

const ListedBook = ({book}) => {
    const {bookName, image, tags, author, category, rating, bookId, yearOfPublishing, publisher, totalPages} = book;
    return (
        <div className='flex gap-10 p-8 border-2 rounded-2xl h-full'>
                    <div className='bg-[#1313130D] p-6 flex justify-center items-center rounded-xl'>
                        <img src={image} className='h-[200px] min-w-[140px]' alt="" />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <h2 className='text-2xl font-bold'>{bookName}</h2>
                        <h3 className='font-medium'>By: {author}</h3>
                        <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2 py-2'>
                        <p className="font-bold">Tags:</p>
                            {
                                tags.map((t, idx) => <button key={idx} className='bg-[#1313130D] px-3 py-1 text-[#23BE0A] rounded-lg'>#{t}</button>)
                            }
                        </div>
                        <p className="flex items-center gap-1 font-medium text-gray-500"> <IoLocationOutline className='text-xl' />
                        Year of Publishing: {yearOfPublishing}</p>
                        </div>
                        <div className='flex gap-4 font-medium text-gray-500'>
                        <p className='flex items-center gap-1'><FiUsers/> Publisher: {publisher}</p>
                        <p className='flex items-center gap-1'><RiPagesLine/> Pages: {totalPages}</p>
                        </div>
                        <div className='py-2'>
                            <hr />
                        </div>
                        <div className='flex gap-3'>
                            <button className='bg-[#328EFF26] px-5 py-3 text-[#328EFF] rounded-full'>Category: {category}</button>
                            <button className='bg-[#FFAC3326] px-5 py-3 text-[#FFAC33] rounded-full'>Rating: {rating}</button>
                            <Link to={`/books/${bookId}`} className='bg-[#23BE0A] px-5 py-3 text-white rounded-full'>View Details</Link>
                        </div>
                    </div>         
        </div>
    );
};

export default ListedBook;