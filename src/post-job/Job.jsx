import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import {firestore} from '../firebase/config'
const Job = ({showForm, setShowForm}) => {
  
  const [loading, setLoading] = useState(false)

  const cardRef = useRef();

  const [jobDetails, setJobDetails] = useState({
    companyName : "",
    companyUrl: "",
    link: "",
    location: "",
    logo: "",
    skills: [],
    title: "",
    type: "",
    description: ""
  })

  const handleChange = e => {
    e.persist();
    setJobDetails(oldState => ({...oldState, [e.target.name]: e.target.value}))
  };

  const addRemoveSkill = (skill) => jobDetails.skills.includes(skill)
  ? setJobDetails((oldState) => ({
    ...oldState, 
    skills: oldState.skills.filter((s) => s !== skill ),
  }))
   : setJobDetails((oldState) => ({
    ...oldState, 
    skills: oldState.skills.concat(skill)}));

  
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(firestore, 'jobs');
        const snapshot = await addDoc(collectionRef, jobDetails);
        setLoading(false);
        toggleForm();
      } catch (error) {
        
        console.error('Error submitting job details:', error);
        setLoading(false);
      }
    };
    
  
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

    const toggleForm = () => {
      setShowForm(!showForm);
    };
    return (
    <>
      <div ref={cardRef}  className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg overflow-hidden">
        <div className="bg-gray-100 flex py-4 px-6 font-bold text-xl gap-56">
          Post Job
          <svg
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 cursor-pointer"
          onClick={toggleForm}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
              onChange={handleChange}
              name="title"
              value={jobDetails.title}
              autoComplete="off"
                type="text"
                placeholder="Job title"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>

            <div>
              <select
              onChange={handleChange}
              name="type"
              value={jobDetails.type}
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              >
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <input
              onChange={handleChange}
              name="companyName"
              value={jobDetails.companyName}
              autoComplete="off"
                type="text"
                placeholder="Company name"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>

            <div>
              <input
              onChange={handleChange}
              name="companyUrl"
              value={jobDetails.companyUrl}
              autoComplete="off"
                type="text"
                placeholder="Company URL"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>

            <div>
              <select
              onChange={handleChange}
              name="location"
              value={jobDetails.location}
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              >
              <option value="" selected disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-office">In-office</option>
              </select>
            </div>

            <div>
              <input
              onChange={handleChange}
              name="link"
              value={jobDetails.link}
              autoComplete="off"
                type="text"
                placeholder="Job Link"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none"
              />
            </div>

            <div className="col-span-2">
              <textarea
              onChange={handleChange}
              name="description"
              value={jobDetails.description}
                placeholder="Job Description"
                className="bg-gray-100 py-2 px-4 w-full rounded-lg outline-none resize-none"
                rows="4"
              ></textarea>
            </div>
          

          <div className="mt-0.5 w-full col-span-2">
            Skills
            <div onClick={() => {}} className="flex items-center align-middle overflow-auto" >
            {skills.map((skill) => (
              <div key={skill} 
              onClick={() => addRemoveSkill(skill)}

              className={`flex m-2 p-2 text-sm rounded-md font-semibold border border-solid hover:text-slate-700 hover:bg-purple-400 text-white cursor-pointer ${
              jobDetails.skills.includes(skill) ? 'bg-purple-400' : 'bg-black'
            }`}
              >
      
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
          
          
          <div className="py-3 px-4" >
          <button
          onClick = {handleSubmit}
          disabled = {loading}
           className="bg-purple-700 py-3 px-3 rounded-2xl hover:text-slate-700 hover:bg-purple-400 text-white cursor-pointer"
          >
          
          Post Job
         
          </button>
          </div>
          
        </div>
        </div>

        </div>
      </div>

    </>
    
  );
};
 
export default Job;