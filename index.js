const express = require("express");
const axios = require("axios")
const app = express();
app.get('/api/newsdata', async (req,res)=>{
    // 解决ajax跨域
    res.append('Access-Control-Allow-Origin', "*");
    res.append('Access-Control-Allow-content-type', "*")
    // 请求头条数据
    let result = await axios.get("https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=321100591747")
    let data = result.data;
    res.send(data);
    res.json({ name: "老马" })
})
app.listen(8080, ()=>{
    console.log("http://localhost:8080/api/newsdata");
})