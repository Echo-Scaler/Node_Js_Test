const express = require('express')
const app = express()
app.use(express.json());


let staff = [
    {
        name: "mgmg",
        age: 20,
        salary: 2000,
        isSingle: true
    },
    {
        name: "koko",
        age: 23,
        salary: 2700,
        isSingle: true
    },
    {
        name: "moemoe",
        age: 23,
        salary: 2300,
        isSingle: false
    },
    {
        name: "ayeaye",
        age: 23,
        salary: 2500,
        isSingle: true
    }

]

app.get('/', (req, res) => {
    res.send("Welcom To Node JS")
})

app.get('/users', (req, res) => {
    res.json({
        con: true,
        msg: "All Staff",
        result: staff
    })
})

app.post('/user', (req, res) => {
    let newUser = req.body;
    staff.push(newUser);
    res.json({
        con: true,
        msg: "New Staff Added",
        result: staff
    })
})

app.get('/user/:name',(req,res,next)=> {
    let queryName = req.params.name;
    let user = staff.find(s=>s.name === queryName);
    if(user){
        res.json({con:true,msg:"Found User",result:user})
    }else{
        next(new Error("No User with that name!") )
    }
    // res.json({ con:true,msg:"Found The User Name",result:staff})
})







app.listen(3000, () => {
    console.clear();
    console.log("Server is running")
})