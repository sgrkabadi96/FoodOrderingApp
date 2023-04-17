import { CDNURL } from "../utils/constants";

const RestoCard = (props) => {
  const { resData } = props;
  return (
    <div className="w-[250px] bg-gray-100 p-2 m-5  border hover:border-black ">
      <img
        className="res-logo"
        src={CDNURL + resData.data.cloudinaryImageId}
        alt="Res image"
      ></img>
      <h4 className="font-bold text-black"> {resData.data.name} </h4>
      <h5 className="text-gray-700"> {resData.data.cuisines.join(", ")} </h5>
      <div className="flex">
        <h5 className="text-gray-700"> {resData.data.avgRating} Stars </h5>
        <h5 className="text-gray-700 mx-6"> {resData.data.slaString}</h5>
      </div>
      <h5 className="text-gray-700">
        {" "}
        Rs {resData.data.costForTwo / 100} for two{" "}
      </h5>

    </div>
  );
};

export default RestoCard;
