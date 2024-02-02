
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box")

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
    quiz_box.classList.add("activeQuiz"); //Show quiz box
    showQuestions(0);
}

let que_count = 0;

// getting questions 
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span></span></div>'
                     + '<div class="option"><span></span></div>'
                     + '<div class="option"><span></span></div>'
                     + '<div class="option"><span></span></div>'; 
    que_text.innerHTML = que_tag;
}