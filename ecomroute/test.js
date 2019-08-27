const express=require("express")
const router=express.Router()

let id1={userId: 1, id: 2,name:"tripa"}
let id2=[{userId: 1, id: 2,name:"tripa"}]

router.post('/testapi',function (req,res){
    res.send(id1)
    console.log("hello testapi-----------------")
     
})

router.post('/form',function(req,res)
{
    respon=[req.body]
    console.log(respon)
res.send(respon);
});

module.exports=router

