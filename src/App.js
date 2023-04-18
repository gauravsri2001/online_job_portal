import React, { useEffect, useState } from "react";
import JobComponent from "./components/JobComponent";
import SearchBar from "./searchbar/SearchBar";
import JobCard from "./job/JobCard";
import Job from "./post-job/Job";
import {firestore, app} from './firebase/config.js';
import { collection, getDocs, addDoc } from "firebase/firestore";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const collectionRef = collection(firestore, 'Jobs');
    const documents = await getDocs(collectionRef)
    documents.docs.map((doc)=>{
      console.log(doc.data())
      setJobs(prev=>{return [...prev, doc.data()]})
    })
   
  };
///
  const postJob = async (jobDetails) => {
    // await firestore.collection('jobs').add({
    //   ...jobDetails,
    //   postedOn: app.firestore.FieldValue.serverTimestamp()
    // })

    const collectionRef = collection(firestore, 'jobs');
    const snapshot = await addDoc(collectionRef, jobDetails);
  }
////
  useEffect(() => {
    fetchJobs();
  }, [])
  console.log(jobs)
  return (
    <div>
      <JobComponent /> 
      {/* <Job /> */}

      <Job postJob={postJob}/>
      
      <SearchBar />
      <div>
        {jobs.map((job, id) => (
          <JobCard key={id} {...job} />
        ))}
      </div>
     
    </div>
  );
};

export default App;
