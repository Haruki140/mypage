import React, {FC} from 'react'
import Slider from './Slider';


const Page:FC = () => {
  return (
    <>
      {/* メイン */}
      <div className='mx-auto mt-20 relative'>
        <img className="w-full object-cover" src="./src/assets/home.jpg"></img>
        <div className="absolute w-full text-center" style={{top: "42%", left: "52%", transform: "translate(-50%, -50%)"}}>
          <h1 className='2xl:text-7xl sm:text-6xl tiny:text-5xl text-3xl font-semibold sm:text-stroke-name tiny:text-stroke-name-tablet text-stroke-name-mobile'>
            Haruki Ishimaru
          </h1>
          <h1 className='2xl:text-5xl sm:text-4xl tiny:text-3xl text-xl font-semibold sm:text-stroke-sub tiny:text-stroke-sub-tablet text-stroke-sub-mobile'>
            Software Engineer
          </h1>
        </div>
      </div>

      {/* 自己紹介 */}
      <div className='bg-[var(--body-color)]'>
        <div className='h-auto max-w-360 mx-auto text-center py-70'>
          <h1 className='md:text-[64px] sm:text-[52px] text-[44px] relative'>
            About me
            <span className='absolute bg-[var(--text-color)] md:w-95 sm:w-80 w-65 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2' />
          </h1>
          <div className='flex items-center flex-wrap justify-center gap-10 mt-10'>
            <div className='lg:h-50 md:h-40 h-35 lg:w-50 md:w-40 w-35 rounded-full bg-amber-500'></div>
            <p className='lg:w-175 md:w-120 w-115 lg:text-3xl md:text-2xl text-xl lg:pl-15 inline-block text-left'>
              大阪公立大学大学院 情報学研究科 基幹情報学専攻の石丸です．
              IoT機器の種別について研究しています．
              Webアプリをチームで開発したり個人でも開発しています
            </p>
          </div>
          <div className='flex justify-center flex-wrap md:gap-18 gap-10 mt-10'>
            {/* 音楽 */}
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
            {/* 食べ物 */}
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Foods
              </h1>
              <div className='h-66 w-70'>
                <Slider />
              </div>
              <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center items-center'>ラーメン</div>
              <p className='w-70 text-[24px] inline-block text-left'>
                ラーメンが好きでよく食べに行きます
              </p>
            </div>
            {/* スポーツ */}
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Sports
              </h1>
              <div className='h-66 w-70'>
                <Slider />
              </div>
              <div className='h-16 w-70 bg-[#D9D9D9] text-[24px] flex flex-col justify-center items-center'>ラーメン</div>
              <p className='w-70 text-[24px] inline-block text-left'>
                ラーメンが好きでよく食べに行きます
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動紹介 */}
      <div className='h-auto max-w-360 mx-auto py-70'>
        <h1 className='text-center md:text-[64px] sm:text-[52px] text-[44px] relative'>
          Works
          <span className='absolute bg-[var(--text-color)] md:w-70 sm:w-60 w-50 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2' />
        </h1>
        <div className='flex flex-wrap justify-center lg:gap-14 gap-10 sm:mt-15 mt-5'>
          <div className='flex flex-col items-center'>
            <div className='sm:h-56 h-50 sm:w-100 w-90 bg-[#D4C9BE]'></div>
            <div className='sm:h-34 h-30 sm:w-100 w-90 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>ポートフォリオサイト</h2>
              <p className='pt-6 text-[20px]'>自分のサイトを作りました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='sm:h-56 h-50 sm:w-100 w-90 bg-[#D4C9BE]'></div>
            <div className='sm:h-34 h-30 sm:w-100 w-90 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>ポートフォリオサイト</h2>
              <p className='pt-6 text-[20px]'>自分のサイトを作りました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='sm:h-56 h-50 sm:w-100 w-90 bg-[#D4C9BE]'></div>
            <div className='sm:h-34 h-30 sm:w-100 w-90 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>ポートフォリオサイト</h2>
              <p className='pt-6 text-[20px]'>自分のサイトを作りました</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* スキル紹介 */}
      <div className='bg-[var(--body-color)]'>
        {/* h-416 */}
        <div className='h-auto max-w-360 mx-auto py-70'>
          <h1 className='md:text-[64px] sm:text-[52px] text-[44px] text-center relative'>
            Skills
            <span className='absolute bg-[var(--text-color)] md:w-70 sm:w-60 w-50 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2' />
          </h1>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 sm:mt-10 mt-5'>
            <h2 className='md:text-4xl text-3xl text-start'>
              FrontEnd
            </h2>
            <div className='flex flex-wrap sm:gap-7 gap-3 mt-3'>
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/HTML.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/CSS.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/JavaScript.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/TypeScript.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/React.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/VueJS.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Vite.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/TailwindCSS.svg' alt='1' />
            </div>
            <div className='flex flex-col tiny:gap-2 md:text-3xl tiny:text-2xl text-xl pt-7.5'>
              <p>HTML：Webアプリ開発</p>
              <p>CSS：Webアプリ開発</p>
              <p>JavaScript：Webアプリ開発</p>
            </div>
          </div>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 pt-5'>
            <h2 className='md:text-4xl text-3xl text-start'>
              BackEnd
            </h2>
            <div className='flex flex-wrap sm:gap-7 gap-3 mt-3'>
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Java.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Python.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/C.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/CPP.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Django.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Spring.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Gradle.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Mariadb.svg' alt='1' />
            </div>
            <div className='flex flex-col tiny:gap-2 md:text-3xl tiny:text-2xl text-xl pt-7.5'>
              <p>Python：Webアプリ開発</p>
              <p>Java：Webアプリ開発</p>
              <p>MySQL：Webアプリ開発</p>
            </div>
          </div>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 pt-5'>
            <h2 className='md:text-4xl text-3xl text-start'>
              Tools
            </h2>
            <div className='flex flex-wrap sm:gap-7 gap-3 mt-3'>
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/VSCode.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Github.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Docker.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Figma.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Linux.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Eclipse.svg' alt='1' />
              <img className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Vercel.svg' alt='1' />
            </div>
            <div className='flex flex-col tiny:gap-2 md:text-3xl tiny:text-2xl text-xl pt-7.5'>
              <p>Docker：Webアプリ開発</p>
              <p>GitHub：Webアプリ開発</p>
              <p>VSCode：Webアプリ開発</p>
            </div>
          </div>
        </div>
      </div>

      {/* 問い合わせ */}
      <div className='h-auto flex flex-col items-center py-70'>
        <h1 className='md:text-[64px] sm:text-[52px] text-[44px] text-center relative'>
          Contact me
          <span className='absolute bg-[var(--text-color)] md:w-110 sm:w-90 w-70 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2' />
        </h1>
        <div className='form:h-140 h-165 form:w-132 w-72 pt-5 border-[3px] gap-5 border-[#D4C9BE] flex flex-col items-center sm:mt-15 mt-7'>
          <div className='flex flex-wrap justify-center form:gap-12 gap-8'>
            <div className='flex flex-col'>
              <h2 className='form:text-[28px] text-2xl'>お名前</h2>
              <div className='h-12 form:w-49 w-56 border-[3px] border-[#D4C9BE]'></div>
            </div>
            <div className='flex flex-col'>
              <h2 className='form:text-[28px] text-2xl'>アドレス</h2>
              <div className='h-12 form:w-49 w-56 border-[3px] border-[#D4C9BE]'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='form:text-[28px] text-2xl'>件名</h2>
            <div className='h-12 form:w-110 w-56 border-[3px] border-[#D4C9BE]'></div>
          </div>
          <div className='flex flex-col'>
            <h2 className='form:text-[28px] text-2xl'>本文</h2>
            <div className='h-50 form:w-110 w-56 border-[3px] border-[#D4C9BE]'></div>
          </div>
          <button 
            className='h-12 w-31 border-[3px] form:text-[28px] text-2xl border-[#D4C9BE]'
            type='submit'
          >
            送信する
          </button>
        </div>
      </div>
    </>
  )
}

export default Page