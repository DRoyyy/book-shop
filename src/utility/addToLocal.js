import { toast } from "react-toastify";

const getReadList = () => {
    const readListStr = localStorage.getItem('read-list');
    if(readListStr){
        return JSON.parse(readListStr);
    }
    else{
        return [];
    }
}

const getWishList = () => {
    const wishListStr = localStorage.getItem('wish-list');
    if(wishListStr){
        return JSON.parse(wishListStr);
    }
    else{
        return [];
    }
}

const addReadList = (id) => {
    const readList = getReadList();
    if(readList.includes(id)){
        toast("Already Exist");
    }
    else {
        readList.push(id);
        const readListStr = JSON.stringify(readList);
        localStorage.setItem('read-list', readListStr);
        toast("Added");
    }
}

const addWishList = (id) => {
    const wishList = getWishList();
    if(wishList.includes(id)){
        toast("Already Exist");
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishListStr);
        toast("Added");
    }
}

export {addReadList , getReadList, addWishList, getWishList}