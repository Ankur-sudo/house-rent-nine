import { PiLineSegmentsBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const { image, estate_title, segment_name, price, location,id } = estate;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{estate_title}</h2>{" "}
        <hr className="border-red-400" />
        <h2 className="flex items-center font-semibold text-violet-600	">
          <IoLocationSharp></IoLocationSharp>
          <span className="ml-2">{location}</span>
        </h2>
        <div className="flex justify-between my-6">
          <div className="flex items-center text-2xl font-bold">
            <PiLineSegmentsBold></PiLineSegmentsBold>{" "}
            <span>{segment_name}</span>
          </div>
          <div>
            <p className="text-3xl font-semibold text-blue-400">{price}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/estateDetails/${id}`}>
            {" "}
            <button className="btn btn-primary btn-info font-extrabold">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
