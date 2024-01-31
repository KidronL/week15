import React from "react";

//Componenent for the table
export default function ShoeTable ({shoes, deleteShoes, updatedShoe, setUpdatedShoe, updateShoes}) {

    
    return (
        <div className="container">
            <table className="table table-striped table-hover table-bordered table-responsive rounded">
                <thead>
                    <tr>
                        <th>Shoe Name</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Inventory</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody> {/*Map through the shoes*/}
                    {shoes.map((shoe) => {
                        return (
                            <tr key={shoe.id}>
                                <td>{shoe.name}</td>
                                <td>{shoe.model}</td>
                                <td>{shoe.brand}</td>
                                <td>{shoe.inventory}</td>
                                <td>${shoe.price}</td>
                                <td className="container d-flex flex-row"> {/*Update and Delete buttons*/}
                                    <input className="form-control col" type="number" min="0" max="100" placeholder={shoe.inventory} onChange={(e) => setUpdatedShoe({...updatedShoe, inventory: e.target.value})}/>
                                    <button className="form-control btn btn-primary btn-sm col" onClick={(e) => updateShoes(shoe.id)}>✎</button>
                                </td>
                                <td><button className="btn btn-danger" onClick={() => deleteShoes(shoe.id)}>🔥</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}