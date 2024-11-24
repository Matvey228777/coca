import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function swiper() {
    new Swiper('.swiper1', {
        loop: true,
        slidesPerView: 1,

        autoplay: {
            delay: 2500,
        },
    });

    new Swiper('.swiper2', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 100,

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
        },

        autoplay: {
            delay: 6000,
        },
    });
}
