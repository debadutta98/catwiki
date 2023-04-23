import Skeleton from "react-loading-skeleton";
import style from './index.module.css';
export function ImageCard(props) {
    return <div className={style['img-container']}>
        <Skeleton count={1} />
        <img src={props.src} alt={props.alt} {...props} loading="lazy"/>
    </div>
}