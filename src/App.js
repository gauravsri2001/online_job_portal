// import React from "react";
// import JobComponent from "./components/JobComponent";
// import SearchBar from "./searchbar/SearchBar";
// import JobCard from "./job/JobCard";
// import Job from "./post-job/Job";

// const App = () => (
//   <div>
  
//   <JobComponent /> 
//   <SearchBar />
//   <JobCard />
//   <Job />
  
//   </div>
      
// );
// export default App;


// import React, { useEffect, useState } from "react";
// import JobComponent from "./components/JobComponent";
// import SearchBar from "./searchbar/SearchBar";
// import JobCard from "./job/JobCard";
// import Job from "./post-job/Job";
// import {firestore} from './firebase/config';

// const App = () => (
//   const [jobs, setJobs] = useState([]);
  

//   const fetchJobs = async () => {
//     const req = await firestore
//     .collection("jobs")
//     .orderBy("postedOn", "desc")
//     .get();
//     const tempjobs = req.docs.map((job) => ({...job.data(), id: job.id, postedOn: job.data().postedOn.todate() }) );
//     setJobs(tempjobs);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [])
//   <div>
  
//   <JobComponent /> 
//   <SearchBar />
//   <div>
//     {jobs.map((job) => (
//       <JobCard key = {job.id} {...job} />
//     ))}
//   </div>
//   <JobCard />
//   <Job />
  
//   </div>
      
// );
// export default App;


import React, { useEffect, useState } from "react";
import JobComponent from "./components/JobComponent";
import SearchBar from "./searchbar/SearchBar";
import JobCard from "./job/JobCard";
import Job from "./post-job/Job";
import {firestore} from './firebase/config.js';
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const collectionRef = collection(firestore, 'Jobs');
    const documents = await getDocs(collectionRef)
    documents.docs.map((doc)=>{
      console.log(doc.data())
      setJobs(prev=>{return [...prev, doc.data()]})
    })
    // const tempJobs = req.docs.map((job) => ({
    //   ...job.data(), 
    //   id: job.id, 
    //   postedOn: job.data().postedOn.toDate() }) );
    // setJobs(tempJobs);
    
  };

  useEffect(() => {
    fetchJobs();
  }, [])
  console.log(jobs)
  return (
    <div>
      <JobComponent /> 
      <SearchBar />
      <div>
        {jobs.map((job, id) => (
          <JobCard key={id} {...job} />
        ))}
      </div>
      <Job />
    </div>
  );
};

export default App;
