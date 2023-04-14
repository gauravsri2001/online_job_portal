

import React from "react";


export default (props) => {
  
    const skills = [
      "Java",
      'C++',
      'Python',
      'ReactJs',
      'NextJS',
      'Flutter',
      'Kotlin',
      'Angular'
    ];
    
    
 
    return (
    
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg overflow-hidden">
        <div className="bg-gray-100 flex py-4 px-6 font-bold text-xl gap-56">
          Post Job
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Job title"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>
            <div>
              <select
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              >
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Company name"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company URL"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>
            <div>
              <select
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              >
                <option value="Remote">Remote</option>
                <option value="In-office">In-office</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Job Link"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>
            <div className="col-span-2">
              <textarea
                placeholder="Job Description"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none resize-none"
                rows="4"
              ></textarea>
            </div>
          
          <div className="mt-0.5 w-full col-span-2">
            Skills
            <div className="flex items-center align-middle overflow-auto" >
            {skills.map((skill) => (
              <div key={skill} className="flex m-2 p-2 text-sm rounded-md font-semibold border border-solid bg-black text-white cursor-pointer">
              {skill}
              </div>
              ))}
              </div>
              </div>
            
            </div>
          </div>
<div>
<div className="flex space-x-40 justify-center">
<span className='text-xs text-red-600'>*Required Fields</span>
          
          <div className="py-3 px-4">
          <button className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 text-white">Post a Job</button>
          </div>
          
        </div>
        </div>

        </div>
      </div>
      
     
     

  );
};
 