import React, { useEffect, useRef, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [sort, setSort] = useState('');
    const dropdownRef = useRef(null);

    useEffect( () => {
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);

    const handleSort = (sortType) =>{
        setSort(sortType);
        if(sortType === 'Number of Pages'){
            const sortByPages = [...books].sort((a, b) => a.totalPages - b.totalPages);
            setBooks(sortByPages);
        }
        if(sortType === 'Year'){
            const sortByYear = [...books].sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
            setBooks(sortByYear);
        }
        if (dropdownRef.current) {
            dropdownRef.current.blur();
          }
    }

    return (
        <div className='py-10'>
            <h2 className="text-5xl font-bold text-center">Books</h2>
            <div className="dropdown flex justify-end pb-2" ref={dropdownRef}>
            <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort by: ${sort}` : 'Sort by'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Number of Pages')}><a>No of Pages (Low to High)</a></li>
                    <li onClick={() => handleSort('Year')}><a>Year (Newest First)</a></li>
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch'>
            {
                books.map(b => <Book key={b.bookId} book={b} ></Book>)
            }
            </div>
        </div>
    );
};

export default Books;