import styles from './Item.module.css';
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function Item({name,date,eventDelete}) {
    return <div className='container'>
        <div className={`${styles['row']} row`}>
            <div className="col-6">{name}</div>
            <div className="col-4">{date}</div>
            <div className="col-2">
                <button className='btn btn-danger' type="button" onClick={()=>eventDelete(name)}><MdOutlineRemoveCircleOutline /></button>
            </div>
        </div>
    </div>
}
export default Item;