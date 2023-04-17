import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { CDNURL } from "../utils/constants";
import Dish from "./Dish";
import useRestuarant from "../utils/useRestaurant";
import { addToCart, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestroMenu = () => {
  const { id } = useParams();
  const [restro, moreDetails] = useRestuarant(id);
  const dispatch = useDispatch();

  const handleAddToCart = (card) => {
    dispatch(addToCart(card));
  };
  

  return (
    <div className="container">
      <div className="flex bg-gray-200 px-8 m-5 border border-black">
        <div>
          <h1 className="font-bold font-serif">
            {" "}
            {restro?.data?.cards[0]?.card?.card?.info?.name}{" "}
          </h1>
          <img
            className="w-[320px]"
            src={
              CDNURL +
              restro?.data?.cards[0]?.card?.card?.info.cloudinaryImageId
            }
            alt="Restaurant Image"
          ></img>
        </div>
        {console.log(restro)}
        <div className="pt-16 ml-20">
          <h4 className="p-4">
            {restro?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </h4>
          <h4 className="p-4">
            {restro?.data?.cards[0]?.card?.card?.info?.city}
          </h4>
          <h4 className="p-4">
            {restro?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}{" "}
          </h4>
          <h4 className="p-4">
            {restro?.data?.cards[0]?.card?.card?.info?.areaName}
          </h4>
          <h4 className="p-4">
            Average Rating :
            {restro?.data?.cards[0]?.card?.card?.info?.avgRating}
          </h4>
        </div>
      </div>

      <div className="w flex flex-wrap">
        {moreDetails == null ? (
          <ShimmerUi key = {0} />
        ) : (
          moreDetails.map((ele) => <Dish   key = {ele.card.info.id} card = {ele.card} addToCart = {handleAddToCart} />)
        )}
      </div>
    </div>
  );
};

export default RestroMenu;
