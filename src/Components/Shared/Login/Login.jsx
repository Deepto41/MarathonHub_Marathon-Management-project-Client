import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import "./Login.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import Swal from "sweetalert2";
import { Authcontext } from "../../Context/Authcontext";


const Login = () => {
  const {logIn} = use(Authcontext);
  const navigate = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result);
        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          navigate("/");
        }
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
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (

    
    <div className="mx-auto max-w-sm mt-8 mb-6">
     
                <title>Login || MarathonHub</title>
            
      <form onSubmit={handelLogin}>
        {/* Email field */}
        <div className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-6">
          <h2 className="text-3xl font-bold text-center ">Login Now!</h2>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />

          {/* password field */}
          <label className="label">Password</label>
          <label className="input validator">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including  lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 6 characters, including
            <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <p>
            <a href="#">Forget Password?</a>
          </p>

          <button className="btn btn-neutral mt-4 mb-1 border-none bg-[#1c04d4]">
            Login
          </button>
          <p>
            New to this site? Please
            <Link className="text-blue-400 ml-2" to="/regester">
              Regester
            </Link>
          </p>
        </div>
      </form>
      <small className="text-center flex justify-center items-center text-md mt-2 ">
        Login With
      </small>

      <div className="flex gap-3 mt-2 justify-center items-center">
        <button
          onClick={handleGoogle}
          className="btn bg-white w-full text-black border-[#e5e5e5]"
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
    </div>
  );
};

export default Login;
