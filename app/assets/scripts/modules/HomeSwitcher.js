
class HomeImageSwitcher {

    constructor() {

        this.home = document.querySelectorAll('.home__box')
        this.pagination = document.querySelectorAll('.home__pagination > div')
        this.counter = 0

        this.navHandler()
        this.showImage()

    }


    navHandler() {
        setInterval(() => {
            for (let x = 0; x < this.home.length; x++) {
                this.home[x].classList.remove('home__show')
                this.pagination[x].classList.remove('home__pagination-bg')
                
    
                for (let i = 0; i < this.home.length; i++) {
                    this.home[this.counter].classList.add('home__show')
                    this.pagination[this.counter].classList.add('home__pagination-bg')
                    
                }
                
            }
    if (this.counter === 3) {
        this.counter = 0
    } else {
    this.counter+=1
    }
            
        }, 
        4000);
       
   

   


}

  

}



export default HomeImageSwitcher;

