import React from "react";

const SuccessfulEvents = () => {
  return (
    <div className="mx-auto w-11/12">
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">
        Successful Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-3">
        <div className="card bg-[#578FCA] shadow-sm">
          <figure>
            <img
              className="w-full rounded-xl pt-4"
              src="/Successful events/1467034-31337729-2560-1440.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-center ">
            <h2 className="card-title text-lg  ">
              New York City Marathon 2024
            </h2>

            <div className="card-actions text-center font-normal mt-2">
              <p>📅 Date:November 3, 2024</p>
              <div>
                <p> 📍 Location: New York City,USA </p>
                <p className="mt-2">
                  Elite titles claimed by Abdi Nageeye (NED) in 2:07:39 and
                  Sheila Chepkirui (KEN) in 2:24:35, with Kenyan women sweeping
                  the podium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-[#578FCA] shadow-sm">
          <figure>
            <img
              className="w-full rounded-xl pt-4"
              src="/Successful events/650675f0a63428db9d6eefb6.jpeg"
            />
          </figure>
          <div className="card-body justify-center items-center ">
            <h2 className="card-title text-lg  ">London Marathon 2025</h2>

            <div className="card-actions text-center font-normal mt-2">
              <p>📅 Date:April 27, 2025</p>
              <div>
                <p> 📍 Location: London,UK </p>
                <p className="mt-2">
                  Sabastian Sawe (KEN) won the men's elite race in 2:02:27,
                  while Ethiopia’s Tigst Assefa shattered the women-only world
                  record with 2:15:50
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-[#578FCA] shadow-sm">
          <figure>
            <img
              className="w-full  rounded-xl pt-4"
              src="/Successful events/istockphoto-143919656-612x612.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-center ">
            <h2 className="card-title text-lg  ">Paris Marathon 2025</h2>

            <div className="card-actions text-center font-normal mt-2">
              <p>📅 Date:April 3, 2025</p>
              <div>
                <p> 📍 Location: Paris,France </p>
                <p className="mt-2">
                  Benard Biwott won the men’s title in 2:05:25; Bedatu Hirpa
                  claimed the women’s crown in 2:20:45
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulEvents;
