


// Header background effect
(headerEffect =(headerClass) =>{
    let header =  document.querySelector(`${headerClass}`)
    window.onscroll = function(){
        "use strict";
    if (document.body.scrollTop >= 76 || document.documentElement.scrollTop >= 76) {
        header.classList.add("bk-light");
        header.classList.add("border-bottom");
        header.classList.remove("bk-transparent");
    } else {
        header.classList.add("bk-transparent");
        header.classList.remove("border-bottom");
        header.classList.remove("bk-light");
    }
    }
})(".av-header-v1");

//active link
(activeLink =(header, activeClass)=>{
    let headerDiv = document.querySelector(`${header}`)
    let navList = headerDiv.querySelector("nav").querySelector("ul").querySelectorAll("li")
    
    navList.forEach( link => {
        link.addEventListener('click',(e)=> addActiveClass(e))
    })

    const addActiveClass=(e)=>{
        navList.forEach(link => {
            link.classList.remove(activeClass)
        })
         e.target.classList.add(activeClass)
    }
})(".av-header-v1","av-active");



// Modal
class Modal{

    constructor(open, close, form){
        this.formProps = form
        this.button = document.querySelectorAll(`${open}`)
        this.close = document.querySelectorAll(`${close}`)
        this.modalBk = document.querySelector(`.modal-bk`)
        this.form = document.querySelector(`${this.formProps.div}`)
        this.registerButton()
    }

    registerButton =()=>{
        this.button.forEach(element => {
            element.addEventListener('click',()=>{
           this.openModal()
        })
        })
       
        this.modalBk.addEventListener('click',()=>{
            this.closeModal()
        })

        this.close.forEach(element => {
            element.addEventListener('click',()=>{
            this.closeModal()
        })
        })
    }

    openModal = () =>{
        this.modalBk.classList.add("modal-bk-open")
        this.form.classList.add(this.formProps.start)
    }

    closeModal = () =>{
        this.modalBk.classList.add("modal-bk-close")
        this.form.classList.add(this.formProps.end)
        setTimeout(()=>{
            this.modalBk.classList.remove("modal-bk-open")
            this.modalBk.classList.remove("modal-bk-close")
            this.form.classList.remove(this.formProps.start)
            this.form.classList.remove(this.formProps.end)
        },300)
        
    }
}

const sideNav = {
    div: ".side-navigation",
    start: "open-sideNav",
    end: "close-sideNav",
    miliSecond: 300
}

new Modal("menu", ".close-btn", sideNav)
new Modal("menu", ".navLink", sideNav)