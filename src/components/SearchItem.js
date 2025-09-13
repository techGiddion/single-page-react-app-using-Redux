import {searchItem} from '../redux/items/itemsAction'
import { useSelector,useDispatch } from "react-redux";

const SearchItem = ()=>{
    const searchIte = useSelector(state => state.searchIte)
    const dispatch = useDispatch()
    return (
        <main className="search-item">
        <label>search your item</label>
        <input 
            type="text"
            placeholder="search your item"
            value={searchIte}
            onChange={(e)=>dispatch(searchItem(e.target.value))}
        />
        </main>
    )

}

export default SearchItem;