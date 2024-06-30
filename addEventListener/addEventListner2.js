let text = document.getElementById("txt");
let button=document.getElementById("button")
text.addEventListener('keydown', filterNumber);
button.addEventListener('click',usethat)
function filterNumber(event)
{
    
    if((event.key<'0' || event.key>'9') &&(event.key<'A' || event.key>'Z') )
        
        {
            event.preventDefault();

            text.value=""

        }



}





