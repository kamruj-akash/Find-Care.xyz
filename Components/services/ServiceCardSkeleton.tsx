const ServiceCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="h-56 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-3 h-5 w-2/3 rounded bg-gray-200" />

        {/* Description */}
        <div className="mb-2 h-4 w-full rounded bg-gray-200" />
        <div className="mb-2 h-4 w-11/12 rounded bg-gray-200" />
        <div className="mb-6 h-4 w-9/12 rounded bg-gray-200" />

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="h-6 w-24 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;
