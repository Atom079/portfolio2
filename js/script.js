window.addEventListener("DOMContentLoaded", () =>{
    window.addEventListener("scroll", ()=>{
        const header = document.querySelector("header");    
        header.classList.toggle("sticky", window.scrollY > 0)    
    })
    const menBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menBtn.addEventListener("click", ()=>{
        menBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    })
    const navigationItems = document.querySelectorAll(".navigation a")
    navigationItems.forEach(item =>{
        item.addEventListener("click", ()=>{
            menBtn.classList.remove("active");
            navigation.classList.remove("active");
        })
    })
    const scrollBtn = document.querySelector(".scrollTop-btn");
    window.addEventListener("scroll", ()=>{
        scrollBtn.classList.toggle("active", scrollY > 500);
    })
    scrollBtn.addEventListener("click", () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    })
    
    
    window.addEventListener("scroll", ()=>{
        let reveals = document.querySelectorAll(".reveal")

        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(revealTop < windowHeight -revealPoint){
                reveals[i].classList.add("active");
            }
        }
        
    })
    
})