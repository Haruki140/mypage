import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Photo } from "type";

interface SliderProps {
    photoData: Photo[]
}

const Slider: FC<SliderProps> = ({photoData}) => {
    return (
        <Swiper
            autoplay={{
            delay: 2500,
            }}
            spaceBetween={10}
            speed={1000}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
        >
            {photoData.map(photo => {
                return (
                    <SwiperSlide>
                        <img className="h-70 w-70 rounded-xl object-cover" src={photo.uri} alt={photo.uri} />
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}

export default Slider;