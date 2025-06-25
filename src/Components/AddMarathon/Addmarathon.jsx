import React, { use, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Addmarathon = () => {
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [marathonStartDate, setMarathonStartDate] = useState(new Date());

  const { user } = use(Authcontext);

  const handleaddmarathon = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);

    const newData = Object.fromEntries(formdata.entries());
    console.log(newData, user.email);

    const dataSendToDb = {
      ...newData,
      name: user?.displayName,
      email: user?.email,
      createdAt: new Date(),
    };
    console.log(dataSendToDb);

    fetch("http://localhost:3000/marathons", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataSendToDb),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after send to db", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Added!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }

        form.reset();
      });
  };

  return (
    <div className="mx-auto max-w-lg mt-8 mb-8 px-4">
      <title>Add Marathon || MarathonHub</title>
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
            <label className="label flex flex-row ">
              Start Regestration Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="start_date"
              className="input lg:w-108 md:w-108 w-60  "
            />
          </div>

          <div>
            <label className="label flex flex-row ">
              End Regestration Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="End_date"
              className="input lg:w-108 md:w-108 w-60 "
            />
          </div>

          <div>
            <label className="label">Marathon Start Date</label>
            <DatePicker
              selected={marathonStartDate}
              onChange={(date) => setMarathonStartDate(date)}
              dateFormat="dd/MM/yyyy"
              type="date"
              name="Marathon_Start"
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
              type="url"
              name="Image"
              className="input w-full"
              placeholder="photo"
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
