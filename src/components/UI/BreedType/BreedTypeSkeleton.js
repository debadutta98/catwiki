import Skeleton from 'react-loading-skeleton';
import './index.css';
const Template = () => {
    return <li className="breedtype">
        <div className="img-container" style={{width:'auto'}}>
            <Skeleton style={{ height: '200px', width: '200px', borderRadius: '24px' }} count={1} />
        </div>
        <div className="breed_details" style={{width:'66%'}}>
            <h3><Skeleton count={1} height={45} width={120} /></h3>
            <p><Skeleton count={4} /></p>
        </div>
    </li>;
}
export default function BreedTypeSkeleton() {
    return <>
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
    </>
}