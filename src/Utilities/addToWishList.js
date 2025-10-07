export const getDataForWishList = () => {
    const wishListSTR = localStorage.getItem("wishList");
    if (wishListSTR) {
        const wishListParse = JSON.parse(wishListSTR);
        return wishListParse;
    } else {
        return [];
    }
};

export const storeWishList = (id) => {
    const storedWishlistData = getDataForWishList();
    if (storedWishlistData.includes(id)) {
        alert("this book already added wish list");
    } else {
        storedWishlistData.push(id);
        // console.log(storedWishlistData);
        const newWishListSTR = JSON.stringify(storedWishlistData);
        localStorage.setItem("wishList", newWishListSTR);
    }
};
