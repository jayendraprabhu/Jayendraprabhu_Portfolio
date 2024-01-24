$(document).ready(function(){
    $('#b1').mouseenter(function(){
        $(this).fadeToggle(3000)
    });
    $('#b1').mouseleave(function(){
        $(this).fadeToggle(3000)
    });
    $('#b2').mouseenter(function(){
        $(this).fadeToggle(3000)
    });
    $('#b2').mouseleave(function(){
        $(this).fadeToggle(3000)
    });
    $('#b3').mouseenter(function(){
        $(this).fadeToggle(3000)
    });
    $('#b3').mouseleave(function(){
        $(this).fadeToggle(3000)
    });
    $('#b4').mouseenter(function(){
        $(this).fadeToggle(3000)
    });
    $('#b4').mouseleave(function(){
        $(this).fadeToggle(3000)
    });
    $('#b5').mouseenter(function(){
        $(this).fadeToggle(3000)
    });
    $('#b5').mouseleave(function(){
        $(this).fadeToggle(3000)
    });
    

});

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
btn.onclick=function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        btnIcon.src="images/sun.png";
        btnText.innerHTML="Dark";
      }else{
        btnIcon.src="images/moon.png";
        btnText.innerHTML="Light";

      }
    }