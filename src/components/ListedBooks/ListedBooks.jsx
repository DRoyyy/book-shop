import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadList, getWishList } from "../../utility/addToLocal";
import ListedBook from "../ListedBook/ListedBook";

const ListedBooks = () => {
    const {data} = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    
    useEffect(() =>{
        const readList = getReadList();
        const readListInt = readList.map(id => parseInt(id));
        const readBookList = data.filter(b => readListInt.includes(b.bookId));
        setReadList(readBookList);
    }, [data]);

    useEffect(() => {
      const wishList = getWishList();
      const wishListInt = wishList.map(id => parseInt(id));
      const wishBookList = data.filter(b => wishListInt.includes(b.bookId));
      setWishList(wishBookList);
    }, [data])


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col gap-y-5 py-5">
            {
              readList.map((b, idx) => <ListedBook book={b} key={idx} ></ListedBook>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col gap-y-5 py-5">
            {
              wishList.map((b, idx) => <ListedBook book={b} key={idx} ></ListedBook>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
