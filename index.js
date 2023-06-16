document.addEventListener('DOMContentLoaded', function(){

    let button1=document.querySelector("#Button1")
    let button2=document.querySelector("#Button2")
    let button3=document.querySelector("#Button3")
    let button4=document.querySelector("#Button4")
    let button5=document.querySelector("#Button5")

    function colorClear(){
        button1.style.backgroundColor='hsl(213, 19%, 18%)';
        button1.style.color='hsl(217, 12%, 63%)'
        button2.style.backgroundColor='hsl(213, 19%, 18%)';
        button2.style.color='hsl(217, 12%, 63%)'
        button3.style.backgroundColor='hsl(213, 19%, 18%)';
        button3.style.color='hsl(217, 12%, 63%)'
        button4.style.backgroundColor='hsl(213, 19%, 18%)';
        button4.style.color='hsl(217, 12%, 63%)'
        button5.style.backgroundColor='hsl(213, 19%, 18%)';
        button5.style.color='hsl(217, 12%, 63%)'
        }

    document.querySelector("#Button1").addEventListener('click', function(event1){
        colorClear();
        button1.style.backgroundColor='hsl(25, 97%, 53%)'
      button1.style.color='white'
    })
    document.querySelector("#Button2").addEventListener('click', function(event2){
        colorClear();
        button2.style.backgroundColor='hsl(25, 97%, 53%)'
      button2.style.color='white'
    })

      document.querySelector("#Button3").addEventListener('click', function(event3){
        colorClear();
        button3.style.backgroundColor='hsl(25, 97%, 53%)'
      button3.style.color='white'
    })

    document.querySelector("#Button4").addEventListener('click', function(event4){
        colorClear();
        button4.style.backgroundColor='hsl(25, 97%, 53%)'
      button4.style.color='white'
    })

    document.querySelector("#Button5").addEventListener('click', function(event5){
        colorClear();
        button5.style.backgroundColor='hsl(25, 97%, 53%)'
      button5.style.color='white'
    })
  });