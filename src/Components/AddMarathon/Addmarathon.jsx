import React, { use, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Addmarathon = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = use(Authcontext);
  const handleaddmarathon = (e) => {
    e.preventDefault();
     const form =e.target;
    const formdata = new FormData(form);

    const newData = Object.fromEntries(formdata.entries());
    console.log(newData,user.email)
  };

  return (
    <div className="mx-auto max-w-lg mt-8 mb-8 px-4">
      <form onSubmit={handleaddmarathon}>
        <div className="bg-base-200 border border-base-300 rounded-xl p-6 space-y-4">
          <h2 className="text-3xl font-bold text-center">Add Marathons!</h2>

          <div>
            <label className="label">Marathon Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Marathon Title"
              required
            />
          </div>

          <div>
            <label className="label flex flex-row ">Start Regestration Date</label>
            <DatePicker 
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="start date"
              className="input lg:w-108 md:w-108 w-60  "
            />
          </div>

          <div>
            <label className="label flex flex-row ">End Regestration Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="End date"
              className="input lg:w-108 md:w-108 w-60 "
            />
          </div>

          <div>
            <label className="label">Marathon Start Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="Marathon Start"
              className="input lg:w-108 md:w-108 w-60 "
            />
          </div>
          <div>
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Location"
              required
            />
          </div>

          <div>
            <label className="label">Running Distance</label>
            <select
              defaultValue=""
              className="select w-full"
              name="distance"
              required
            >
              <option disabled value="">
                Select a distance
              </option>
              <option>25K</option>
              <option>30K</option>
              <option>3K</option>
            </select>
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              
              name="description"
              rows="4"
              cols="50"
              className="input w-full"
              placeholder="Description"
              required
            ></textarea>
          </div>

          <div>
            <label className="label">Marathon Image</label>
            <input
              type="file"
              accept="image"
              name="Image"
              className="input w-full"
              placeholder="Image URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-neutral bg-[#020079] border-none w-full mt-4"
          >
            Add Marathon
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addmarathon;
