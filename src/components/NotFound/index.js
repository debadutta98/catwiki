import style from './index.module.css';
export default function NotFound(props) {
    return <div className={style["failed-info"]}>
        <figure>
            <img src='/images/cat404.svg' alt="not found"/>
            <figcaption>{props.message || 'Page Not Found'}</figcaption>
        </figure>
    </div>
}