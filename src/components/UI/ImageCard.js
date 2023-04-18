import style from './imagecard.module.css';
import Skeleton from 'react-loading-skeleton';
export default function ImageCard({src, alt, href}){
    return <a href={href}>
            {/* <img src={src} alt={alt} className={style.catImage} /> */}
        <Skeleton count={1} width={200} height={200} borderRadius={24}/>
        </a>;
}