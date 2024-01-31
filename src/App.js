import 'bootstrap/dist/css/bootstrap.min.css';
import ShoeForm from './components/ShoeForm';
import ShoeTable from './components/ShoeTable';
import { useState, useEffect } from 'react';

export default function App() {

const SHOES_URL = 'https://658125763dfdd1b11c427f36.mockapi.io/Shoes';

//Declaring state for the different operations needed

const [shoes, setShoes] = useState([
  {
    name:'',
    model:'',
    brand:'',
    inventory:0,
    price:0,
    id:''
  }
]);

const [newShoe, setNewShoe] = useState({
  name:'',
  model:'',
  brand:'',
  inventory:0,
  price:0
});

const [updatedShoe, setUpdatedShoe] = useState({
  inventory:0,
});

useEffect(() => {
  fetch(SHOES_URL)
    .then((data) => data.json())
    .then((data) => setShoes(data))
}, []); 

//Declaring the functions for the different operations
const getShoes = () => {
  fetch(SHOES_URL)
    .then((data) => data.json())
    .then((data) => setShoes(data))
  };


const postShoes = () => {
  
  console.log('Posting new shoes...');

  fetch(SHOES_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newShoe)
  }).then(() => {
    getShoes()
  })
};

const deleteShoes = (id) => {

  console.log('Deleting shoes...');

  fetch(`${SHOES_URL}/${id}`,{
    method: 'DELETE',
  }).then(() => {
    getShoes()
  })  
};

const updateShoes = (id) => {

  console.log('Updating shoe inventory...');

  fetch(`${SHOES_URL}/${id}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedShoe)
  }).then(() => {
    getShoes()
  })
};

//Rendering the components
  return (
    <div className="App">
      <h1 id="title">Inventory</h1>
        <ShoeForm newShoe={newShoe} setNewShoe={setNewShoe} postShoes={postShoes}/>
        <ShoeTable shoes={shoes} deleteShoes={deleteShoes} updateShoes={updateShoes} updatedShoe={updatedShoe} setUpdatedShoe={setUpdatedShoe}/>
    </div>
  );

}