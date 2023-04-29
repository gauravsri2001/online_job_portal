
// import React, {useState} from "react";
// import Job from "../post-job/Job";
// const JobComponent = () => {
//   const [jobList, setJobList] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//     const handleClick = () => {
//     setShowForm(!showForm)
//   }
//   //console.log("Hook", jobList);
//   return(
//     <>
//       <div className="bg-black text-white flex justify-between items-center px-28 py-5">
//         <div className="text-3xl font-semibold">Job Listing</div>
//         <div className="my-4">
//           <button onClick={handleClick} className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 ">
//             Post a Job
//           </button>
//         </div>
//       </div>
//        { showForm && <Job showForm={showForm} setShowForm={setShowForm} setJobList={setJobList} /> } 
//     </> 
//   )

// };

// export default JobComponent;


import React, { useState } from "react";
import Job from "../post-job/Job";

const JobComponent = () => {
  const [jobList, setJobList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="bg-black text-white flex justify-between items-center px-28 py-5">
        <div className="text-3xl font-semibold">Job Listing</div>
        <div className="my-4">
          <button
            onClick={handleClick}
            className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400"
          >
            Post a Job
          </button>
        </div>
      </div>
      {showForm && <Job showForm={showForm} setShowForm={setShowForm} setJobList={setJobList} />}
      <div>
        {jobList.map((job, index) => (
          <div key={index}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobComponent;



