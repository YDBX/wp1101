import express from 'express'
const router = express.Router()
import * as db from '../db.js'

router.get("/:shorturl", async (req,res)=>{
    const shorturl = req.params.shorturl
    let check_exist = await db.LinkModel.findOneAndUpdate({short: shorturl},
        {$inc: {num_of_view: 1}});
    if(check_exist.length !== 0) {
        db.LinkModel.find({short:shorturl} , (err,data)=>{
            res.redirect(data[0].origin)
            console.log(data[0].origin)      
        })
    }
    else{
        res.redirect('/')
    }
})

export default router