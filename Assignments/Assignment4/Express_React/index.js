import express from "express";
import cors from 'cors';
import fs from 'fs';
const app =express();

app.use(cors());
app.use(express.json());
//GET
app.get('/products',(req,res)=>{
    const data=fs.readFileSync("product.json","utf-8");
    const products=JSON.parse(data);
    res.json(products);
});
app.post('/products',(req,res)=>{
    const data=fs.readFileSync("product.json","utf-8");
    const products=JSON.parse(data);

    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price,
    }

    products.push(newProduct);
    fs.writeFileSync("product.json", JSON.stringify(products, null, 2));
    res.json(newProduct);
});

app.listen(4000,()=>{

})