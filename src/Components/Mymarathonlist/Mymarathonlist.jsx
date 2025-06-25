import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const Mymarathonlist = () => {
  const { user } = use(Authcontext);
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState(null);
  console.log(user);
  const [mypost, setMypost] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [marathonStartDate, setMarathonStartDate] = useState(new Date());

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mylisting?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMypost(data));
    }
  }, [user]);

  const loadApplications = () => {
    fetch(`http://localhost:3000/mylisting?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMypost(data));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const update = {
      title: form.title.value,
      start_date: form.start_date.value,
      end_date: form.end_date.value,
      Marathon_Start: form.Marathon_Start.value,
      location:form.location.value,
      distance: form.distance.value,
      description:form.description.value,
      Image:form.Image.value

    };

    fetch(`http://localhost:3000/updatemarathon/${post._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true,
          });
          setShowModal(false);
          setPost(null);
          loadApplications();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-bold text-3xl mt-6 mb-8 text-center">
        My Marathon List
      </h2>

      {mypost.length === 0 ? (
        <p className="text-2xl font-bold text-center">No Posts Available</p>
      ) : (
        <div>
          <div className="mt-8 mb-10">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-green-500">
                    <th>#</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Name</th>
                    <th>Update User</th>
                  </tr>
                </thead>
                <tbody>
                  {mypost.map((post, index) => (
                    <tr className="bg-[#020079] text-white" key={index}>
                      <th c>{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.location}</td>
                      <td>{post.name}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-success mr-3"
                          onClick={() => {
                            setPost(post);
                            setShowModal(true);
                          }}
                        >
                          Update
                        </button>

                        <button
                        
                          className="btn btn-success mr-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {showModal && post && (
                <dialog id="update_modal" className="modal modal-open">
                  <div className="modal-box">
                    <div className="mt-4 mb-4">
                      <form onSubmit={handleUpdate}>
                        <div className="form-control mb-2">
                          <div className="bg-base-200 border max-w-lg mx-auto border-base-300 rounded-xl p-6 space-y-4">
                            <h2 className="text-3xl font-bold text-center">
                              Update Marathons!
                            </h2>
                            <div>
                              <label className="label">Title</label>
                              <input
                                type="text"
                                name="title"
                                defaultValue={post.title}
                                className="input w-full"
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
                                defaultValue={post.startDate}
                                type="date"
                                name="start_date"
                                className="input lg:w-99 md:w-104 w-73  "
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
                                defaultValue={post.endDate}
                                type="date"
                                name="end_date"
                                className="input lg:w-99 md:w-104 w-73  "
                              />
                            </div>

                            <div>
                              <label className="label">
                                Marathon Start Date
                              </label>
                              <DatePicker
                                selected={marathonStartDate}
                                onChange={(date) => setMarathonStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                defaultValue={post.marathonStartDate}
                                type="date"
                                name="Marathon_Start"
                                className="input lg:w-99 md:w-104 w-73 "
                              />
                            </div>

                            <div>
                              <label className="label">Location</label>
                              <input
                                type="text"
                                name="location"
                                className="input w-full"
                                defaultValue={post.location}
                              />
                            </div>

                            <div>
                              <label className="label">Running Distance</label>
                              <select
                                defaultValue={post.distance}
                                className="select w-full"
                                name="distance"
                              
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
                                defaultValue={post.description}
                              ></textarea>
                            </div>
                            <div>
                              <label className="label">Marathon Image</label>
                              <input
                                type="url"
                                name="Image"
                                defaultValue={post.Image}
                                className="input w-full"
                            
                              />
                            </div>

                            <div className="modal-action">
                              <button type="submit" className="btn btn-success">
                                Save
                              </button>

                              <button
                                type="button"
                                className="btn"
                                onClick={() => setShowModal(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </dialog>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mymarathonlist;
