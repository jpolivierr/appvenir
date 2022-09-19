
class HeaderAnimation{
    constructor(header){
        this.header = document.querySelector(`${header}`)
        this.scrollEffect(this.header)
    }

    scrollEffect = (header) =>{
        window.onscroll = function(){
            "use strict";
        if (document.body.scrollTop >= 76 || document.documentElement.scrollTop >= 76) {
            header.classList.add("bk-light");
            header.classList.remove("bk-transparent");
        } else {
            header.classList.add("bk-transparent");
            header.classList.remove("bk-light");
        }
        }
    }

}

new HeaderAnimation(".av-header-v1")


class Modal{

    constructor(form){
        this.formProps = form
        this.button = document.querySelector(`menu`)
        this.close = document.querySelector(`.close-btn`)
        this.modalBk = document.querySelector(`.modal-bk`)
        this.form = document.querySelector(`${this.formProps.div}`)
        this.registerButton()
    }

    registerButton =()=>{
        this.button.addEventListener('click',(e)=>{
           this.openModal()
        })
        this.modalBk.addEventListener('click',()=>{
            this.closeModal()
        })
        this.close.addEventListener('click',()=>{
            this.closeModal()
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

new Modal(sideNav)