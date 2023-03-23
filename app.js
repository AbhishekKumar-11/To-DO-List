  const express = require("express");
 
const bodyParser = require("body-parser");
const date = require( __dirname + "/date.js");


  const app = express();
  const items  = ["buy the food ", " clean the food ", "eat the food "]; 
   const worksItems =[];
   console.log(date);
   
  app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

   app.get("/",function (req,res){ 
    let day = date.getDay     ();
     
  res.render("views/list", { listTitle :day,newItems: items});
      
   } );
   app.post("/",function(req,res){
    console.log(req.body.work);

    if(req.body.work ==  "work" ){
      let items = req.body.newItem;
      worksItems.push(items);
      res.redirect("/work");
    }
    else{let  item = req.body.newItem ;
      items.push(item);

      res.redirect("/");}
    
})
  
app.get("/work",function(req,res){
  res.render("views/list",{listTitle:"work List",newItems:worksItems  });
})

app.get("/about",function (req,res) { 
  res.render("views/about");
})



   app.listen(3000,function(){
  
    console.log("the host is working at the  server 3000");
}) 