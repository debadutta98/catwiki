import Skeleton from "react-loading-skeleton";

export default function TopSearchedSkeleton() {
  return (
    <>
      <li>
        <Skeleton
          style={{ height: "220px", width: "220px", borderRadius: "24px" }}
          count={1}
        />
      </li>
      <li>
        <Skeleton
          style={{ height: "220px", width: "220px", borderRadius: "24px" }}
          count={1}
        />
      </li>
      <li>
        <Skeleton
          style={{ height: "220px", width: "220px", borderRadius: "24px" }}
          count={1}
        />
      </li>
      <li>
        <Skeleton
          style={{ height: "220px", width: "220px", borderRadius: "24px" }}
          count={1}
        />
      </li>
    </>
  );
}
