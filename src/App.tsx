import React, {FC} from 'react'

const Page:FC = () => {
  return (
    <div>
      <div className='max-w-360 mx-auto'>
        <div className='h-200 flex flex-col justify-center items-center'>
          <div className='text-center text-[64px]'>
            Haruki Ishimaru
          </div>
          <div className='text-center text-[36px]'>
            Software Engineer
          </div>
        </div>
      </div>
      <div className='h-350 bg-[var(--body-color)] text-center'>
        <div className='text-[64px] pt-76'>About me</div>
        <div className='flex items-center justify-center'>
          <div className='h-50 w-50 rounded-full bg-amber-500'></div>
          <div className='w-161 text-[32px] pl-16'>大阪公立大学大学院情報学研究科基幹情報学専攻の石丸です．Webアプリをチームで開発したり個人でも開発しています</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-[40px]'>Music</div>
          <div className='h-66 w-70 bg-[#D4C9BE]'></div>
          <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center items-center'>ラーメン</div>
          <div className='w-70 text-[24px]'>ラーメンが好きでよく食べに行きます</div>
        </div>
      </div>
      <div className='h-345'>
        <div className='text-center pt-59 text-[64px]'>Works</div>
        <div className='flex flex-col items-center'>
          <div className='h-56 w-100 bg-[#D4C9BE]'></div>
          <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
            <div className='text-[24px]'>ポートフォリオサイト</div>
            <div className='pt-6 text-[20px]'>自分のサイトを作りました</div>
          </div>
        </div>
        <div className='flex flex-col items-center pt-7'>
          <div className='h-56 w-100 bg-[#D4C9BE]'></div>
          <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
            <div className='text-[24px]'>研究会</div>
            <div className='pt-6 text-[20px]'>研究会に参加しました</div>
          </div>
        </div>
      </div>
      <div className='h-416 w-360 mx-auto bg-[#EEEBE4]'>
        <div className='text-[64px] text-center pt-72'>Skills</div>
        <div className='flex flex-col pl-86'>
          <div className='text-[36px]'>FrontEnd</div>
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
          <div className='text-[36px]'>BackEnd</div>
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
          <div className='text-[36px]'>Tools</div>
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
      <div className='h-321 flex flex-col items-center'>
        <div className='text-[64px] text-center pt-75'>Contact me</div>
        <div className='h-180 w-178 pt-18 border-[3px] gap-8 border-[#D4C9BE] flex flex-col items-center'>
          <div className='flex gap-16'>
            <div className='flex flex-col'>
              <div className='text-[32px]'>お名前</div>
              <div className='h-18 w-70 border-[3px] border-[#D4C9BE]'></div>
            </div>
            <div className='flex flex-col'>
              <div className='text-[32px]'>アドレス</div>
              <div className='h-18 w-70 border-[3px] border-[#D4C9BE]'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-[32px]'>件名</div>
            <div className='h-18 w-156 border-[3px] border-[#D4C9BE]'></div>
          </div>
          <div className='flex flex-col'>
            <div className='text-[32px]'>本文</div>
            <div className='h-50 w-156 border-[3px] border-[#D4C9BE]'></div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Page