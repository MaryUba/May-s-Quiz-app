
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");

// if start button is clicked
    start_btn.onclick = ()=>{
        info_box.classList.add("activeInfo"); //show info box
    }


// if exit buttton is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continue buttton is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    info_box.classList.remove("activeInfo"); //hide info box
}