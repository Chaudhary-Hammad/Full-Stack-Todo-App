import express, { Router } from "express";
import TodoList from "../schema/schemas.js";

const route = express.Router();
route.get("/get", async(req, res) => {
try {
    await TodoList.find({}).then((result)=>{
        res.status(200).json(result)
    })
} catch (error) {
    res.status(404).json(error.message);
}
})

//for post
route.post('/create' ,(req,res)=>{
    console.log(req.body)
    const{ name } =req.body;
console.log(req.body)
    const myData = new TodoList({
        name: name,
    });

    myData.save()
    .then((result)=>{
        res.status(201).json(result)
    }).catch((error)=>{
        res.status(500).json(error.massage)
    })
});
//for get
route.post('/update', async (req, res) => {
    try {
        const {_id,name} = req.body
        await TodoList.findByIdAndUpdate(_id, {name} )
        .then((result)=>{
            res.status(200).json(result)
        });

    } catch (error) {
        res.status(404).json(error.message);
    }
});


route.get('/del/:id' ,async (req,res)=>{
    try {
   const dummy = await TodoList.findByIdAndDelete(req.params.id)
      if (!dummy) {
        res.status(200).json("not found");
      }
       res.send(dummy);
    } catch (error) {
        res.status(404).json(error.massage)
    }
});

export default route;
