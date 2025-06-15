import React from "react";

const Faq = () => {
  return (
    <div className="mx-auto w-11/12 mt-8 mb-8">
      <h2 className="text-2xl font-black mt-7 text-center  mb-8">
        Fruquently Asked Question
      </h2>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          <p className="text-xl">1.What is MarathonHub?</p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            MarathonHub is an all-in-one platform for marathon enthusiasts to
            discover events, access training plans, and connect with a running
            community. It helps runners prepare, register, and stay motivated
            throughout their journey.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p className="text-xl">2.Who can join or register?</p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            Anyone with a passion for running — from beginners to seasoned
            marathoners — can join or register on MarathonHub. All ages and
            experience levels are welcome to participate in events and community
            activities.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p className="text-xl">3.Is MarathonHub free to use?</p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            Yes, MarathonHub is free to use — you can access event listings,
            training resources, and community features at no cost. Some premium
            services or race registrations may carry a fee, but the core
            platform remains free.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p className="text-xl">4.Can I edit or cancel my registration??</p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            Yes, you can edit or cancel your registration by visiting your My
            Events dashboard and selecting the appropriate option under each
            event. Please note that cancellation or modification policies may
            vary by race, and fees or deadlines may apply.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p className="text-xl">5.How do I register for a marathon?</p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            To register for a marathon on MarathonHub, simply browse upcoming
            events and click the "Register" button on the event page. Fill out
            the required details and complete the payment if needed.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#4d94ce] border border-base-300 mb-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p className="text-xl">
            6.How do I start training for my first marathon?
          </p>
        </div>
        <div className="collapse-content text-sm">
          <p className="text-lg">
            Start by following a beginner-friendly training plan that gradually
            increases your mileage over 12–20 weeks. Focus on consistency,
            proper hydration, rest, and including both long runs and recovery
            days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
