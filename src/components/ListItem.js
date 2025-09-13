
import { useSelector,useDispatch } from "react-redux";
import {handleCheck,handleDeleteItem} from '../redux/items/itemsAction'


const ListItem = () => {
    const items = useSelector(state => state.items)
    const searchIte = useSelector(state => state.searchIte)
    const loading  = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const finalItems=items.filter(item=>item.name.toLowerCase().includes(searchIte.toLowerCase()))
    const dispatch = useDispatch()



    return (
        <main>
            {loading && <p>Loading...</p>}
            {error && !loading && <p style={{"color":"red"}}>{error}</p>}
            {!loading && !error && <ul>
                {
                    finalItems.map((item) => (
                        <li className="item" key={item.id}>
                            <input 
                                type = "checkbox"
                                id = "checkbox"
                                checked={item.checked}
                                onChange = {()=>dispatch(handleCheck(item.id))}
                            />
                            <label style={(item.checked) ? {textDecoration:"Line-Through"} : null}>{item.name}</label>
                            <button onClick={()=>dispatch(handleDeleteItem(item.id))}>Delete Button</button>
                        </li>


                    ))
                }
            </ul>}

        </main>
    )

}

export default ListItem;