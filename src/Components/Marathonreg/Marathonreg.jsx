import { useLocation } from "react-router";
import { Authcontext } from "../Context/Authcontext";
import { use } from "react";
import Swal from "sweetalert2";

const Marathonreg = () => {
  const location = useLocation();
  const { title, Marathon_Start } = location.state || {};
  const { user } = use(Authcontext);
  const handleregestration = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);

    const newData = Object.fromEntries(formdata.entries());
    console.log(newData);

    const dataSendToDb = {
      ...newData,
      marathonId: user._id,
    };

    fetch("https://marathon-hub-project-server.vercel.app/regestrationCollection", {
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
            title: "Successfully Regestered!",
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
    <div className="mt-4 mb-4">
      <title>Regestration Marathons!|| MarathonHub</title>
      <form onSubmit={handleregestration}>
        <div className="bg-base-200 border max-w-lg mx-auto border-base-300 rounded-xl p-6 space-y-4">
          <h2 className="text-3xl font-bold text-center">Regestration Marathons!</h2>

          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
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
              value={title}
              className="input w-full"
              placeholder="Title"
              required
              readOnly
            />
          </div>

          <div>
            <label className="label">Marathon Start Date</label>

            <input
              type="text"
              value={Marathon_Start}
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
    </div>
  );
};

export default Marathonreg;
