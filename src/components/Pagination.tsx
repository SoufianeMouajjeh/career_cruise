import React, { useMemo, useCallback } from 'react'
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = React.memo(function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Memoize pageNumbers array to prevent recreation on every render
  const pageNumbers = useMemo(() => {
    const numbers: (number | null)[] = []
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        numbers.push(i)
      } else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        numbers.push(null)
      }
    }
    return numbers
  }, [currentPage, totalPages])

  // Memoize handler to prevent recreation on every render
  const handlePageChange = useCallback((page: number) => {
    onPageChange(page);
  }, [onPageChange])

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="hover:bg-(#7047EB) text-[#7047EB]"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) handlePageChange(currentPage - 1)
            }}
          />
        </PaginationItem>
        {pageNumbers.map((number, index) =>
          number === null ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={number}>
              <PaginationLink
                className="font-bold hover:text-[#7047EB]"
                href="#"
                isActive={currentPage === number}
                onClick={(e) => {
                  e.preventDefault()
                  handlePageChange(number)
                }}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            className="hover:bg-(#7047EB) text-[#7047EB]"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) handlePageChange(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  )
})

Pagination.displayName = 'Pagination'