const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app = express()

app.use(cors({
  origin:'http://localhost:3000',
  methods:['PUT','GET','POST','DELETE']
}));

app.use(express.json())

const FoodModel=require("./models/Food")

mongoose.connect("mongodb+srv://admin:admin@cluster0.1g2uc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food")
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

//insert 
app.post("/insert",async(req,res)=>{
    const {foodName,description}=req.body;
    const food=new FoodModel({foodName,description})
    try
    {
        await food.save()
        res.send("Data Inserted..")
    }
    catch(err)
    {
        res.send("Error Occured")
    }
})

//Read the data
app.get("/read",async(req,res)=>{
    try{
        const food=await FoodModel.find();
        res.send(food);
    }
    catch(err)
    {
         res.send("Error Occured")
    }
})

//update data

app.put("/update",async(req,res)=>{
    const {newFoodName,id}=req.body;
    try
    {
        const updateFood=await FoodModel.findById(id);
        if(!updateFood)
        {
              return res.status(404).send("Data not updated")
        }
        updateFood.foodName=newFoodName;
        await updateFood.save()
        res.send("Data Updated SuccessFully");
    }

    catch(err)
    {
          console.log(err)
    }
})
//Deleting the data

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params; // Using object destructuring for better readability
  
    try {
      // Attempt to find and remove the food item by its ID
      const result = await FoodModel.findByIdAndDelete(id);
  
      if (!result) {
        // Respond with a 404 status if the item is not found
        return res.status(404).json({ message: "Food item not found" });
      }
  
      // Respond with a success message if deletion is successful
      res.status(200).json({ message: "Food item deleted successfully" });
    } catch (err) {
      console.error("Error during deletion:", err); // Log the error for debugging
  
      // Respond with a 500 status for server errors
      res.status(500).json({ message: "Error deleting food item" });
    }
  });
    
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})