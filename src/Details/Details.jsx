import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Details = () => {
  const navigate = useNavigate();
  const data = useLoaderData();


  const today = new Date();

  const startDate = new Date(data.start_date);
  const endDate = new Date(data.End_date);
  const marathonStart = new Date(data.Marathon_Start);
    const isRegistrationOpen = today >= startDate && today <= endDate;


 const registrationEndTime = new Date(data.End_date).getTime(); 
const now = new Date().getTime(); 

const totalDuration = Math.floor((registrationEndTime - startDate.getTime()) / 1000); 

const initialRemainingTime = Math.max(Math.floor((registrationEndTime - now) / 1000), 0);

const isValidDates = !isNaN(registrationEndTime) && !isNaN(startDate.getTime());

const formatTime = (seconds) => {
  const days = Math.floor(seconds / (60 * 60 * 24));
  const hours = Math.floor((seconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
};
  

  return (
    <div className="w-11/12 mx-auto">
      <title>Details || MarathonHub</title>
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">Details</h2>

      <div className="  mb-6">
        {
          <div key={data._id} className="">
            <div className="card bg-[#578FCA] shadow-sm">
              <figure>
                <img
                  className="w-[50%] rounded-xl pt-4"
                  src={data.Image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body justify-center items-center ">
                <h2 className="card-title text-lg  ">Title:{data.title}</h2>
                 
                 <p>Start Date:{data.start_date}</p>
                 <p>End Date:{data.End_date}</p>
                 <p>Marathon Start:{data.Marathon_Start}</p>
                <p>📍 Location: {data.location}</p>


                  <button
                    onClick={() =>
                      navigate(`/marathonreg/${data._id}`, {
                        state: {
                          title: data.title,
                          Marathon_Start: startDate,
                          Marathon_End: endDate,
                           marathonStart: marathonStart,
                          email: data.email,
                          
                        },
                      })
                    }
                    disabled={!isRegistrationOpen}
                className={`btn text-white rounded-xl px-4 py-2 mt-4 ${
                  isRegistrationOpen
                    ? "bg-[#020079] hover:bg-blue-900"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isRegistrationOpen ? "Register Now" : "Registration Closed"}
                  </button>

                  {isValidDates && initialRemainingTime > 0 && (
                    <div className="mt-4 text-white text-lg">
                      <CountdownCircleTimer
                        isPlaying
                        duration={totalDuration}
                        initialRemainingTime={initialRemainingTime}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[
                          totalDuration,
                          totalDuration * 0.7,
                          totalDuration * 0.3,
                          0,
                        ]}
                      >
                        {({ remainingTime }) => (
                          <div className="text-center">
                            <div>⏳ Ends In:</div>
                            <div>{formatTime(remainingTime)}</div>
                          </div>
                        )}
                      </CountdownCircleTimer>
                    </div>
                  )}
                </div>
              </div>
            </div>
          // </div>
        }
      </div>
    </div>
  );
};

export default Details;
