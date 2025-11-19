import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading: FC = () => {
  return (
    <div
      className={`
        flex min-h-98 w-3/5 flex-col items-center justify-center 
        rounded-lg bg-white p-4 dark:bg-black
      `}
    >
      <div className="w-full space-y-8">
        
        {/* Username Label */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" /> {/* FormLabel */}
          
          {/* Input field */}
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Button */}
        <div className="w-full">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

      </div>
    </div>
  );
};

export default Loading;
