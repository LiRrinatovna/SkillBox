addEventListener('DOMContentLoaded', (event) => {
  let button = document.getElementById('burger');
  let menu = document.getElementById('nav');
  let menuLinks = menu.querySelectorAll('.headerMenuLink');

  button.addEventListener('click', ()=> {
    button.classList.toggle('burgerActive');
    menu.classList.toggle('navActive');
    document.body.classList.toggle('stopScroll');
  })

  menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
      button.classList.remove('burgerActive');
      menu.classList.remove('navActive');
      document.body.classList.remove('stopScroll');
    })
  });

  let tabsBtn = document.querySelectorAll('.tabs__link');
  let tabsItem = document.querySelectorAll('.tabsItem');

  tabsBtn.forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){
        btn.classList.remove('tabsNavBtn_active');
      })

      e.currentTarget.classList.add('tabsNavBtn_active');

      tabsItem.forEach(function(el){
        el.classList.remove('tabsItem_active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tabsItem_active');
    })
  });

  new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
        }
    },
    autoplay: {
      delay: 4000,
    },
  });

  let searchBtn = document.getElementById('search');
  let searchClose = document.getElementById('searchClose');
  let searchInput = document.getElementById('searchInput');
  let container = document.getElementById('contSeach');

  searchBtn.addEventListener('click', () =>{

    searchClose.classList.add('loopCloseActive');
    container.classList.add('searchActive');
    searchInput.classList.add('searchInputActive');

    searchClose.classList.remove('loopClose');
    searchInput.classList.remove('searchInput');
    container.classList.remove('search');
  })

  searchClose.addEventListener('click', () =>{

    searchClose.classList.add('loopClose');
    searchInput.classList.add('searchInput');
    container.classList.add('search');

    searchClose.classList.remove('loopCloseActive');
    container.classList.remove('searchActive');
    searchInput.classList.remove('searchInputActive');

  })
});
