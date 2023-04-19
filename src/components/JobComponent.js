import React, {useState} from "react";
import Job from "../post-job/Job";


const JobComponent = () => {
  const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
    setShowForm(!showForm)
  }
  return(
    <>
      <div className="bg-black text-white flex justify-between items-center px-28 py-5">
        <div className="text-3xl font-semibold">Job Listing</div>
        <div className="my-4">
          <button onClick={handleClick} className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 ">
            Post a Job
          </button>
        </div>
      </div>
       { showForm && <Job showForm={showForm} setShowForm={setShowForm} /> } 
    </>
  )

};

export default JobComponent;







// import React from "react";
// import Job from "./post-job/Job"; // import the Job component
// //import Job from "./components/Job";
// const JobComponent = ({ postJob }) => (
//   <div className="bg-black text-white flex justify-between items-center px-28 py-5">
//     <div className="text-3xl font-semibold">Job Listing</div>
//     <div className="my-4">
//       <button
//         className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400"
//         onClick={() => postJob()}
//       >
//         Post a Job
//       </button>
//     </div>
//     <Job postJob={postJob}/>
//     {/* <Job /> add the Job component here */}
//   </div>
// );

// export default JobComponent;





// import React from "react";
// //import Job from "./post-job/Job";
// import Job from "./post-job/Job";

// const JobComponent = ({ postJob }) => {
//   return (
//     <>
//       <div className="bg-black text-white flex justify-between items-center px-28 py-5">
//         <div className="text-3xl font-semibold">Job Listing</div>
//         <div className="my-4">
//           <button
//             className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400"
//             onClick={postJob}
//           >
//             Post a Jobfewewf
//           </button>
//         </div>
//       </div>
//       <Job />
//     </>
//   );
// };

// export default JobComponent;

