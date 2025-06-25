import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import { useNavigate } from "react-router";

const Mymarathonlist = () => {
  const { user } = use(Authcontext);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  console.log(user);
  const [mypost, setMypost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mylisting?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMypost(data));
    }
  }, [user]);

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
                          onClick={() => navigate()}
                          className="btn btn-success mr-3"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => {
                            setSelectedPost(post);
                            setShowModal(true);
                          }}
                          className="btn btn-success mr-3"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showModal && selectedPost && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-96">
      <h2 className="text-xl font-bold mb-4">Edit Marathon</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target;
          const updatedData = {
            title: form.title.value,
            location: form.location.value,
            name: form.name.value,
          };

          try {
            const res = await fetch(`http://localhost:3000/updatemarathon/${selectedPost._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedData),
            });

            const result = await res.json();
            if (res.ok) {
              // Update local state
              setMypost((prev) =>
                prev.map((item) => (item._id === selectedPost._id ? result : item))
              );
              setShowModal(false);
            } else {
              alert("Update failed");
            }
          } catch (err) {
            console.error(err);
            alert("Server error");
          }
        }}
      >
        <div className="mb-3">
          <label className="block text-sm font-medium">Title</label>
          <input
            name="title"
            defaultValue={selectedPost.title}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Location</label>
          <input
            name="location"
            defaultValue={selectedPost.location}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            defaultValue={selectedPost.name}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-300 px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mymarathonlist;
