"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from 'lucide-react'
import { useState } from 'react'

interface SearchFormProps {
  onSearch: (query: string, country: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query, country)
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-4xl gap-2 mx-auto items-center">
      <div className="flex items-center justify-between mx-auto w-full py-2 border-[1px]">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
            placeholder="Job title or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 border-0 shadow-none border-r-[1px] font-normal"
            />
        </div>
        <div className="relative flex-1">
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
            placeholder="Location"
            className="pl-9 border-0 shadow-none font-normal"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            />
        </div>
      </div>
      <Button  type="submit" className="shadow-none bg-[#7047EB] w-[98px] h-[53px] text-white hover:bg-[#402591]">
        Find Jobs
        </Button>
    </form>
  )
}

