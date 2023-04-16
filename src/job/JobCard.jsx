import React from "react";

const JobCard = ({companyName, logo, title, skills, postedOn, location, type}) => {
  const date = new Date(postedOn.seconds * 1000); // convert seconds to milliseconds
  const formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour12: true,
  });

  return (
    <div className='items-center shadow-md w-5/6 mx-auto'>
      <div className="w-full align-middle flex justify-between bg-white shadow-lg m-4 p-4 px-28 py-4 border-2 rounded-md my-5">
        <div className="rounded-full">
          <img className="w-8 h-8 m-5 h-1/2 w-24" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col">
          <h3>{title}</h3>
          <span ></span>
          <h3 className="font-semibold text-3xl text-purple-700">{companyName}</h3>
        </div>
        <div className='flex items-center justify-center align-middle'>
          <span className="m-1 p-6 text-base border-solid rounded-md cursor-pointer font-semibold bg-black text-white">
            {skills}
          </span>
        </div>
        <div className="flex space-x-8 w-1/3">
          <div>{formattedDate}</div>
          <div>{location}</div>
          <div>{type}</div>
        </div>
        <div>
          <button className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 text-white ">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

