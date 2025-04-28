import React, {FC} from 'react'
import Slider from './Slider';


const Page:FC = () => {
  return (
    <>
      <div className='mx-auto mt-20 relative'>
        <img className="w-full object-cover" src="./src/assets/home.jpg"></img>
        <div className="absolute text-center" style={{top: "42%", left: "52%", transform: "translate(-50%, -50%)"}}>
          <h1 className='text-[68px] font-semibold text-stroke-name'>
            Haruki Ishimaru
          </h1>
          <h1 className='text-[40px] font-semibold text-stroke-sub'>
            Software Engineer
          </h1>
        </div>
      </div>

      <div className='bg-[var(--body-color)]'>
        <div className='h-350 max-w-360 mx-auto text-center'>
          <h1 className='text-[64px] pt-76'>About me</h1>
          <div className='flex items-center justify-center'>
            <div className='h-50 w-50 rounded-full bg-amber-500'></div>
            <p className='w-161 text-[32px] pl-16'>
              大阪公立大学大学院情報学研究科基幹情報学専攻の石丸です．Webアプリをチームで開発したり個人でも開発しています
            </p>
          </div>
          <div className='flex justify-center gap-18 mt-10'>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Music
              </h1>
              <div className='h-66 w-70'>
                <Slider />
              </div>
              <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center'>ラーメン</div>
              <p className='w-70 text-[24px] inline-block text-left'>
                セカオワが好きで毎回ライブに参戦しています
              </p>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Foods
              </h1>
              <div className='h-66 w-70 bg-[#D4C9BE]'></div>
              <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center items-center'>ラーメン</div>
              <p className='w-70 text-[24px] inline-block text-left'>
                ラーメンが好きでよく食べに行きます
              </p>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Sports
              </h1>
              <div className='h-66 w-70 bg-[#D4C9BE]'></div>
              <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center items-center'>ラーメン</div>
              <p className='w-70 text-[24px] inline-block text-left'>
                ラーメンが好きでよく食べに行きます
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-345 max-w-360 mx-auto'>
        <h1 className='text-center pt-59 text-[64px]'>Works</h1>
        <div className='flex flex-col items-center'>
          <div className='h-56 w-100 bg-[#D4C9BE]'></div>
          <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
            <h2 className='text-[24px]'>ポートフォリオサイト</h2>
            <p className='pt-6 text-[20px]'>自分のサイトを作りました</p>
          </div>
        </div>
        <div className='flex flex-col items-center pt-7'>
          <div className='h-56 w-100 bg-[#D4C9BE]'></div>
          <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
            <h2 className='text-[24px]'>研究会</h2>
            <p className='pt-6 text-[20px]'>研究会に参加しました</p>
          </div>
        </div>
      </div>
      <div className='bg-[var(--body-color)]'>
        <div className='h-416 max-w-360 mx-auto'>
          <h1 className='text-[64px] text-center pt-72'>Skills</h1>
          <div className='flex flex-col pl-86'>
            <h2 className='text-[36px]'>FrontEnd</h2>
            <div className='flex gap-7.5'>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>HTML：Webアプリ開発</li>
              <li>CSS：Webアプリ開発</li>
              <li>JavaScript：Webアプリ開発</li>
            </div>
          </div>
          <div className='flex flex-col pl-86 pt-5'>
            <h2 className='text-[36px]'>BackEnd</h2>
            <div className='flex gap-7.5'>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>Python：Webアプリ開発</li>
              <li>Java：Webアプリ開発</li>
              <li>MySQL：Webアプリ開発</li>
            </div>
          </div>
          <div className='flex flex-col pl-86 pt-5'>
            <h2 className='text-[36px]'>Tools</h2>
            <div className='flex gap-7.5'>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
              <ul className='h-25 w-25 bg-[#D4C9BE]'></ul>
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>Docker：Webアプリ開発</li>
              <li>GitHub：Webアプリ開発</li>
              <li>VSCode：Webアプリ開発</li>
            </div>
          </div>
        </div>
      </div>
      <div className='h-321 flex flex-col items-center'>
        <h1 className='text-[64px] text-center pt-75'>Contact me</h1>
        <div className='h-180 w-178 pt-18 border-[3px] gap-8 border-[#D4C9BE] flex flex-col items-center'>
          <div className='flex gap-16'>
            <div className='flex flex-col'>
              <h2 className='text-[32px]'>お名前</h2>
              <div className='h-18 w-70 border-[3px] border-[#D4C9BE]'></div>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-[32px]'>アドレス</h2>
              <div className='h-18 w-70 border-[3px] border-[#D4C9BE]'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[32px]'>件名</h2>
            <div className='h-18 w-156 border-[3px] border-[#D4C9BE]'></div>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[32px]'>本文</h2>
            <div className='h-50 w-156 border-[3px] border-[#D4C9BE]'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page