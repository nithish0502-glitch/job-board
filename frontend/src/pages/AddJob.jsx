import { useState } from "react";
import { createJob } from "../api";
import { useNavigate } from "react-router-dom";
import './AddJob.css';

function AddJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    jobType: "",
    experienceLevel: "",
    tags: "",
    applyLink: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formWithTags = {
      ...form,
      tags: form.tags.split(',').map(tag => tag.trim()),
    };
    await createJob(formWithTags);
    navigate("/");
  };

  return (
    <div className="add-job-container">
      <h1 className="add-job-title">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="add-job-form">

        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="add-job-input" required />

        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="add-job-input" required />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="add-job-textarea" required />

        <input name="location" value={form.location} onChange={handleChange} placeholder="Location (e.g., Remote, Chennai)" className="add-job-input" />

        <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary Range(LPA)" className="add-job-input" />

        <select name="jobType" value={form.jobType} onChange={handleChange} className="add-job-input">
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <select name="experienceLevel" value={form.experienceLevel} onChange={handleChange} className="add-job-input">
          <option value="">Select Experience Level</option>
          <option value="Entry">Entry</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>

        <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma-separated, e.g., React, Node.js)" className="add-job-input" />

        <input name="applyLink" value={form.applyLink} onChange={handleChange} placeholder="Application Link or Email" className="add-job-input" />

        <button type="submit" className="add-job-button">Submit</button>

      </form>
    </div>
  );
}

export default AddJob;
