import express from "express";

const app = express();
const port = 3000;
const users = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {name: null});
})

app.post("/logIn", (req, res) => {
    const {"log-in-email": email, "log-in-password": password} = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.render("home.ejs", {name: user.name});
    }
    else{
        res.status(401).send("User not found!");
    }
})

app.post("/signUp", (req, res) => {
    const {"sign-up-email": email, "sign-up-name": name, "sign-up-password": password} = req.body;

    const newUser = {email, name, password};
    const user = users.find(u => u.email === email);

    if(user){
        res.send("User already exists!");
    }
    else{
        users.push(newUser);
        res.render("home.ejs", {name: newUser.name});
    }
})

app.listen(port, ()=>{
    console.log("Server started on port " + port);
})