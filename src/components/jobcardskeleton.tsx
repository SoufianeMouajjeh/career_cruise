import { Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const JobCardSkeleton = () => {
  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        {/* Header Section */}
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse" />
          
          <div className="flex-1">
            {/* Title */}
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-2" />
            
            {/* Company and Location */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex gap-2 mt-4">
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-28 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-32 bg-gray-200 rounded-full animate-pulse" />
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          {/* Posted Time */}
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <div className="h-9 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-9 w-24 bg-violet-200 rounded animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCardSkeleton;