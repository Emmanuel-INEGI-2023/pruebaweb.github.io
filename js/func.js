$(document).ready(e=>{

alert("mensaje de prueba")
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=bfa177731ce9400d8320e530440591cb", function(data) {
                  console.log(data.timezone);
              })

  $.getJSON("https://screenshot.abstractapi.com/v1/?api_key=2a9f856ee13d44829f49f98bf41377f6&url=https://news.ycombinator.com", function(data) {
      console.log(data);
  })

})



$("#hoy").click(x=>{ 
  let $msg = (t,m)=>{ let $ms = $("<div>").attr({"id":"mensaje"}).css({"text-align":"center","font-family":"Century Gothic","position":"absolute","width":"200px","left":"45%","top":"48%","background":"crimson","padding":"18px","border":"2px solid gray","border-radius":"6px"});
                          $ms.append($("<div>").css({"color":"black","width":"100%"}).html(m)).append($("<div>").css({"color":"red","width":"100%"}).html(t));
                         return $ms;
                    }
  $("body").append($msg("Hoy es",new Date()))
})
