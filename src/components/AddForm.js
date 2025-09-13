import {newItem} from '../redux/items/itemsAction'
import { useSelector,useDispatch } from "react-redux";
import {handleAddItem} from '../redux/items/itemsAction'

const AddForm = ()=>{

    const newIte = useSelector(state => state.newIte)
    const dispatch = useDispatch()

    return (
        <form className="add-form" onSubmit={(e)=>e.preventDefault()}>
            <label>add your items</label>
            <input 
                type="text"
                placeholder="Enter your text here"
                value={newIte}
                onChange={(e)=>dispatch(newItem(e.target.value))}
            />
            <button onClick={()=>dispatch(handleAddItem())}>Add Items</button>
        </form> 
    )

}

export default AddForm;