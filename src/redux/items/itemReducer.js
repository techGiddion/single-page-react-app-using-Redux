import {SHOW_ITEM,NEW_ITEM,SEARCH_ITEM,LOADING_ITEM,ERROR} from './itemsType'

const initialValue= {
    items: [],
    newIte: '',
    searchIte:'',
    loading:false,
    error:''
}
const itemReducer = (state=initialValue,action)=>{
    switch(action.type){
        case SHOW_ITEM:
            return {
                ...state,items:action.payload
            }
        case NEW_ITEM:
            return {
                ...state,newIte:action.payload
            }
        case SEARCH_ITEM:
            return {
                ...state,searchIte:action.payload
            }
        case LOADING_ITEM:
            return {
                ...state,loading:action.payload
            }
        case ERROR:
            return {
                ...state,error:action.payload
            }
        default:
            return state
    }

}

export default itemReducer;