import style from './searchbox.module.css';
export default function SearchBox(props) {
    return <form className={style['searchbox-container']}>
        <div className={style.searchbox}>
            <input type="text" placeholder="Enter your breed" className={style.searchinput}/>
            <span className={`material-icons ${style.searchicon}`} >
                search
            </span>
        </div>
        <div className={style['suggestions-container']}>
        <ul className={style.suggestions}>
            <li>American Bobtail</li>
            <li>American Bobtail</li>
            <li>American Bobtail</li>
        </ul>
        </div>
    </form>
}