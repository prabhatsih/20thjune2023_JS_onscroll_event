//1. Function Definition
function prabhat(){
    //function Body
    //console.log(document.body); 
    //if(window.pageYOffset > 200){ //we can also use scrollY at the place of pageYOffset.
    if(window.scrollY > 200){ //we can also use scrollY at the place of pageYOffset.
        document.querySelector('.p_up').style.display = "block";
    }
    else{
        document.querySelector('.p_up').style.display = "none";
    }
}