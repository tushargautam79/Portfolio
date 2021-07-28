var front=document.querySelector("#slider");
var front1=["a Developer","an Engineer","an IITian","Tushar Gautam"];
var coloy=["white","blue","green","orange"];
var i=0;
var col;
var p=setInterval(function()
{
  front.innerText=front1[i];
  front.style.color=coloy[i];
  if(i=='3')
  {
    i=-1;
  }
  i++;
},2000);
