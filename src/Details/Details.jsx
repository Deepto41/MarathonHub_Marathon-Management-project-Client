import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Details = () => {
  const navigate =useNavigate();
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">Details</h2>

     <div className="  mb-6">
        {
          <div key={data._id} className="">
            <div className="card bg-[#578FCA] shadow-sm">
              <figure>
                <img
                  className="w-[50%] rounded-xl pt-4"
                  src={data.Image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body justify-center items-center ">
                <h2 className="card-title text-lg  ">Title:{data.title}</h2>

                <div className="card-actions flex flex-col justify-center items-center font-normal mt-2">
                  <p>📅Regestration start Date:{data.start_date}</p>
                  <p>📅Regestration End Date:{data.End_date}</p>
                  <p> 📍 Location: {data.location} </p>
                 {/* <button onClick={()=>navigate(`/details/${data._id}`)} className="btn text-white rounded-xl px-4 py-1 bg-[#020079]">Regestration</button> */}
                </div>
              </div>
            </div>
          </div>
        }
     
      </div>
    </div>
  );
};

export default Details;
