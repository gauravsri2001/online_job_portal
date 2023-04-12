
import React from "react";

const JobComponent = () => (
  <div className="bg-black text-white flex justify-between items-center px-28 py-5">
    <div className="text-3xl font-semibold">Job Listing</div>
    <div className="my-4">
      <button className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 ">
        Post a Job
      </button>
    </div>
  </div>
);

export default JobComponent;
