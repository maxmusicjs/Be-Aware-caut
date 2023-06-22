let headerMenuNavbar = document.querySelector(".header-menu-navbar");
let iconNavbar = document.querySelector("#menu-bars");


iconNavbar.onclick = () => {
    iconNavbar.classList.toggle('fa-times');
    headerMenuNavbar.classList.toggle('active');
}

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0 ){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll( ){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            //настройки момента старта анімації

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            //від висоти вікна браузера віднімаємо висоту обєкта який анімірується і буде поділений н кофіціент
            if( animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight -  window.innerHeight / animStart;
            }
            //існує премінна в яку поступає інфа про кількість проскролених піксілів pageYOffset
           if((scrollY > animItemOffset - animItemPoint ) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('_textanimation');
           }
           else{ 
            if(!animItem.classList.contains('_anim-no-hide')){//ця умова слугує тим що анімація не відбувається повторно при скролі в верх
                animItem.classList.remove('_textanimation');
            }
           
            
           }
        }

    } 
   
    

    
    function offset(el) {
        const rest = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElementscrollLeft,
        scrollTop = window.scrollY || document.documentElementscrollTop;
        return{top: rest.top + scrollTop, left: rest.left + scrollLeft }
    }
   
  
   

}