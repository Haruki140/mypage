import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css"
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import Footer from "./Footer";
import Header from "./Header";
import { WorkData } from "type";


const Detail: FC = () => {
    const location = useLocation();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const workData: WorkData = location?.state
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            navigate("/");
        } else {
            window.scroll({
                top: 0,
            })
        }
    }, [workData])

    if (!location.state) {
        return (
            <></>
        )
    }


    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col max-w-300 mt-20">
                    <h1 className="md:text-5xl sm:text-4xl text-3xl font-[580] pt-20 pl-5">
                        {workData.title}
                    </h1>
                    <h1 className="sm:text-3xl text-2xl font-normal font-[var(Source Serif Pro)] pt-5 pb-3 pl-6 relative">
                        {workData.date}
                        <span className='absolute bg-[var(--text-color)] w-full h-[3px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
                    </h1>
                    <div className="grid lg:grid-cols-7 grid-cols-1 gap-10 justify-center pt-10 px-5">
                        <div className="flex flex-col lg:col-span-3 max-lg:order-2 sm:text-2xl text-xl  pt-5">
                            <h2 className="pb-2 font-semibold">詳細</h2>
                            <p className="pb-3 relative">
                                {workData.detail}
                            </p>
                            <h2 className=" pt-8 pb-2 font-semibold">使用技術</h2>
                            <p>{workData.skills}</p>
                            <h2 className=" pt-8 pb-2 font-semibold">関連リンク</h2>
                            <div className="pl-2 pt-2 flex flex-wrap gap-7">
                                {workData.links.map(link => {
                                    return (
                                        <a key={link.alt} href={link.uri}>
                                            <img className="h-13 w-13" src={link.icon} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="lg:col-span-4 max-lg:order-1">
                            <Swiper
                                spaceBetween={1}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Thumbs]}
                                className="mb-10 rounded-2xl"
                            >
                                {workData.photos.map(photo => {
                                    return (
                                        <SwiperSlide>
                                            <img 
                                                key={photo.alt}
                                                className="h-96 w-full mx-auto object-cover rounded-2xl"
                                                src={photo.uri}
                                            />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <Swiper
                                id="custom"
                                onSwiper={setThumbsSwiper}
                                centeredSlides={true}
                                centeredSlidesBounds={true}
                                spaceBetween={10}
                                slidesPerView={workData.photos.length}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Thumbs]}
                                className="rounded-2xl"
                            >
                                {workData.photos.map(photo => {
                                    return (
                                        <SwiperSlide>
                                            <img 
                                                key={photo.alt}
                                                className="h-32 object-cover rounded-2xl mx-auto"
                                                src={photo.uri}
                                            />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <button 
                    className="text-3xl border-[#cdaf92] border-[3px] rounded-2xl py-4 px-10 mt-25 mb-15 shadow-xl hover:translate-y-[-5px] hover:cursor-pointer transition duration-400"
                    onClick={() => navigate("/", { state: localStorage.getItem("height")})}
                >
                    ホームに戻る
                </button>
            </div>
            <Footer />
        </>
    )
}

export default Detail;