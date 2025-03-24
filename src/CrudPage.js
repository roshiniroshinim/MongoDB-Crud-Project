import React,{useEffect,useState} from 'react'
import Axios  from 'axios'


function CrudPage()
{

    const [foodName,setFoodName]=useState("")
    const [description,setDescription]=useState("")
    const [foodList,setFoodList]=useState([]);
    const [newFoodName,setNewFoodName]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    //AddFoodData

    const addFoodData=()=>{
        Axios.post("http://localhost:3001/insert",{foodName,description})
        .then((response)=>{
            console.log(response);
            alert("Data Added");
            })
            .catch((err)=>{
                console.log(err);
                })
            }
  //get the data
  const fetchData=()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
        console.log(response.data);
        setFoodList(response.data);
    })
  }
  //update
  const updateFood=(id)=>{
    Axios.put('http://localhost:3001/update',{id,newFoodName})
    .then(()=>fetchData())
  }

  //delete
  const deleteFood=(id)=>{
    alert("Delete")
    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>fetchData())
  }
    return(
        <div className='container'>
            <h2>CRUD PAGE</h2>
            <div className='mb-3'>
               <input type='text' className='form-control' placeholder='FoodName'required
               onChange={(e)=>setFoodName(e.target.value)}
               />
            </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='FoodDescription'required
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={addFoodData}>AddFood</button>
            </div>
            <table className='table table-bordered table-striped'>
               <thead className='table-dark'>
               <tr>
                <th>FoodName</th>
                <th>FoodDescription</th>
                <th>Edit</th>
                <th>Delete</th>
               </tr>
               </thead>
               <tbody>
                {foodList.map((val,key)=>(
                   <tr key={key}>
                     <td>{val.foodName}</td>
                     <td>{val.description}</td>
                     <td>
                        <input type="text" placeholder='updateFoodName' onChange={(e)=>setNewFoodName(e.target.value)}/>
                        <button onClick={()=>updateFood(val._id)}>Edit</button>
                     </td>
                     <td><button onClick={()=>deleteFood(val._id)}>Delete</button></td>
                   </tr>
                ))}
              
               </tbody>
            </table>
        </div>
        
    )
}

export default CrudPage;