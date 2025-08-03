const BASE_URL = "https://mpqwmt-3000.csb.app"; // Replace with real backend URL

export const fetchJobs = async () => {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
};

export const fetchJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`);
  return res.json();
};

export const createJob = async (data) => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
