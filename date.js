 //js hint esversion:6
   
module.exports.getDate  = function() {


    const today = new Date();
    
    const options = {
        weekday:"long",   
        day:"numeric",   
        month:"long"      
      };
      const date = today.toLocaleDateString("en-US",options);
    return date;
}

module.exports.getDay =function getDay () {


    let today = new Date();
     
    let options = {
        weekday:"long",   
        
      };
      let day = today.toLocaleDateString("en-US",options);
    return day;
} 

// console.log(module.exports);
