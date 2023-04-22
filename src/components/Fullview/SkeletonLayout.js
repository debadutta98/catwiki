import Skeleton from 'react-loading-skeleton';
import Rating from '../UI/Rating';
export default function SkeletonLayout() {
    return <div className="col">
            <div className="breedImage">
                <Skeleton style={{ height:'250px', width: '250px', borderRadius:'24px' }} count={1}/>
            </div>
            <div className="breedDetails">
                <h2><Skeleton count={1} height={50} width={'30%'} /></h2>
                <p><Skeleton count={4} /> </p>
                <div className="text-container">
                    <b>Temperament:</b>
                    <Skeleton count={1} width={'50%'} />
                </div>
                <div className="text-container">
                    <b>Origin:</b>
                    <Skeleton count={1} width={'20%'} />
                </div>
                <div className="text-container">
                    <b>Life Span:</b>
                    <Skeleton count={1} width={'20%'} />
                </div>
                <div className="rate-container">
                    <b>Adaptability:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Affection level:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Child Friendly:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Grooming:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Intelligence:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Health issues:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Social needs:</b>
                    <Rating rate={0} />
                </div>
                <div className="rate-container">
                    <b>Stranger friendly:</b>
                    <Rating rate={0} />
                </div>
            </div>
        </div>
}