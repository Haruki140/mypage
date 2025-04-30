import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

const Detail: FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const navigate = useNavigate();

    const handleBack = () => navigate("/")

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col max-w-300 mt-20">
                <h1 className="md:text-5xl sm:text-4xl text-3xl font-[580] pt-20 pl-5">
                    自分のポートフォリオを作成
                </h1>
                <h1 className="sm:text-3xl text-2xl font-normal font-[var(Source Serif Pro)] pt-5 pb-3 pl-6 relative">
                    2025/4/30
                    <span className='absolute bg-[var(--text-color)] w-full h-[3px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
                </h1>
                <div className="grid lg:grid-cols-7 grid-cols-1 gap-10 justify-center pt-10 px-5">
                    <div className="flex flex-col lg:col-span-3 max-lg:order-2 sm:text-2xl text-xl  pt-5">
                        <h2 className="pb-2 font-semibold">詳細</h2>
                        <p className="pb-3 relative">
                            自分のポートフォリオを作成してみました．
                            就活を行うにあたって自分の活動をわかりやすく示すために作成しました．
                            使用技術はReactです．よければゆっくりみていてくださいな，文字数稼ぎも大変ですわ．
                            {/* <span className='absolute bg-[#ced0d6] w-full h-[2px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' /> */}
                        </p>
                        <h2 className=" pt-8 pb-2 font-semibold">使用技術</h2>
                        <p>React, TypeScript, Tailwind CSS</p>
                        <h2 className=" pt-8 pb-2 font-semibold">関連リンク</h2>
                        {/* <p>http://localhost:5173/detail</p> */}
                        <div className="pl-2 pt-2 flex flex-wrap gap-7">
                            <img className="h-13 w-13" src="/icons/Github.svg" />
                            <img className="h-13 w-13" src="/icons/Github.svg" />
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
                            <SwiperSlide>
                            <img className="h-96 w-full mx-auto object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="h-96 w-full mx-auto object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="h-96 w-full mx-auto object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="rounded-2xl"
                        >
                            <SwiperSlide>
                            <img className="h-32 w-full object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="h-32 w-full object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img className="h-32 w-full object-cover rounded-2xl" src="/src/assets/home.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <button 
                className="text-3xl border-[#cdaf92] border-[3px] rounded-2xl py-4 px-10 mt-20 mb-15 shadow-xl hover:translate-y-[-5px] hover:cursor-pointer transition duration-400"
                onClick={handleBack}
            >
                Back
            </button>
        </div>
    )
}

export default Detail;