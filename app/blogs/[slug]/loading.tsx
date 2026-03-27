export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Back button skeleton */}
      <div className="h-5 w-32 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />

      {/* Cover image skeleton */}
      <div className="w-full aspect-[16/7] bg-[#f5f5f5] dark:bg-white/5 rounded-xl animate-pulse" />

      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-5 w-40 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
        <div className="h-12 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
        <div className="h-6 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
      </div>

      {/* Divider */}
      <div className="border-t border-[#e5e5e5] dark:border-white/10" />

      {/* Content skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
