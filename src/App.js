
import React from "react";
import JobComponent from "./components/JobComponent";
import SearchBar from "./searchbar/SearchBar";
import JobCard from "./job/JobCard";
import Job from "./post-job/Job";

const App = () => (
  <div>
  <JobComponent /> 
  <SearchBar />
  <JobCard />
  <Job />
  </div>
  
      
      //<JobCard />
);

export default App;
