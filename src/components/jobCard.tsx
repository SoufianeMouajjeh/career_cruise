import React, { useCallback } from 'react'
import { Building2, Clock, Globe2 } from 'lucide-react'
import { Job } from '@/types'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'

// Extracted outside component to prevent recreation on each render
const DefaultLogo = React.memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 56 56" 
    className="h-14 w-14 rounded-xl bg-[#7047EB]"
  >
    <rect width="56" height="56" fill="#7047EB"/>
    <text
      x="28"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="20"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      JOB
    </text>
  </svg>
))

DefaultLogo.displayName = 'DefaultLogo'

export const JobCard = React.memo(function JobCard({ job }: { job: Job }) {
  const {
    employer_logo,
    employer_name,
    job_title,
    job_location,
    job_employment_type,
    job_min_salary,
    job_posted_at,
    job_apply_link,
  } = job
  // Format employment type
  const employmentType = job_employment_type || 'Not specified'

  // Format location
  const location = job_location || 'Remote'

  // Format salary
  const salary = job_min_salary  || 'Salary not specified'

  // Format posting date
  const formattedDate = job_posted_at || 'Not specified'

  const handleQuickApply = useCallback(() => {
    // Implement quick apply logic here
    // Access job_title, job_apply_link, etc. as needed
  }, [job_title, job_apply_link])


  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-[#7047EB]">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="relative">
              {employer_logo ? (
                  <img
                    src={employer_logo}
                    alt={`${employer_name} logo`}
                    className="rounded-xl w-14 h-14"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.default-logo')?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={cn('default-logo', employer_logo ? 'hidden' : '')}>
                  <DefaultLogo />
                </div>
            </div>
            <div>
              <h3 className="font-semibold text-md group-hover:text-primary transition-colors">
                {job_title || 'Position Not Specified'}
              </h3>
              <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                <div className="flex items-center space-x-1">
                  <Building2 className="h-4 w-4" />
                  <span>{employer_name || 'Company Not Specified'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Globe2 className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge 
            variant="secondary" 
            className={cn(
              "px-3 py-1 font-medium",
              employmentType.includes('Full-time') && "bg-blue-50 text-blue-700 hover:bg-blue-100",
              employmentType.includes('Full-time and Part-time') && "bg-green-50 text-green-700 hover:bg-green-100",
              employmentType.includes('Contract') && "bg-purple-50 text-purple-700 hover:bg-purple-100",
              employmentType.includes('Part-time')&& "bg-orange-50 text-orange-700 hover:bg-orange-100",
              employmentType.includes('Internship')&& "bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
            )}
          >
            {employmentType}
          </Badge>
          <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
            {location}
          </Badge>
          <Badge variant="secondary" className="bg-gray-50 text-gray-700 hover:bg-gray-100">
            {salary}
          </Badge>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Posted {formattedDate}</span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={job_apply_link}
              target='_blank'
            >
            </a>
            <a
              target='_blank'
              className='block p-0'
              href={job_apply_link}> 
              <Button
                variant="outline" 
                className="shadow-sm hover:bg-[#7047EB] hover:text-white rounded"
                onClick={handleQuickApply}
              >
                Quick Apply
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

JobCard.displayName = 'JobCard'