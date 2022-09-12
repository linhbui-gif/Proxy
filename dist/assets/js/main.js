window.onload = () => {
   navigationMobile.init();
};
let navigationMobile = {
  init:function (){
    this.toggleShow();
  },
  toggleShow:function (){
      const buttonBar = document.querySelector('.Navigation-item .button-bars');
      const listMenu  = document.querySelector('.Navigation-item .list-item-group');
      buttonBar.addEventListener('click', () => {
        listMenu.classList.toggle('active');
      })
  }
}