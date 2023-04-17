import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [listofRestos, setListofRestos] = useState([]); /// let list of restos
  const [FilterListOfRestos, setFilteredListofRestors] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchBtn = {
    backgroundColor: "red",
  };

  const api2 = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"

  useEffect(() => {
    getRestos();
  }, []);

  async function getRestos() {
    const data = await fetch(
      api2
    );
    const json = await data.json();
    console.log(json);
    setListofRestos(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredListofRestors(json?.data?.cards[2]?.data?.data?.cards);
  }

  return listofRestos.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="container">
      <div className="m-5 flex justify-center ">
        <input className="mx-5 p-2  hover:bg-gray-100 "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className=" p-4 rounded-[12px] bg-black text-white "
          onClick={() => {
            let list = filterData(searchText, listofRestos);
            setFilteredListofRestors(list);
            setSearchText("")
          }}
        >
          Search
        </button>
      </div>

      <div className="m-8 flex justify-around ">
        <button className="rounded-[12px] bg-black text-white p-3"
          
          onClick={() => {
            setFilteredListofRestors(listofRestos);
          }}
        >
          All Restaurants
        </button>

        <button
           className="rounded-[12px] bg-black text-white p-3"
          onClick={() => {
            const filteredList = listofRestos.filter(
              (res) => res.data.avgRating >= 4
            );
            console.log(listofRestos);
            setFilteredListofRestors(filteredList);
          }}
        >
          Top rated Restaurants
        </button>

        <button
        className="rounded-[12px] bg-black text-white p-3"
          onClick={() => {
            const filteredlist = listofRestos.filter(
              (res) => res.data.veg == true
            );
            setFilteredListofRestors(filteredlist);
          }}
        >
          Veg Restaurants
        </button>
      </div>

      {FilterListOfRestos.length === 0 ? (
        <h1>No Restaurants found</h1>
      ) : (
        <div className="flex flex-wrap">
          {FilterListOfRestos.map((resto) => (
            <Link to={"/restro/" + resto.data.id} key={resto.data.id}>
              {" "}
              <RestoCard resData={resto} />{" "}
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default Body;
