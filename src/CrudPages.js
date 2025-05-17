import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CrudPages() {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [newFoodName, setNewFoodName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  // Add Food Data
  const addFoodData = () => {
    if (foodName && description) {
      Axios.post('http://localhost:3001/insert', { foodName, description })
        .then((response) => {
          console.log(response);
          alert('Data Added');
          setFoodName('');
          setDescription('');
          fetchData();
        })
        .catch((err) => console.log(err));
    } else {
      alert('Please fill out all fields');
    }
  };

  // Fetch data
  const fetchData = () => {
    Axios.get('http://localhost:3001/read')
      .then((response) => {
        setFoodList(response.data);
      })
      .catch((err) => console.log(err));
  };

  // Update food name
  const updateFood = (id) => {
    if (newFoodName) {
      Axios.put('http://localhost:3001/update', { id, newFoodName })
        .then(() => {
          setNewFoodName('');
          fetchData();
        })
        .catch((err) => console.log(err));
    } else {
      alert('Please enter a new food name');
    }
  };

  // Delete food
  const deleteFood = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      Axios.delete('http://localhost:3001/delete/${id}')
        .then(() => fetchData())
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">CRUD Page</h2>

      {/* Add Food Form */}
      <div className="row mb-4">
        <div className="col-md-5 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Food Name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
        <div className="col-md-5 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Food Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2 d-grid">
          <button className="btn btn-success" onClick={addFoodData}>
            Add Food
          </button>
        </div>
      </div>

      {/* Data Table */}
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Food Name</th>
            <th>Description</th>
            <th>Update Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {foodList.map((val, key) => (
            <tr key={key}>
              <td>{val.foodName}</td>
              <td>{val.description}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="New Food Name"
                    onChange={(e) => setNewFoodName(e.target.value)}
                    style={{ maxWidth: "150px" }}
                  />
                  <button className="btn btn-warning" onClick={() => updateFood(val._id)}>
                    Edit
                  </button>
                </div>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteFood(val._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default CrudPages;
