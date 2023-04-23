import Skeleton from "react-loading-skeleton";
import './index.css';
export default function RatingSkeleton() {
    return <div className="rate">
        <Skeleton count={1} width={60} height={12} borderRadius={8}/>
        <Skeleton count={1} width={60} height={12} borderRadius={8} />
        <Skeleton count={1} width={60} height={12} borderRadius={8} />
        <Skeleton count={1} width={60} height={12} borderRadius={8} />
        <Skeleton count={1} width={60} height={12} borderRadius={8} />
    </div>
}