const timerEle=document.getElementById("timerDiv");
 let secs=10;


function updateCount() {
    const sec= secs <= 9 ? "0" + secs : secs ;

    timerEle.innerHTML=`<p>${sec}<br/>CountDown Start</p>`

   if(secs<1)
   {
      timerEle.innerHTML=`<h1>HAPPY<br/>DEVELOPER<br/>DAY !!</h1>`
      timerEle .classList.add("timerEle")  
   }
   else
   {
      setTimeout(updateCount,1000)
      secs--;
   } 
      
}
updateCount()







