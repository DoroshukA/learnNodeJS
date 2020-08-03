// const express = require("express");
 
// const app = express();
 
// app.set("view engine", "hbs");
 
// app.use("/contact", function(request, response){
     
//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// });
// app.use("/", function(request, response){
     
//     response.send("Главная страница");
// });
// app.listen(3000);

//=======================================================================
//Рассмотрим более сложный случай, пусть в представление передается массив:

const express = require("express");
 
const app = express();
app.set("view engine", "hbs");

// app.set("views", "templates");
 
app.use("/contact", function(request, response){
     
    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
 
app.use("/", function(request, response){
     
    response.send("Главная страница");
});
app.listen(3000);