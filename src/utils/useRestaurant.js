import { useState, useEffect } from "react";

const useRestuarant = (id) => {
  const [restro, setrestro] = useState({});
  const [moreDetails, setMoreDetails] = useState(null);

  useEffect(() => {
    getRestroInfo();
  }, []);

  async function getRestroInfo() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&submitAction=ENTER" ;
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setrestro(json);
    setMoreDetails(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return [restro, moreDetails];
};

export default useRestuarant;
