import { useState } from "react";

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio = "aspect-[4/3]",
  loading = "lazy",
  onClick,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#ECE9E2] ${aspectRatio} ${containerClassName}`}
      onClick={onClick}
    >
      {/* Shimmer Skeleton Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-box z-0" />
      )}

      {/* Image with smooth fade-in */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } ${className}`}
      />
    </div>
  );
}
