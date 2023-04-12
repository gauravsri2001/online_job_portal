import React from "react";
const SearchBar = () => (
    <div className="px-20 py-3 bg-white flex items-center shadow-md rounded-md w-5/6 mx-auto space-x-8 my-5">

    <select className="px-5  bg-slate-200 h-11 m-3 w-2/5">
    <option value="" selected disabled hidden>Job Type</option>
    <option value="Full Time">Full Time</option>
    <option value="Part-time">Part-time</option>
    <option value="Internship">Internship</option>
    <option value="Contract">Contract</option>
    </select>

    <select className="px-5 bg-slate-200 h-11 m-2 w-2/5">
    <option value="" selected disabled hidden>Work mode</option>
    <option value="Remote">Remote</option>
    <option value="In-Office">In-Office</option>
    </select>

    <button className="bg-purple-700 px-8 py-4 rounded-2xl hover:text-slate-700 hover:bg-purple-400 text-white w-40 border-2 ">
        Search
      </button>
        
    </div>
);
export default SearchBar;