
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// const iconClose = document.querySelector('.icon-close');
// const btnPopup = document.querySelector('.btnLogin-popup');
    
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

