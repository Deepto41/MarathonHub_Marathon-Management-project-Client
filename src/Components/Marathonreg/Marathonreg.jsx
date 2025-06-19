import React from "react";
import { useLoaderData } from "react-router";

const Marathonreg = () => {
    const data= useLoaderData();
    console.log(data)
    const handleregestration=(e)=>{
     e.preventDefault();
    }
  return (
    <form onSubmit={handleregestration}>
      <div className="bg-base-200 border border-base-300 rounded-xl p-6 space-y-4">
        <h2 className="text-3xl font-bold text-center">Regestration Form !</h2>

        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input w-full"
            placeholder="Title"
            required
          />
        </div>

        <div>
          <label className="label">Marathon Start Date</label>

          <input
            dateFormat="dd/MM/yyyy"
            type="date"
            name="Marathon_Start"
            className="input lg:w-108 md:w-108 w-60 "
            readOnly
          />
        </div>
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            name="first"
            className="input w-full"
            placeholder="First Name"
            required
          />
        </div>

        <div>
          <label className="label">Last Name</label>
          <input
            type="text"
            name="last"
            className="input w-full"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <label className="label">Contact Number</label>
          <input
            type="number"
            name="number"
            className="input w-full"
            placeholder="Contact Number"
            required
          />
        </div>

        <div>
          <label className="label">Additional Info</label>
          <textarea
            name="info"
            rows="4"
            cols="50"
            className="input w-full"
            placeholder="Additional Info"
            required
          ></textarea>
        </div>

        

        <button
          type="submit"
          className="btn btn-neutral bg-[#020079] border-none w-full mt-4"
        >
          Regestration
        </button>
      </div>
    </form>
  );
};

export default Marathonreg;
