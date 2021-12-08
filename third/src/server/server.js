/* eslint-disable no-unused-expressions */
const Koa = require('koa');
const shareData=require('./sharedata')
const cors=require('koa2-cors')
const bodyParser=require('koa-bodyparser')
const Router=require('koa-router')
const fetch=require('node-fetch')
const axios=require('axios')
const logger=require('koa-logger')
const Moment=require('moment')
const userData=require('./mongodb/userData')

const app = new Koa();
const router=new Router();

app.use(cors());   
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
router.post('/api/seek/data',async (ctx)=>{
       console.log(ctx.request.body);
       await axios.get(ctx.request.body.url)
       .then((res)=>{
           console.log(res);
           console.log(res.data);
           console.log(ctx.request.body);
           ctx.body=res.data;
       }).catch((err)=>{
         console.log(err);
       })
      await fetch(ctx.request.body.url,{method:'GET'})
      .then((res)=>{
        console.log('fetch!');
        console.log(res);
        console.log(res.data);
        
      })
})

router.post('/api/user/account',async (ctx)=>{
      console.log('卡纳克');
      let body=ctx.request.body;
      await userData.find({username:body.username,password:body.password})
      .then(async (docs)=>{
          if(docs.length === 0){
            ctx.body=JSON.stringify({status:'false'});
          }else{       
              let s={};
              await (()=>{        
                s=Object.assign({},docs[0]);
                s._doc.status='success';
              })();
              ctx.body=JSON.stringify(s._doc);
          }
      }).catch((err)=>{
        console.log(err);
      })
})



router.post('/api/user/forget',async(ctx)=>{
      let body=ctx.request.body;
      let random=()=>{
        let s=parseInt(Math.random()*10000);
        console.log(s);
        return s;
     }
     console.log(ctx.request);
      await userData.create({username: body.username,password:body.password,headportrait : random()}).then((res)=>{
           console.log(res);
           ctx.body=res;
      }).catch((err)=>{
             ctx.body=JSON.stringify('false');
      })
      //  let result=new  userData({
      //    username:ctx.request.body.username || 'hahaha',
      //    password:ctx.request.body.password || '123',
      //    headportrait:ctx.request.body.headportrait || 211
      //  })
      //  let code;
      //  try{
      //     await result.save();
      //     code='success';
      //  }catch(err){
      //      console.log(err);
      //      code='false';
      //  }
      // //  ctx.body=JSON.stringify(code);
      // ctx.body={
      //   data:code,
      //   stat:200,
      // }
})

app
   .use(ctx => {
         ctx.body = 'Hello Koa fate!';
    })
  .use(logger((str)=>{
    console.log(Moment().format('YYYY-MM-DD HH:MM:SS')+str);
  }))

app.listen(shareData.host,()=>{
    console.log('服务器开启成功！http://localhost:'+shareData.host);
});