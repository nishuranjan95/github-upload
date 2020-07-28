const http=require('http');
const path=require('path');
const hostname='localhost';
const port='3000';
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const postRouter=require('./Routes/allPosts');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/allposts', postRouter);

const server=http.createServer(app);
server.listen(port,hostname, ()=>{
    console.log("server started on port 3000:");
});