const button = document.querySelector(".btn")
const sub = document.querySelector(".btn1")

button.addEventListener("click",()=>{
    button.classList.add(".btn")
})

sub.addEventListener("click",()=>{
    sub.classList.remove(".btn1")
})
