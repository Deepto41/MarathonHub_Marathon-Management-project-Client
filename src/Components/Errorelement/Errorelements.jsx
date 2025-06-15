import React from 'react';
import { useNavigate } from 'react-router';

const Errorelements = () => {
   const navigation = useNavigate();

  const backToHome = () => {
    navigation("/");
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[50%]" src="/public/404 page/istockphoto-1404059706-612x612.jpg" alt="" />
        <button
          className="btn bg-[#020079] text-white rounded-md"
          onClick={backToHome}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Errorelements;