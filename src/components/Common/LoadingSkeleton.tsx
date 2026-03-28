

const LoadingSkeleton = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className="glass p-10 h-64 rounded-[2rem] border-white/50 animate-pulse bg-white/5 flex flex-col gap-6"
        >
          <div className="w-16 h-16 bg-gray-200/50 rounded-2xl"></div>
          <div className="space-y-3">
            <div className="h-6 w-3/4 bg-gray-200/50 rounded-md"></div>
            <div className="h-4 w-full bg-gray-200/30 rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-200/30 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
