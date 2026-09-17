import express from "express";
const app = express();
app.use(express.json());
let users = [
    {id: 1, name: "Nirjara", email: "nirjara@example.com"},
    {id: 2, name: "jara", email: "jara@example.com"}
];

app.get('/', (_req, res) => {
    res.json({message: 'REST API is running', endpoints: ['/users']});
});

//Get : get request to fetch all users
app.get('/users', (_req, res) => {
    res.json(users);
});

//Post : post request to create a new user
app.post('/users', (req, res) => {
    const user={
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(user);
    res.json(user);
});



//PUT : put request to update a user
app.put("/users/:id", (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({message: 'User not found'});
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});


//Delete : delete request to delete a user
app.delete('/users/:id', (req, res) => {
    const userExists = users.some(u => u.id === parseInt(req.params.id));
    if (!userExists) {
        return res.status(404).json({message: 'User not found'});
    }
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({message: 'User deleted successfully'});
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});


// create a 10 PRODUCT REST API and test all methods in THUNDER CLIENT
// Work it on approx in 100 products and test all methods in THUNDER CLIENT
// structure
// create folder productrestapi
// create index.js file
// create product.json
// install npm init :package.json
// install express : npm install express 