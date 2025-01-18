import { Company } from "@/components/company"
import { SearchForm } from "../components/search-form"
import { JobCard } from '@/components/jobCard'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios"
import { Job } from "@/types"
import { useEffect, useState } from "react"
import { Pagination } from '@/components/Pagination'

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 15

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const totalPages = Math.ceil(jobs.length / jobsPerPage)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        setCurrentPage(1)
        
        const response = await axios.request({
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {
            query: activeTab === 'all' ? 'developer' : activeTab,
            page: '1',
            num_pages: '20',
            country: 'us',
            date_posted: 'all'
          },
          headers: {
            'x-rapidapi-key': 'd42988c1ddmsh6fb6f128db749e8p1654c6jsn859ebb525141',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          }
        })

        // Access the data property from the response
        const jobsData = response?.data?.data || []
        
        // Initialize as empty array if data is not an array
        setJobs(Array.isArray(jobsData) ? jobsData : [])
        
      } catch (error) {
        console.error('Error fetching jobs:', error)
        setError('Failed to fetch jobs. Please try again later.')
        setJobs([]) // Reset jobs on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [activeTab])

  const handleSearch = async (query: string, country: string) => {
    try {
      setIsLoading(true)
      setError(null)
      setCurrentPage(1)
      
      const response = await axios.request({
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query,
          country,
          page: '1',
          num_pages: '1',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': 'd42988c1ddmsh6fb6f128db749e8p1654c6jsn859ebb525141',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      })

      const jobsData = response?.data?.data || []
      setJobs(Array.isArray(jobsData) ? jobsData : [])
      
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setError('Failed to fetch jobs. Please try again later.')
      setJobs([]) // Reset jobs on error
    } finally {
      setIsLoading(false)
    }
  }

  // Function to handle page change for pagination

  return (
    <main className="flex-1">
      <section className="py-2 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto text-center space-y-8 py-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Find Your <span className="bg-[#7047EB] text-white px-2 rounded">Dream Job</span>
            </h1>
            <p className="text-xl text-muted-foreground font-normal">
              Search through millions of jobs to find the perfect fit for you
            </p>
            <Company />
          </div>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>
      
      <section className="container px-4 mx-auto py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold">Latest Jobs</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex space-x-4 rounded">
              <TabsTrigger 
                className="rounded data-[state=active]:bg-[#7047EB] data-[state=active]:text-white" 
                value="all"
              >
                All Jobs
              </TabsTrigger>
              <TabsTrigger 
                className="rounded data-[state=active]:bg-[#7047EB] data-[state=active]:text-white" 
                value="design"
              >
                Design
              </TabsTrigger>
              <TabsTrigger 
                className="rounded data-[state=active]:bg-[#7047EB] data-[state=active]:text-white" 
                value="engineering"
              >
                Engineering
              </TabsTrigger>
              <TabsTrigger 
                className="rounded data-[state=active]:bg-[#7047EB] data-[state=active]:text-white" 
                value="marketing"
              >
                Marketing
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading jobs...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-8">No jobs found</div>
        ) : (
          <div className="space-y-6">
            {currentJobs.map((job: Job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
            <Pagination
              className="mt-8"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        
        )}
      </section>
    </main>
  )
}