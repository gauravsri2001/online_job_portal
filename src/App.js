
import React from "react";
import JobComponent from "./components/JobComponent";
import SearchBar from "./searchbar/SearchBar";
import JobCard from "./job/JobCard";
import Job from "./post-job/Job";

const App = () => (
  <div>
  <Job />
  <JobComponent /> 
  <SearchBar />
  <JobCard />
  
  </div>
  
      
      //<JobCard />
);

export default App;
