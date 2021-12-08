const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/user-accounts')
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功！');
})
mongoose.connection.once('close',()=>{
    console.log('数据库已断开！');
})
const Schema=mongoose.Schema;

const userData=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    headportrait:{
        type:Number
    }

})

module.exports=mongoose.model('UserDatas',userData);