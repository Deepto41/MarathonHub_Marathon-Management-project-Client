import React from "react";

const Marathoncards = ({ data }) => {
 
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">
        Marathon Section
      </h2>

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
         {data.map(d=> <div key={d._id} className="">
        <div className="card bg-[#578FCA] shadow-sm">
          <figure>
            <img className="w-[50%] rounded-xl pt-4" src={d.Image} alt="Shoes" />
          </figure>
          <div className="card-body justify-center items-center ">
            <h2 className="card-title text-lg  ">Title:{d.title}</h2>

            <div className="card-actions flex flex-col justify-center items-center font-normal mt-2">
              <p>📅Regestration start Date:{d.start_date}</p>
              <p>📅Regestration End Date:{d.End_date}</p>
              <p> 📍 Location: {d.location} </p>
            
            </div>
          </div>
        </div>
      </div>)}
    </div>
    </div>
  );
};

export default Marathoncards;
