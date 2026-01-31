
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
    // res.sendFile(__dirname + '/index.html');
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
app.get('/user/:name/:age', (req, res, next) => {
    let { name, age } = req.params;
    // convert age from string to number for strict comparison
    let user = staff.find(s => s.name === name && s.age === Number(age));
    if (user) {
        res.json({ con: true, msg: "Found User", result: user });
    } else {
        next(new Error("No User with that name and age!"));
    }
    // res.json({ con:true,msg:"Found The User Name",result:staff})
})

app.patch('/user/:name/:salary', (req, res, next) => {
    let { name, salary } = req.params;

    let userSalary = staff.find(w => w.name === name);
    if (userSalary) {
        userSalary.salary = Number(salary);
        res.json({ cons: true, msg: "Salary Updated", result: userSalary });
    } else {
        next(new Error("No User with that name!"))
    }
})

app.delete('/user/:name', (req, res, next) => {
    let { name } = req.params;
    let foundUser = staff.find(w => w.name === name);

    if (foundUser) {
        let foundUser = staff.filter(w => w.name != name);
        res.json({ cons: true, msg: "User Deleted", result: foundUser });
    } else next(new Error("No User with that name!"))
})








// app.listen(3000, () => console.log("Server is running"));
app.listen(3000, () => {
    console.clear();
    console.log("Server is running");
})
