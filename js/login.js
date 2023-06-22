let startLogin = document.querySelector(".header-menu-auth__link");
let modalLogin = document.querySelector(".login");
let ioginIcon = document.querySelector(".iogin-icon");
let loginFormBtn = document.querySelector('.login-form-box_btn');
let body = document.querySelector('body');//none-scrol start


function showModal (){
    modalLogin.classList.add("login-active");
    body.style.overflowY ="hidden";


}
startLogin.addEventListener("click" , showModal);



function endShowModal (){
    modalLogin.classList.remove('login-active');
    body.style.overflowY ="auto";
}
ioginIcon.addEventListener("click" , endShowModal );
loginFormBtn.addEventListener("click" , endShowModal);

//modal-traial start

let btnTarail = document.getElementById('btn-tarail');
let traialModal = document.querySelector('.traial-modal');
let traialTimes = document.querySelector('#traial-times');


btnTarail.onclick = () =>{
    traialModal .classList.add("traial-modal-active");
    body.style.overflowY ="hidden";

}
traialTimes.onclick = () =>{
    traialModal .classList.remove("traial-modal-active");
    body.style.overflowY ="auto";

}

//modal-traial ends





