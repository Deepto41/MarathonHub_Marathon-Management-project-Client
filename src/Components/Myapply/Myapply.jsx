import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import Swal from "sweetalert2";

const Myapply = () => {
  const { user } = use(Authcontext);
  console.log(user);
  const [mypost, setMypost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState(null);
  const [deletePost, setDeletePost] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myapply?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMypost(data));
    }
  }, [user]);

  const filteredPosts = mypost.filter((i) =>
    i.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const loadApplications = () => {
    fetch(`http://localhost:3000/myapply?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMypost(data));
  };

  const handledelete = (_id) => {
    fetch(`http://localhost:3000/deletemarathonlist/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire({
            title: "Delete Successfully!",
            icon: "success",
            draggable: true,
          });
          loadApplications();
          setDeletePost(null);
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const update = {
      first: form.first.value,
      number: form.number.value,
      last: form.last.value,
      info: form.info.value,
    };

    fetch(`http://localhost:3000/updateapplylist/${post._id}`, {
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
      <div className="mb-6 text-center"></div>

      <h2 className="font-bold text-3xl mt-6 mb-8 text-center">
        My Marathon Apply List
      </h2>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by marathon title..."
          className="input input-bordered w-1/2 max-w-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-2xl font-bold text-center">No Lists Available</p>
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
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Update User</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post, index) => (
                    <tr className="bg-[#020079] text-white" key={index}>
                      <th>{index + 1}</th>

                      <td>{post.title}</td>
                      <td>{post.first}</td>
                      <td>{post.number}</td>
                      <td>{post.email}</td>
                      <td>
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
                          className="btn bg-red-600"
                          onClick={() => setDeletePost(post)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showModal && post && (
              <dialog id="update_modal" className="modal modal-open">
                <div className="modal-box">
                  <div className="mt-4 mb-4">
                    <form onSubmit={handleUpdate}>
                      <div className="form-control mb-2">
                        <div className="bg-base-200 border max-w-lg mx-auto border-base-300 rounded-xl p-6 space-y-4">
                          <h2 className="text-3xl font-bold text-center">
                            Update Registration!
                          </h2>
                          <div>
                            <label className="label">Email</label>
                            <input
                              type="email"
                              name="email"
                              defaultValue={user.email}
                              className="input w-full"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="label">Title</label>
                            <input
                              type="text"
                              name="title"
                              defaultValue={post.title}
                              className="input w-full"
                              readOnly
                            />
                          </div>

                          <div>
                            <label className="label">Marathon Start Date</label>

                            <input
                              type="text"
                              value={post.Marathon_Start}
                              name="Marathon_Start"
                              className="input lg:w-100 md:w-104 w-74 "
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="label">First Name</label>
                            <input
                              type="text"
                              name="first"
                              defaultValue={post.first}
                              className="input w-full"
                            />
                          </div>

                          <div>
                            <label className="label">Last Name</label>
                            <input
                              type="text"
                              name="last"
                              className="input w-full"
                              defaultValue={post.last}
                            />
                          </div>
                          <div>
                            <label className="label">Contact Number</label>
                            <input
                              type="number"
                              name="number"
                              className="input w-full"
                              defaultValue={post.number}
                            />
                          </div>

                          <div>
                            <label className="label">Additional Info</label>
                            <textarea
                              name="info"
                              rows="4"
                              cols="50"
                              className="input w-full"
                              defaultValue={post.info}
                            ></textarea>
                          </div>

                          <div className="modal-action">
                            <button type="submit" className="btn btn-success">
                              Update
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

            {deletePost && (
              <dialog id="delete_modal" className="modal modal-open">
                <div className="modal-box">
                  <h3 className="text-lg font-bold mb-4">
                    Are you sure you want to delete this marathon?
                  </h3>
                  <p className="mb-4 text-red-600 font-semibold justify-center items-center text-center">
                    {deletePost.title}
                  </p>
                  <div className="modal-action">
                    <button
                      className="btn btn-error"
                      onClick={() => handledelete(deletePost._id)}
                    >
                      Yes, Delete
                    </button>
                    <button className="btn" onClick={() => setDeletePost(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </dialog>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Myapply;
