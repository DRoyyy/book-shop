import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { addReadList, addWishList } from "../../utility/addToLocal";

const BookDetails = () => {
  const { bookId } = useParams();
  const { data } = useLoaderData();

  const book = data.find((b) => b.bookId === parseInt(bookId));
  const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  const handleMarkedRead = (id) => {
    addReadList(id);
  };

  const handleMarkedWish = (id) => {
    addWishList(id);
  };

  return (
    <div>
        <div className="flex items-center gap-10 my-10">
          <div className="bg-[#1313130D] w-1/2 h-[700px] p-28 flex justify-center items-center rounded-xl">
            <img className="h-full object-cover" src={image} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-y-4">
            <h2 className="text-4xl font-bold">{bookName}</h2>
            <h4 className="text-xl font-medium">By: {author}</h4>
            <hr />
            <h4 className="text-xl font-medium">{category}</h4>
            <hr />
            <p className="font-bold text-justify">Review: <span className="text-[#131313B3] font-normal">{review}</span></p>
            <div className="flex gap-4">
            <p className="font-bold">Tags:</p>
                {
                    tags.map((t, idx) => <button key={idx} className='bg-[#1313130D] px-2 py-1 text-[#23BE0A] rounded-lg'>#{t}</button>)
                }
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-2">
                <span className="text-[#131313B3]">Number of Pages:</span>
                <span className="font-bold">{totalPages}</span>
                
                <span className="text-[#131313B3]">Publisher:</span>
                <span className="font-bold">{publisher}</span>

                <span className="text-[#131313B3]">Year of Publishing:</span>
                <span className="font-bold">{yearOfPublishing}</span>

                <span className="text-[#131313B3]">Rating:</span>
                <span className="font-bold">{rating}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleMarkedRead(bookId)}
                className="bg-[#50B1C9] hover:bg-[#23BE0A] px-5 py-3 text-white text-lg font-semibold rounded-lg w-[100px]"
              >
                Read
              </button>
              <button onClick={() => handleMarkedWish(bookId)} className="bg-[#50B1C9] hover:bg-[#23BE0A] px-5 py-3 text-white text-lg font-semibold rounded-lg w-[100px]">
                Wishlist
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BookDetails;
