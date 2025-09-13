import {SHOW_ITEM,NEW_ITEM,SEARCH_ITEM,LOADING_ITEM,ERROR} from './itemsType'
import {dbURL} from '../../Data/data'

export const showItem = (data)=>{
    return {
        type: SHOW_ITEM,
        payload: data
    }
}
export const newItem = (data)=>{
    return {
        type: NEW_ITEM,
        payload: data
    }
}
export const searchItem = (data)=>{
    return {
        type: SEARCH_ITEM,
        payload: data
    }
}
export const loadingItem = (data)=>{
    return {
        type: LOADING_ITEM,
        payload: data
    }
}
export const error = (error)=>{
    return {
        type: ERROR,
        payload: error
    }
}

export const  fetchUser = ()=>{
    return async(dispatch)=>{
         try{
      dispatch(loadingItem(true))  
      dispatch(error(''))
      const response = await fetch(dbURL)
      const data = await response.json()
      dispatch(showItem(data))
    }
    catch(err){
      dispatch(error(err.message))
    }finally{
      setTimeout(()=> dispatch(loadingItem(false)),2000)
    }

    }
}

export const handleAddItem = ()=>{
    return async (dispatch,getState)=>{
    const items = getState().items; 
    const newIte = getState().newIte; 
    if(!newIte) return;
    // get current items from redux
    const newId = String(items.length ? Number(items[items.length - 1].id) + 1 : 1);
    const newItemList = {id:newId,checked: false,name: newIte }
    dispatch(showItem([...items,newItemList]))
    dispatch(newItem(''))

   const postoptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newItemList)
        }
    await fetch(dbURL, postoptions) 
  }

}

export const handleCheck = (id)=>{
    return async(dispatch,getState) => {  
        const items = getState().items;     
        dispatch(showItem(items.map(item =>
            item.id === id ? {...item, checked: !item.checked} : item
        )));
    const findItem = items.find(item=>item.id === id)
    const patchoptions = {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({checked:!findItem.checked})
            }
    const new_URL = `${dbURL}/${String(findItem.id)}`
    await fetch(new_URL,patchoptions)
        }}

export   const handleDeleteItem = (id)=>{
    return async(dispatch,getState)=>{
    const items = getState().items;   
    const newList = items.filter(item=>item.id!==id)
    dispatch(showItem(newList))
    const deleteoptions = {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
        }
    const findItem = items.find(item=>item.id === id)
    const new_URL = `${dbURL}/${String(findItem.id)}`
    await fetch(new_URL,deleteoptions)
    }}   