

class Modal{

    constructor(button, close, modalBk, form){
        this.modalBkProps = modalBk
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

const bkModal = {
    div: ".modal-bk",
    start: "modal-bk-open",
    end: "modal-bk-close",
    miliSecond: 300
}

const sideNav = {
    div: ".side-navigation",
    start: "open-sideNav",
    end: "close-sideNav",
    miliSecond: 300
}

new Modal("menu",".close-btn",bkModal, sideNav)