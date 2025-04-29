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
        <div className='h-auto max-w-360 mx-auto text-center'>
          <h1 className='text-[64px] pt-76'>About me</h1>
          <div className='flex items-center flex-wrap justify-center gap-10 mx-10'>
            <div className='lg:h-50 md:h-40 h-35 lg:w-50 md:w-40 w-35 rounded-full bg-amber-500'></div>
            <p className='lg:w-175 md:w-120 w-115 lg:text-3xl md:text-2xl text-xl lg:pl-15 inline-block text-left'>
              大阪公立大学大学院 情報学研究科 基幹情報学専攻の石丸です．
              IoT機器の種別について研究しています．
              Webアプリをチームで開発したり個人でも開発しています
            </p>
          </div>
          <div className='flex justify-center flex-wrap sm:gap-18 gap-10 mt-10'>
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
      {/* h-345 */}
      <div className='h-auto max-w-360 mx-auto'>
        <h1 className='text-center pt-59 text-[64px]'>Works</h1>
        <div className='flex flex-wrap justify-center gap-14'>
          <div className='flex flex-col items-center'>
            <div className='h-56 w-100 bg-[#D4C9BE]'></div>
            <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>ポートフォリオサイト</h2>
              <p className='pt-6 text-[20px]'>自分のサイトを作りました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='h-56 w-100 bg-[#D4C9BE]'></div>
            <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>研究会</h2>
              <p className='pt-6 text-[20px]'>研究会に参加しました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='h-56 w-100 bg-[#D4C9BE]'></div>
            <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>研究会</h2>
              <p className='pt-6 text-[20px]'>研究会に参加しました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='h-56 w-100 bg-[#D4C9BE]'></div>
            <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>研究会</h2>
              <p className='pt-6 text-[20px]'>研究会に参加しました</p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='h-56 w-100 bg-[#D4C9BE]'></div>
            <div className='h-34 w-100 text-center bg-[#D9D9D9]'>
              <h2 className='text-[24px]'>研究会</h2>
              <p className='pt-6 text-[20px]'>研究会に参加しました</p>
            </div>
          </div>
        </div>
      </div>

      {/* スキル紹介 */}
      <div className='bg-[var(--body-color)]'>
        {/* h-416 */}
        <div className='h-auto max-w-360 mx-auto'>
          <h1 className='text-[64px] text-center pt-72'>
            Skills
          </h1>
          <div className='flex flex-col mx-70'>
            <h2 className='text-[36px] text-start'>
              FrontEnd
            </h2>
            <div className='flex flex-wrap gap-7.5'>
              <img className='h-20 w-20' src='/icons/HTML.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/CSS.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/JavaScript.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/TypeScript.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/React.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/VueJS.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Vite.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/TailwindCSS.svg' alt='1' />
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>HTML：Webアプリ開発</li>
              <li>CSS：Webアプリ開発</li>
              <li>JavaScript：Webアプリ開発</li>
            </div>
          </div>
          <div className='flex flex-col mx-70 pt-5'>
            <h2 className='text-[36px]'>BackEnd</h2>
            <div className='flex flex-wrap gap-7.5'>
              <img className='h-20 w-20' src='/icons/Java.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Python.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/C.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/CPP.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Django.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Spring.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Gradle.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Mariadb.svg' alt='1' />
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>Python：Webアプリ開発</li>
              <li>Java：Webアプリ開発</li>
              <li>MySQL：Webアプリ開発</li>
            </div>
          </div>
          <div className='flex flex-col mx-70 pt-5'>
            <h2 className='text-[36px]'>Tools</h2>
            <div className='flex flex-wrap gap-7.5'>
              <img className='h-20 w-20' src='/icons/VSCode.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Github.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Docker.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Figma.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Linux.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Eclipse.svg' alt='1' />
              <img className='h-20 w-20' src='/icons/Vercel.svg' alt='1' />
            </div>
            <div className='text-[32px] pt-7.5'>
              <li>Docker：Webアプリ開発</li>
              <li>GitHub：Webアプリ開発</li>
              <li>VSCode：Webアプリ開発</li>
            </div>
          </div>
        </div>
      </div>

      {/* 問い合わせ */}
      <div className='h-321 flex flex-col items-center'>
        <h1 className='text-[64px] text-center pt-75'>Contact me</h1>
        <div className='h-190 w-178 pt-18 border-[3px] gap-8 border-[#D4C9BE] flex flex-col items-center'>
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
          <button className='h-20 w-57 border-[3px] text-[30px] border-[#D4C9BE]'>送信する</button>
        </div>
      </div>
    </>
  )
}

export default Page