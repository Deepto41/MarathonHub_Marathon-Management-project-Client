import React, { use, useState } from "react";
import "./Regester.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../../Context/Authcontext";
import Swal from "sweetalert2";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Regester = () => {
  const { createNewUser, setUser, logOut } = use(Authcontext);
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleCreateuser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoUrl.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
          
        });
        logOut()
          .then(() => {
            setUser({
              name,
              email,
            });
            setUser(null)
            Swal.fire({
              title: "Successfully Regestered",
              icon: "success",
              draggable: true,
            });
            e.target.reset();
            navigate("/login");
          })
          .catch((error) => {
            if (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>',
              });
            }
          });
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div className="mx-auto max-w-sm mt-8 mb-8">
          <title>Regester || MarathonHub</title>
      <form onSubmit={handleCreateuser}>
        <div className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-6">
          <h2 className="text-3xl font-bold text-center">Regester Now!</h2>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">PhotoURL </label>
          <input
            type="text"
            name="photoUrl"
            className="input"
            placeholder="photoURL"
          />

          {/* password field */}
          <label className="label">Password</label>
          <label className="input validator">
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including  lowercase letter, uppercase letter"
              />
              <button
                onClick={() => setShowpass(!showpass)}
                type="button"
                className=" cursor-pointer absolute bottom-1 top-.5 -right-35"
              >
                {showpass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <p className="validator-hint hidden">
            Must be more than 6 characters, including
            <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          <button className="btn btn-neutral mt-4 mb-1 bg-[#1c04d4]  border-none ">
            Regester
          </button>

          <p>
            Already have an account? Please
            <Link className="text-blue-400 ml-1" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>

      <small className="text-center flex justify-center items-center text-md mt-2">
        Login With
      </small>
      <button
        onClick={handleGoogle}
        class="btn bg-white w-full mt text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Regester;
