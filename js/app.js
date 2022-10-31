let button = document.querySelector(".burger-menu");
let items = document.querySelector(".burger__items");

    let menuHandler  = function(){
        if(items.classList.contains("showMenu")){
            items.classList.remove("showMenu");
        } else{
            items.classList.add("showMenu");
        }
    }

    button.addEventListener("click", menuHandler);