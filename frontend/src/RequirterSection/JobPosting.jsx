import React, { useState } from 'react';

const JobPosting = () => {
  const [formData, setFormData] = useState({
    company_Name: '',
    Job_Title: '',
    Job_Salary: '',
    Job_Location: '',
    Job_Exp: '',
    Job_Opening: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/jobs', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
     }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mainHover">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input type="text" className="form-control" id="companyName" name="company_Name" value={formData.company_Name} onChange={handleChange} placeholder="Enter company name" />
            </div>
            <div className="mb-3 mainHover">
              <label htmlFor="jobTitle" className="form-label">Job Title</label>
              <input type="text" className="form-control" id="jobTitle" name="Job_Title" value={formData.job_title} onChange={handleChange} placeholder="Enter job title" />
            </div>
            <div className="mb-3 mainHover">
              <label htmlFor="salary" className="form-label">Salary</label>
              <input type="text" className="form-control" id="salary" name="Job_Salary" value={formData.Job_Salary} onChange={handleChange} placeholder="Enter salary" />
            </div>
            <div className="mb-3 mainHover">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" id="location" name="Job_Location" value={formData.Job_Location} onChange={handleChange} placeholder="Enter location" />
            </div>
            <div className="mb-3 mainHover">
              <label htmlFor="exp" className="form-label">Exp</label>
              <input type="text" className="form-control" id="exp" name="Job_Exp" value={formData.Job_Exp} onChange={handleChange} placeholder="Exp" />
            </div>
            <div className="mb-3 mainHover">
              <label htmlFor="openings" className="form-label">Number of Openings</label>
              <input type="text" className="form-control" id="openings" name="Job_Opening" value={formData.Job_Opening} onChange={handleChange} placeholder="Enter number of openings" />
            </div>
            <button type="submit" className="btn btn-background">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
