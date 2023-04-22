import Skeleton from "react-loading-skeleton";
export default function GallerySkeletonLayout(){
    return <div className="col">
        <h2>Other photos</h2>
        <div className="photo-gallery">
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
            <Skeleton style={{ height: '220px', width: '220px', borderRadius: '24px' }} count={1} />
        </div>
    </div>;
}