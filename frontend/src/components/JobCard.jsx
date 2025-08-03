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
    </div>
  );
}

export default JobCard;
