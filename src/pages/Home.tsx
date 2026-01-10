import { Company } from "@/components/company"
import { SearchForm } from "../components/search-form"
import { JobCard } from '@/components/jobCard'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios"
import { Job } from "@/types"
import { useEffect, useState, useRef } from "react"
import { Pagination } from '@/components/Pagination'
import JobCardSkeleton from "@/components/jobcardskeleton"


export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const jobsPerPage = 10
  const jobsSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await axios.request({
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {
            query: activeTab === 'all' ? 'developer' : activeTab,
            page: currentPage.toString(),
            num_pages: '1',
            country: 'us',
            date_posted: 'all'
          },
          headers: {
            'x-rapidapi-key': 'e64e31241emsh3411f1fac628037p190362jsn6d949b5eb129',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          }
        })

        // Access the data property from the response
        const jobsData = response?.data?.data || []
        
        // Initialize as empty array if data is not an array
        setJobs(Array.isArray(jobsData) ? jobsData.slice(0, jobsPerPage) : [])
        
        // Calculate total pages based on API response (assuming 100+ jobs available)
        // Since the API doesn't return total count, we'll set a reasonable max
        setTotalPages(10) // Limiting to 10 pages (100 jobs total)
        
      } catch (error) {
        console.error('Error fetching jobs:', error)
        setError('Failed to fetch jobs. Please try again later.')
        setJobs([]) // Reset jobs on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [activeTab, currentPage])

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1)
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
          'x-rapidapi-key': 'e64e31241emsh3411f1fac628037p190362jsn6d949b5eb129',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      })

      const jobsData = response?.data?.data || []
      setJobs(Array.isArray(jobsData) ? jobsData.slice(0, jobsPerPage) : [])
      setTotalPages(10) // Set reasonable max pages
      
    } catch (error) {
      console.error('Error fetching jobs:', error)
      setError('Failed to fetch jobs. Please try again later.')
      setJobs([]) // Reset jobs on error
    } finally {
      setIsLoading(false)
    }
  }

  // Handle page change with smooth scroll
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to jobs section smoothly
    jobsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
      
      <section ref={jobsSectionRef} className="container px-4 mx-auto py-8">
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
          <div className="space-y-6">
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-8">No jobs found</div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job: Job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
            <Pagination
              className="mt-8"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        
        )}
      </section>
    </main>
  )
}