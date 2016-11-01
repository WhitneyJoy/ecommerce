function fetchData(){
   $.ajax({
     url: "/products",
     method: "GET",
     success: function(data){
       console.log("getting data!");
       // might want to pretty print things here :)
       document.getElementById("main").innerHTML = "<p>" + data + "</p>";
     }
   });
 }

function sendData(x = {}){
  $.ajax({
    url: "/data",
    method: "POST",
    data: x,
    success: function(output){
      // might want to pretty print things here :)
      document.getElementById("main").innerHTML = "<p>" + output + "</p>";
    }
  });
}
