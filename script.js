
  function getsource(id){
    $.ajax({
      url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=c303a20285744f93b59a3e48d801c745",
      success: function(res){
        document.getElementById("sourceLink").innerHTML=res.sourceUrl
        document.getElementById("sourceLink").href=res.sourceUrl
      }
    });
  }
function getrecipe(q){
  $.ajax({
    url:"https://api.spoonacular.com/recipes/search?apiKey=c303a20285744f93b59a3e48d801c745&number=1&query="+q,
    success: function(res){
    document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br> ready in "+res.results[0].readyInMinutes+" minutes"
    getsource(res.results[0].id)
    }
  })
}


