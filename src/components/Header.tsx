import { Link } from "react-router-dom"


export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <span className="font-bold text-xl"><span className="text-[#7047EB]">Career</span>Cruise</span>
        </Link>
        <nav className="flex items-center space-x-12">
          <Link to="/" className="text-sm hover:text-[#7047EB] transition-colors">
          Jobs
          </Link>
          <Link to="/PostJob" className="text-sm hover:text-[#7047EB] transition-colors">
          Post a Job
          </Link>
        </nav>
      </div>
    </header>
  )
}

