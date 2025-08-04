import { Link } from "react-router-dom";
import './JobCard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2 className="job-title">
        <Link to={`/jobs/${job._id}`} className="job-link">
          {job.title}
        </Link>
      </h2>

      <p className="job-company">{job.company}</p>

      {job.location && <p className="job-location">📍 {job.location}</p>}
      {job.salary && <p className="job-salary">💰 {job.salary} LPA</p>}
      {job.jobType && <p className="job-type">🕒 {job.jobType}</p>}

      {job.tags && job.tags.length > 0 && (
        <div className="job-tags">
          {job.tags.map((tag, index) => (
            <span key={index} className="job-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobCard;
