import React from "react";

const Upcoming = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">
        Upcoming Marathons Event
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-3">
          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/Cards/2025_Tokyo_Marathon_logo.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">2025 Tokyo Marathon</h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date:March 2, 2025</p>
                <div>
                  <p> 📍 Location: Tokyo, Japan </p>
                  <p className="mt-2">
                    A platinum-level World Marathon Major, drawing top
                    international elite runners and large crowds{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/Cards/images.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">2025 Boston Marathon</h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date: April 21, 2025</p>
                <div>
                  <p>📍 Location: Boston, Massachusetts, U.S.</p>
                  <p className="mt-2">
                    One of the oldest and most prestigious races in the world,
                    featuring elite and wheelchair divisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/Cards/images (1).png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">2025 Berlin Marathon</h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date: September 21, 2025</p>
                <div>
                  <p> 📍 Location: Berlin, Germany </p>
                  <p className="mt-2">
                    A fast, flat course famous for world-record performances,
                    part of the WMM series
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/Cards/images (2).png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">2025 Chicago Marathon</h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date: October 12, 2025</p>
                <div>
                  <p>📍 Location: Chicago, Illinois, U.S.</p>
                  <p className="mt-2">
                    Another WMM race known for its flat, speedy course and
                    enthusiastic crowd support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/Cards/4a24tfwqr5x6bm32._original.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">2025 Sydney Marathon</h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date: August 31, 2025</p>
                <div>
                  <p> 📍 Location: Sydney, Australia </p>
                  <p className="mt-2">
                    Newly elevated to World Marathon Majors status in 2025,
                    showcasing iconic landmarks like the Opera House and Harbour
                    Bridge
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-[#578FCA] shadow-sm">
            <figure>
              <img
                className="w-[50%] rounded-xl pt-4"
                src="/public/Cards/images (3).png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body justify-center items-center ">
              <h2 className="card-title text-lg  ">
                2025 New York City Marathon
              </h2>

              <div className="card-actions justify-center font-normal mt-2">
                <p>📅 Date: November 2, 2025</p>
                <div>
                  <p> 📍 Location: New York City, New York, U.S. </p>
                  <p className="mt-2">
                    The final World Marathon Major of the year, with a
                    world-famous course through all five boroughs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default Upcoming;
