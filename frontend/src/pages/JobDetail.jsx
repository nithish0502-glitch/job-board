import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobById } from "../api";
import './JobDetail.css';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJobById(id).then(setJob);
  }, [id]);

  if (!job) return <div className="job-detail-loading">Loading...</div>;

  return (
    <div className="job-detail-container">
      <h1 className="job-detail-title">{job.title}</h1>
      <p className="job-detail-company"><strong>Company:</strong> {job.company}</p>
      <p className="job-detail-description">{job.description}</p>

      {job.location && <p><strong>Location:</strong> {job.location}</p>}
      {job.salary && <p><strong>Salary:</strong> {job.salary} LPA</p>}
      {job.jobType && <p><strong>Job Type:</strong> {job.jobType}</p>}
      {job.experienceLevel && <p><strong>Experience:</strong> {job.experienceLevel}</p>}
      {job.tags && job.tags.length > 0 && (
        <p><strong>Tags:</strong> {job.tags.join(', ')}</p>
      )}
      {job.applyLink && (
        <p>
          <strong>Apply:</strong>{" "}
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            {job.applyLink}
          </a>
        </p>
      )}
    </div>
  );
}

export default JobDetail;
