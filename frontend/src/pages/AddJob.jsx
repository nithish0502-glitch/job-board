import { useState } from "react";
import { createJob } from "../api";
import { useNavigate } from "react-router-dom";
import './AddJob.css';

function AddJob() {
  const [form, setForm] = useState({ title: "", company: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(form);
    navigate("/");
  };

  return (
    <div className="add-job-container">
      <h1 className="add-job-title">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="add-job-form">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="add-job-input"
          required
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className="add-job-input"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="add-job-textarea"
          required
        />
        <button type="submit" className="add-job-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddJob;
