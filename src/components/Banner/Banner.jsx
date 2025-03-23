import React from 'react';
import bannerImg from '../../assets/banner.svg'

const Banner = () => {
    return (
        <div className='bg-[#1313130D] my-3 rounded-xl'>
            <div className='flex justify-between items-center py-28 px-36'>
                <div>
                    <h2 className='text-6xl font-bold pb-10 leading-tight'>Books to freshen up <br /> your bookshelf</h2>
                    <button className='bg-[#23BE0A] px-7 py-5 text-white text-xl font-bold rounded-xl'>View The Books</button>
                </div>
                <div>
                    <img className='h-80' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;