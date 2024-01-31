import React from "react";

//component for the form
export default function ShoeForm({newShoe, setNewShoe, postShoes}) {
  
//Event handler for the form submit
  const handleSubmit = () => {
    postShoes()
  }

  return (
      <div className="container mb-5"> {/*Each input feeds it's value to the state*/}
        <form id="form" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name">Shoe Name</label>
            <input type="text" placeholder="Shoe Name" className="form-control" id="name" value={newShoe.name} onChange={(e) => setNewShoe({...newShoe, name: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="model">Model</label>
            <input type="text" placeholder="Model" className="form-control" id="model" value={newShoe.model} onChange={(e) => setNewShoe({...newShoe, model: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="brand">Brand</label>
            <input type="text" placeholder="Brand" className="form-control" id="brand" value={newShoe.brand} onChange={(e) => setNewShoe({...newShoe, brand: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="inventory">Inventory</label>
            <input type="number" min="0" max="100" placeholder="Inventory" className="form-control" id="inventory" value={newShoe.inventory} onChange={(e) => setNewShoe({...newShoe, inventory: e.target.value})}/>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="number" placeholder="Price" className="form-control" id="price" value={newShoe.price} onChange={(e) => setNewShoe({...newShoe, price: e.target.value})}/>
          </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  )

}