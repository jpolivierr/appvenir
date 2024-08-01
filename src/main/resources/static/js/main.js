// Header background effect
document.addEventListener("DOMContentLoaded", () => {
    const headerEffect = (headerClass) => {
        const header = document.querySelector(headerClass);

        if (!header) {
            console.error(`No element found with class ${headerClass}`);
            return;
        }

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPosition >= 16) {
                header.classList.add("bk-white", "border-bottom-v");
            } else {
                header.classList.remove("bk-white", "border-bottom-v");
            }
        });
    };

    headerEffect(".av-header-v1");
});



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

class FormValidation{

    constructor(form){
        this.form = document.querySelector(form)
        this.formBtn = this.form.querySelector('button')
        this.fields = this.form.querySelectorAll('fieldset')
        this.error = []
        this.jsonFormData = {}
    }

    validateInput(){
        this.fields.forEach((field)=>{

            !field.querySelector('.error-msg') ? null : field.querySelector('.error-msg').remove()

            let label = !field.querySelector('label') ? null : field.querySelector('label').outerText 

            let type = !field.querySelector('[type]') ? null : field.querySelector('[type]').type

            let name = !field.querySelector('[name]') ? null : field.querySelector('[name]').name

            let inputValue = !field.querySelector('input') ? null : field.querySelector('input').value

            let textArea = !field.querySelector('textarea') ? null : field.querySelector('textarea').value

            this.addToFormData(name,inputValue, textArea)
            
            if(name !== "phone"){
         
                this.empty(field, label, inputValue, textArea)
                this.validateEmail(field, type, inputValue )
            }
        
         }) 
          return this.error
    }

    addToFormData(name,inputValue,textArea){
        if(textArea !== null){
            this.jsonFormData["message"] = textArea
        }
        if(!name && !inputValue){
            return
        }else{
            this.jsonFormData[name] = inputValue
        }
    }

    empty(field,label,inputValue, textArea){
        if(inputValue !== null){
            if(!inputValue.trim()){
            field.innerHTML += `<span class="error-msg">${label} is required</span>`
            this.error.push(true)
          }
        }
    }

    validateEmail(field, type, inputValue){
        if(type === "email"){
            if(inputValue !== null && inputValue.trim() !== ""){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue.trim())){
                field.innerHTML += `<span class="error-msg">Not a valid email</span>`
                this.error.push(true)
          }
         }
        }
    }

    clearField(){

        this.fields.forEach((field)=>{
        !field.querySelector('input') ? null : field.querySelector('input').value = ""

        !field.querySelector('textarea') ? null : field.querySelector('textarea').value = ""

        })

    }

    addErrorFromServer(data){
        this.fields.forEach((field)=>{
            let name = !field.querySelector('[name]') ? null : field.querySelector('[name]').name
            let textArea = !field.querySelector('textarea') ? null : field.querySelector('textarea').value
            if(name !== null){
                if (data.hasOwnProperty(name)){
                    field.innerHTML += `<span class="error-msg">${data[name]}</span>`
                }
            }
            if(textArea !== null){
                if (data.hasOwnProperty("message")){
                    field.innerHTML += `<span class="error-msg">${data["message"]}</span>`
                }
            }
            
        })
    }

    async send(){
            try{
                const formData = new FormData()
                formData.append("full_name", this.jsonFormData.full_name)
                formData.append("email", this.jsonFormData.email)
                formData.append("message", document.querySelector('.iText').value)
                formData.append("phone", document.querySelector('.iPhone').value)

                const url = "https://www.appvenir.com/mail"
                const config = {
                           method: "POST",
                           body: formData
                }

                const btn = document.querySelector(".mai-btn")
                btn.innerHTML = `Sending...`

                console.log(btn)
                console.log(formData)
                const resp = await fetch(url,config)
                if(resp.status === 400){
                    const data = await resp.json()
                    this.addErrorFromServer(data)
                }else if(resp.status === 200){
                    this.clearField()
                    const data = await resp.text()
                    console.log(data)
                    document.querySelector(".success-message").innerHTML = "Thank you. Your message was sent."
                   btn.innerHTML = "Submit"
                }

            }catch(error){
                console.log(error)
            }
    }

    submit(e){
        e.preventDefault()

        this.error = []
        this.validateInput()
        if(this.error.length === 0){
            
            this.send()
            console.log("submitted..")
        }
        
    }

    init(){
        this.formBtn.addEventListener('click',(e)=>{
            this.submit(e)
        })
    }

}

const formValidation = new FormValidation("#contactForm")
formValidation.init()