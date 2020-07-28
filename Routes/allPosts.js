const express=require('express');
const router=express.Router()

router.get('/',(req,res,next)=>{
     res.send("all get post will be displayed here");
});

router.post('/',(req, res,next)=>{
      res.send('all added post will be updated here');
});
router.put('/',(req,res,next)=>{
    res.send('all put post will be seen here');
})
router.delete('/',(req,res,next)=>{
    res.send('you can delete your post here');
})

module.exports=router;