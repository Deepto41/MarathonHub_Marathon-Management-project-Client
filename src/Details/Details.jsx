import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Details = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);

  const today = new Date();

  const startDate = new Date(Date.parse(data.start_date));
  const endDate = new Date(Date.parse(data.End_date));
  const marathonStart = data.Marathon_Start;

  const isStartValid = !isNaN(startDate);
  const isEndValid = !isNaN(endDate);
  const isMarathonStartValid = !isNaN(marathonStart);
  const isValidDates = isStartValid && isEndValid;

  const isRegistrationOpen = today <= endDate;
  const totalDuration = isValidDates
    ? Math.max(Math.floor((endDate - startDate) / 1000), 0)
    : 0;
  const initialRemainingTime = isValidDates
    ? Math.max(Math.floor((endDate - today) / 1000), 0)
    : 0;

 const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
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

                {/* <div className="card-actions flex flex-col justify-center items-center font-normal mt-2">
                  <p>
                    📅Regestration Start Date:
                    {startDate.toLocaleDateString()}
                  </p>
                  <p>
                    📅Regestration End Date:
                    {endDate.toLocaleDateString()}
                  </p>
                  <p>📅 Marathon Start:{marathonStart}</p>
                  <p> 📍 Location: {data.location} </p> */}

     {isStartValid ? (
                  <p>📅 Registration Start Date: {startDate.toLocaleDateString()}</p>
                ) : (
                  <p className="text-red-200">⚠️ Invalid or missing start date</p>
                )}
                     {isEndValid ? (
                  <p>📅 Registration End Date: {endDate.toLocaleDateString()}</p>
                ) : (
                  <p className="text-red-200">⚠️ Invalid or missing end date</p>
                )}
                      {isMarathonStartValid ? (
                  <p>📅 Marathon Start: {marathonStart.toLocaleString()}</p>
                ) : (
                  <p className="text-red-200">⚠️ Invalid or missing marathon start</p>
                )}

                <p>📍 Location: {data.location}</p>


                  <button
                    onClick={() =>
                      navigate(`/marathonreg/${data._id}`, {
                        state: {
                          title: data.title,
                          Marathon_Start: startDate,
                          Marathon_End: endDate,
                         Marathon_start: marathonStart,
                          email: data.email,
                        },
                      })
                    }
                    disabled={!isRegistrationOpen}
                    className={`btn text-white rounded-xl px-4 py-1 ${
                      isRegistrationOpen
                        ? "bg-[#020079]"
                        : "bg-gray-200 cursor-not-allowed"
                    }`}
                  >
                    {isRegistrationOpen ? "Register Now" : "Registration Close"}
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
