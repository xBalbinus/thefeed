import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect} from "react";
require('dotenv').config()

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get('');
      console.log(response.data.data);
      setItems(response.data.data.items)
         } catch (err) {
      // Handle Error Here
      console.error(err);
     }
  }

  return (
    <div className="App">
      {console.log(items)}
      Welcome 
      <ul>
        {items.map(item => (
          <li key={item.chain_id}>
            {item.name}
          </li>
        ))}
      </ul>
      </div>
  );
}

export default App;
