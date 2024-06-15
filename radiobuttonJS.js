function oneanother()
{
let programmingoption=document.querySelector("input[name='program']:checked")

let Findselect=document.getElementById("txtsel")
 Findselect.value =programmingoption ? programmingoption.value + " Select" : "selected";
 
}