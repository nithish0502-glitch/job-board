import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchJobById } from "../api";
import './JobDetail.css'; // 👈 Add this import

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
      <p className="job-detail-company">{job.company}</p>
      <p className="job-detail-description">{job.description}</p>
    </div>
  );
}

export default JobDetail;
