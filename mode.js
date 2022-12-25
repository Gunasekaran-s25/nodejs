let express = require('express')
let mongodb = require('mongodb')

let app = express()
let db = null
app.use(express.static('public'))

const MongoClient = mon godb.MongoClient;

let dbstring = 'mongodb+srv://appUser:12345678@cluster0.xizb5aw.mongodb.net/myApp?retryWrites=true&w=majority'
let dbName = 'myApp'
let port = process.env.PORT 

mongodb.connect(dbstring,{useNewUrlParser:true,},function(err,client){
   db = client.db()
   app.listen(4500)
})
app.use(express.json)
app.use(express.urlencoded({extended:false}))
app.get('/',function(req,res){
    res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Train</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-5 text-center py-2 ">Your Train your Choice</h1>
        <div class="jumbotron p-3 shadow-sm">
          <form action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Confirmed</button>
            </div>
          </form>
        </div>
        <ul class="list-group pb-5">
        ${items.map(function(item){
        return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">${item.text}</span>
            <div>
              <button data-id=${item._id}class="edit-me btn btn-secondary btn-sm mr-1">Book</button>
              <button data-id=${item._id}class="delete-me btn btn-danger btn-sm">View</button>
            </div>
          </li>
        }).join('')}
          </ul>
      </div>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="browser.js"></script>
    </body>
    </html>
    `)
   
})
app.post('/create-item',function(req,res){
    db.collection('item').insertone({text:req.body.item},function(){
        res.redirect('/')
    })
  
})
app.post('/update-item',function(req,res){
    db.collection('item').findoneAndupdate({_id:new mongodb.ObjectId(req.body.id)},{$set:{text:req.body.text}},function())
   res.send("data updated")
})
app.post('/delete-item',function(req,res){
  db.collection('itms').deleteOne({_id:new mongodb.ObjectId(req.body.id),function
  res.send("data deleted")
  })
})

