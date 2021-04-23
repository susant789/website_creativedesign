let button = document.querySelectorAll(".my-story")
button.forEach(e =>{
    e.addEventListener("click",()=>{
        e.classList.toggle("change")
        e.nextElementSibling.classList.toggle("change")
    })
})