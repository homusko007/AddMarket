new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    loop: true,
    loopedSlides: 3,

    autoplay: {
        delay: 3000,
    }
});

new Swiper('.comand-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 2,
    autoHeight: true,
    spaceBetween: 60,
    loop: true,
    autoplay: {
        delay: 3000,
    }
 });



document.getElementById("request-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле Имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("email").value === "") {
        alert("Заполните поле e-mail!");
    } else if (document.getElementById("link").value === "") {
        alert("Заполните поле ссылка на сайт!");   link
    }   else {
        alert("Cпасибо за заявку! Мы свяжемся свами в ближайшее время!")
    } 
}