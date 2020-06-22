
class ModalSwitcher {

    constructor() {

        this.subscribe = document.querySelector('.btn-subscribe')
        this.modalBox = document.querySelector('.modal')
       

        this.modalHandler()
        this.modalClose()

    }


    modalHandler() {
      this.subscribe.addEventListener('click',  (e) =>{
          e.preventDefault()
          console.log('yex')
          
          
         
          this.modalBox.classList.remove('modal-hide')
         
          this.modalBox.classList.add('modal-show')
          
      })
       


}
modalClose(){
    this.modalBox.addEventListener('click', (e)=> {
        if(e.target.classList.contains('modal')) {
            this.modalBox.classList.add('modal-hide')
            setTimeout(() => {
                this.modalBox.classList.remove('modal-show')

            }, 2000)
        }
    })
}



  

}



export default ModalSwitcher;

