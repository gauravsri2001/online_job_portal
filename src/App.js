import React, { useEffect, useState } from "react";
import JobComponent from "./components/JobComponent";
import SearchBar from "./searchbar/SearchBar";
import JobCard from "./job/JobCard";

import {firestore} from './firebase/config.js';
import { collection, getDocs, addDoc } from "firebase/firestore";
//import Navbar from "./Landing Page/landing";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [ newJobModel, setNewJobModel] = useState(false)

  const fetchJobs = async () => {
    const collectionRef = collection(firestore, 'Jobs');
    const documents = await getDocs(collectionRef)
    documents.docs.map((doc)=>{
      console.log(doc.data())
      setJobs(prev=>{return [...prev, doc.data()]})
    })
   
  };


  useEffect(() => {
    fetchJobs();
  }, [])
  console.log(jobs)
  return (
    <div>
    {/* <Navbar /> */}
    
      <JobComponent openNewJobModel={() => setNewJobModel(true)} />       
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
