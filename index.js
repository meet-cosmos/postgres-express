const express = require("express")
const app = express()
const PORT = 8083
const pool = require("./db")

app.get('/test', async (req,res)=>{
    const data = await pool.query("SELECT * FROM WORKER")
    console.log(data.rows)
    res.json({
        status:200,
        data:data.rows
    })
})

app.get('/test1', async (req, res)=>{
     const data = await pool.query("SELECT * FROM bonus")
     console.log(data.rows)
     res.json({
        status:200,
        data:data.rows
     })
})

app.get('/test2', async (req, res)=>{
    const data = await pool.query("SELECT * FROM bonus RIGHT JOIN WORKER ON bonus.worker_ref_id = WORKER.worker_id")
    res.json({
        status:200,
        data:data.rows
    })
})

app.listen(PORT, ()=>console.log(`app listening at ${PORT}`))