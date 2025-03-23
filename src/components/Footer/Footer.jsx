import React from 'react';
import bookIcon from '../../assets/book.ico'

const Footer = () => {
    return (
        <div class="bg-[#1313130D]">
          <div class="flex justify-center items-center gap-4 pt-24">
            <img class="h-8" src={bookIcon} alt="" />
            <h3 class="text-4xl font-bold">Book Shop</h3>
          </div>
          <ul class="flex flex-wrap md:flex-row justify-center gap-14 pt-10 text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>All Books</li>
          <li>Support</li>
          <li>My Account</li>
        </ul>
        <div class="flex justify-center gap-10 pt-14 md:pt-10">
          <p class="text-center pb-24">Book Shop © 2025-2030 Book Shop</p>
        </div>
        </div>
    );
};

export default Footer;