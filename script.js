var currentGrowth = 0;

setInterval(function(){
  if(currentGrowth<100){
    currentGrowth++;
      document.querySelector("#process").style.width = currentGrowth +"%"
    document.querySelector("#file h5").textContent = currentGrowth +"%"
 
  }
},100);