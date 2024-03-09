// progress bar starts
// design progress bar starts
let designNumber = document.getElementById("number-1");
let designCounter = 0;
setInterval(() => {
    if(designCounter ==85){
        clearInterval;
    }else{
        designCounter +=1;
        designNumber.innerHTML=`${designCounter}%`
    }
}, 18);
// design progress bar ends
// html progress bar starts
let htmlNumber = document.getElementById("number-2");
let htmlCounter = 0;
setInterval(() => {
    if(htmlCounter ==90){
        clearInterval;
    }else{
        htmlCounter +=1;
        htmlNumber.innerHTML=`${htmlCounter}%`
    }
}, 18);
// html progress bar ends
// wordpress progress bar starts
let wordpressNumber = document.getElementById("number-3");
let wordpressCounter = 0;
setInterval(() => {
    if(wordpressCounter ==70){
        clearInterval;
    }else{
        wordpressCounter +=1;
        wordpressNumber.innerHTML=`${wordpressCounter}%`
    }
}, 20);
// wordpress progress bar ends
// progress bar ends


// navbar scroll effects starts
window.addEventListener("scroll",()=>{
    const header = document.querySelector(".header");
     header.classList.toggle("scrolled-header" ,window.scrollY > 0)
});
// navbar scroll effects ends

// navbar active scroll bar section starts
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");
window.onscroll = ()=>{
sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove("active-navbar");
            document.querySelector('header li a[href*=' + id + ']').classList.add('active-navbar');
        })
    }
})
};
// navbar active scroll bar section ends



