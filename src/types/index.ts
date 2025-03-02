export interface JobSearchResponse {
  data: Job[];
  status: string;
  onClose: () => void;
}

export interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_location: string;
  job_employment_type: string[];
  job_apply_link: string;
  job_description: string;
  job_posted_at_timestamp: number;
  job_salary?: string;
  job_posted_at: string;
  job_min_salary?: string;
  Qualifications: string[];
  Responsibilities: string[];
  onClose: () => void;
}
