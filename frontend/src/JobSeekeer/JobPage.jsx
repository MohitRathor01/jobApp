import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs)

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('http://localhost:8000/jobs');
        const data = await response.json();
        console.log(data)
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchJobs();
  }, []);
  const aplyingHandle = ()=>{
    
  }

  return (
    <div className='d-flex justify-content-center m-2 p-2'>
      {jobs.map(job => (
            <Card style={{ width: '18rem'  }} key={job.id} className='m-4 '>
            <Card.Body classname="">
            <Card.Title>{job.company_Name}</Card.Title>
              <p>{job.Job_title || job.Job_Title}</p>
              <p> Exp:{job.Job_Exp}</p>
                <p>Location: {job.Job_Location}</p>
              <div className=" btn btn-background">Apply now </div>
            </Card.Body>
          </Card>
      
      ))}
    </div>
  );
}

export default JobPage;
