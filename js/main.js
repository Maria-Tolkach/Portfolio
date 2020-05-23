$(document).ready(function () {

    // Фильтрация проектов
    let containerEl = document.querySelector('#portfolio-projects');
    let mixer = mixitup(containerEl,{
        classNames: {
            block: ""
        }
    })

    /*
    1-Получить кнопку по которой будет клик
    2-Получить мобильное меню
    3-Прослушать клик по кнопке и по клику добавлять/удалять класс active у мобильного меню
    4-Добавлять/удалять класс active у самой кнопки, по которой кликаем
    5-Получить overlay
    6-При клике по кнопке добавить/удалить класс active


    Спрятать оверлэй
    7-Прослушать события ресайз у окна
    8-У дивов убрать эктив
    */

   /*1*/const mobileMenuToggle = document.querySelector('.toggle-menu');
   /*2*/const mobMenu = document.querySelector('.header-nav');
   /*5*/const overlay = document.querySelector('#overlay');
   const logo = document.querySelector('.logo')

   /*3*/mobileMenuToggle.addEventListener('click', function(){
       mobMenu.classList.toggle('active');
       /*4*/this.classList.toggle('active');
       /*6*/overlay.classList.toggle('active');
       logo.classList.toggle('active');
   })

   /*7*/window.addEventListener('resize', function(){
        /*8*/mobMenu.classList.remove('active');
        /*8*/mobileMenuToggle.classList.remove('active');
        /*8*/overlay.classList.remove('active');
        logo.classList.toggle('active');
   })

   //fake-placeholder .fake-placeholder
   const formInputs = document.querySelectorAll('.card-field');
   for(let item of formInputs){
       const inputPlacegolder = item.nextElementSibling;
       item.addEventListener ('click', function(){
            inputPlacegolder.classList.add('active');
       })
       //Если мой элемент (импут) имеет такое событие как blur пусть в этом случае выполняется функция, которая проверяет сначала 
       //если мой этот импут если у него value (то что пользователь ввел) равен пустоте "", в этом случае удалить этот класс эктив у inputplaceholdera мы add меняем на remove
       item.addEventListener('blur', function (){
           if (this.value == ''){
               inputPlacegolder.classList.remove('active');
           }
       })
   }
})
