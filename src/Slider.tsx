import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const photoData = [
    {
        uri: "./src/assets/home.jpg",
        alt: 1,
    },
    {
        uri: './src/assets/test2.png',
        alt: 2,
    }
]

const Slider: FC = () => {
    return (
        <Swiper
            autoplay={{
            delay: 0,
            }}
            spaceBetween={0}
            speed={10000}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
        >
            {photoData.map(photo => {
                return (
                    <SwiperSlide>
                        <img className="h-66 w-70 object-cover" src={photo.uri} alt={photo.uri} />
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}

export default Slider;