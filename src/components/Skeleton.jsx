import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonComponent() {
  return (
    <>
      <Skeleton
        className="mt-2 h-12 w-[50%] flex ml-auto mr-auto"
        baseColor="#9CA3AF"
        highlightColor="#6B7280"
      />
      <Skeleton className="h-4 mt-4  w-[50%] flex ml-auto mr-auto" count={5} />
      <Skeleton
        className="mt-4 h-12 w-[50%] flex ml-auto mr-auto"
        baseColor="#9CA3AF"
        highlightColor="#6B7280"
      />
      <Skeleton className="h-4 mt-4 w-[50%] flex ml-auto mr-auto" count={5} />
    </>
  );
}

export default SkeletonComponent;
