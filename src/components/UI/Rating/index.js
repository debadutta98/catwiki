import './index.css';
export default function Rating({rate}) {
    const ratingProgress = [];
    for(let i = 0;i<5;i++) {
        if(i<=rate-1) {
            ratingProgress.push('#544439');
        } else {
            ratingProgress.push('#E0E0E0');
        }
    }
    return <div className="rate">
        {
            ratingProgress.map((bgCol,index)=>{
                return <div key={index} style={{backgroundColor: bgCol}}></div>
            })
        }
    </div>;
}