import { useEffect, useState } from "react";
import { fetchJobs } from "../api";
import JobCard from "../components/JobCard";
import './Home.css'; // 👈 Import the CSS file

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Job Listings</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Home;
