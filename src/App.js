import './index.css';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ListItem from './components/ListItem'
import AddForm from './components/AddForm'
import SearchItem from './components/SearchItem'
import {fetchUser} from './redux/items/itemsAction'
import { useDispatch } from "react-redux";
import {useEffect} from 'react'


function App() {  
  const dispatch = useDispatch()

    useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
    <Header title="My Grocery List"/>
    <SearchItem />
    <AddForm />
    <ListItem 
    />
    <Footer />
    </>
  );
}

export default App;
