import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
export function swiper() {
    new Swiper('.swiper', {
        loop: true,

        autoplay: {
            delay: 2500,
        },
    });
}
