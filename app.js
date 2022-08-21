import express from 'express';
import cookieParser from 'cookie-parser';
import web from './routes/web.js' 
const app=express();
app.use(cookieParser());
app.use('/',web)
const PORT = 8001;

app.listen(PORT,()=>{console.log('port listner at 8001') })