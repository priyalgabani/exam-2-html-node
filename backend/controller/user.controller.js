const user = require("../model/user.schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async(req,res)=>{
    console.log(req.body);
    try {
        let {email, password}= req.body;
        let data = await user.findOne({ email: email});
        if(data){
            bcrypt.compare(password,data.password,async(err, result)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else if(result){
                    let token = jwt.sign({id:data.id}, "priyal");
                    res.send({msg:"Login is Successfull"})
                }
                else{
                    return res.send({Message:'password is wrong'})
                }
            })
        }
        else{
            return res.send({Message:'not found user'})
        }
    } 
    catch (error) {
         res.send(error.message);
    }
}

const signup=async(req,res)=>{
    try {
        let {name,email,password}= req.body;
        let data = await user.findOne({ email:email});
        if(data){
            return res.send({msg:'exitsting'});
        }
        else{
            bcrypt.hash(password,4,async(err,hash)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else{
                    let obj={name:name,email:email,password:hash}
                    let data = await user.create(obj);
                    let token = jwt.sign({id:data.id},"priyal");
                    res.json({token:token, info:data});
                }
            })
        }
    } 
    catch(error){
        return res.status({Message:error.message});
    }
}


module.exports = {login , signup};