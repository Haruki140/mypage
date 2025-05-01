import React, {FC, useEffect} from 'react'
import Slider from './Slider';

import photos from "./assets/favPhotoData.json";
import works from "./assets/workData.json";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Home:FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const workData = works.workData;
  const photoData = photos;

  useEffect(() => {
    if (location.state) {
      window.scroll(0, parseInt(location.state));
    }
  }, [])

  return (
    <>
      <Header />
      {/* メイン */}
      <div id="Home" className='mx-auto mt-20 relative'>
        <img className="w-full object-cover" src="./src/assets/home.jpg"></img>
        <div className="absolute w-full text-center pl-10" style={{top: "42%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <h1 className='2xl:text-7xl sm:text-6xl tiny:text-5xl text-3xl font-semibold sm:text-stroke-name tiny:text-stroke-name-tablet text-stroke-name-mobile'>
            Haruki Ishimaru
          </h1>
          <h1 className='2xl:text-5xl sm:text-4xl tiny:text-3xl text-xl font-semibold sm:text-stroke-sub tiny:text-stroke-sub-tablet text-stroke-sub-mobile'>
            Software Engineer
          </h1>
        </div>
      </div>

      {/* 自己紹介 */}
      <div id="About" className='bg-[var(--body-color)]'>
        <div className='h-auto max-w-360 mx-auto text-center py-70'>
          <h1 className='md:text-[64px] sm:text-[52px] text-[44px] relative'>
            About me
            <span className='absolute bg-[var(--text-color)] md:w-95 sm:w-80 w-65 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
          </h1>
          <div className='flex items-center flex-wrap justify-center gap-10 mt-10'>
            <img 
              className='lg:h-50 md:h-40 h-35 lg:w-50 md:w-40 w-35 rounded-full object-cover'
              src='/photos/profile.png'
            />
            <div className='lg:w-175 md:w-120 w-115 lg:text-3xl md:text-2xl text-xl lg:pl-15 inline-block text-left'>
              大阪公立大学大学院 情報学研究科 基幹情報学専攻の石丸晴基です．
              機械学習を用いたIoT機器の識別に関する研究を行っています．<br />
              加えて，研究室内でWebアプリのチーム開発に取り組むほか，個人開発も行っています．
              <div className='flex gap-5 pl-1 pt-3'>
                <a href='https://github.com/Haruki140'>
                  <img className='md:h-10 h-9 md:w-10 w-9' src='/icons/Github.svg' alt='1' />
                </a>
                <a href='https://qiita.com/Haruki140'>
                  <img className='md:h-10 h-9 md:w-10 w-9' src='/icons/Qiita.png' alt='1' />
                </a>
                <a href='https://www.linkedin.com/in/%E6%99%B4%E5%9F%BA-%E7%9F%B3%E4%B8%B8-182906362/'>
                  <img className='md:h-10 h-9 md:w-10 w-9' src='/icons/LinkedIn.svg' alt='1' />
                </a>
                <a href='https://www.instagram.com/marulog.ramen?igsh=MTZ2M3B2cWc2NmhweA%3D%3D&utm_source=qr'>
                  <img className='md:h-10 h-9 md:w-10 w-9' src='/icons/Instagram.svg' alt='1' />
                </a>
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-wrap md:gap-18 gap-10 px-5 mt-10'>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Food
              </h1>
              <div className='h-70 w-70 rounded-4xl shadow-2xl'>
                <Slider photoData={photoData.ramenData} />
              </div>
              <p className='w-70 text-[24px] inline-block text-left mt-3'>
                ラーメン大好きです！！いつか全国のラーメンを食べ歩きたい．
              </p>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Music
              </h1>
              <div className='h-70 w-70 rounded-4xl shadow-2xl'>
                <Slider photoData={photoData.musicData} />
              </div>
              <p className='w-70 text-[24px] inline-block text-left mt-3'>
                セカオワは小さい頃から聴いていて，ライブには欠かさず参戦します．
              </p>
            </div>
            <div className='flex flex-col items-start'>
              <h1 className='text-[40px]'>
                Sports
              </h1>
              <div className='h-70 w-70 rounded-4xl shadow-2xl'>
                <Slider photoData={photoData.sportsData} />
              </div>
              <p className='w-70 text-[24px] inline-block text-left mt-3'>
                中高の部活は野球とバドミントンでした．最近はスノボもします．
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 活動紹介 */}
      <div id="Works" className='h-auto max-w-360 mx-auto py-70'>
        <h1 className='text-center md:text-[64px] sm:text-[52px] text-[44px] relative'>
          Works
          <span className='absolute bg-[var(--text-color)] md:w-70 sm:w-60 w-50 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
        </h1>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-5 sm:mt-15 mt-5'>
          {workData.map((work, id) => {
            return (
              <div 
                className='flex flex-col items-center rounded-2xl shadow-xl hover:translate-y-[-7px] hover:cursor-pointer transition duration-400'
                key={work.id}
                onClick={ () => {
                  localStorage.setItem("height", window.scrollY.toString())
                  navigate('/detail', { state: workData[id]});
                  
                }}
              >
                <img src={work.photos[0].uri} className='sm:h-56 h-50 w-full object-cover rounded-t-xl' />
                <div className='flex flex-col items-center lg:h-40 sm:h-40 h-34 w-full text-center px-5 rounded-b-xl border-[#cdaf92] border-2'>
                  <h2 className='tiny:text-2xl text-xl font-semibold py-1.5 inline-block text-left relative'>
                    {work.title}
                    <span className='absolute bg-[#cdaf92c6] w-70 h-[2px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
                  </h2>
                  <p className='pt-4 tiny:text-[20px] font-light text-sm pb-2 inline-block text-left'>{work.abst}</p>
                </div>
              </div>
            )
          })}       
        </div>
      </div>

      {/* スキル紹介 */}
      <div id="Skills" className='bg-[var(--body-color)]'>
        <div className='h-auto max-w-360 mx-auto py-70'>
          <h1 className='md:text-[64px] sm:text-[52px] text-[44px] text-center relative'>
            Skills
            <span className='absolute bg-[var(--text-color)] md:w-70 sm:w-60 w-50 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
          </h1>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 sm:mt-10 mt-5'>
            <h2 className='md:text-4xl text-3xl font-semibold text-start'>
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
            <h2 className='md:text-4xl text-3xl font-semibold text-start'>
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
            <h2 className='md:text-4xl text-3xl font-semibold text-start'>
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
      <div id='Contact' className='h-auto flex flex-col items-center mx-auto py-70'>
        <h1 className='md:text-[64px] sm:text-[52px] text-[44px] text-center relative'>
          Contact me
          <span className='absolute bg-[var(--text-color)] md:w-110 sm:w-90 w-70 sm:h-[5px] h-[4px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
        </h1>
        <div className='sm:h-140 h-165 sm:w-132 w-72 pt-5 border-[3px] gap-5 border-[#D4C9BE] flex flex-col items-center sm:mt-15 mt-7 rounded-2xl'>
          <div className='flex flex-wrap justify-center sm:gap-12 gap-8'>
            <div className='flex flex-col'>
              <h2 className='sm:text-[28px] text-2xl'>お名前</h2>
              <div className='h-12 sm:w-49 w-56 border-[3px] border-[#D4C9BE] rounded-xl'></div>
            </div>
            <div className='flex flex-col'>
              <h2 className='sm:text-[28px] text-2xl'>アドレス</h2>
              <div className='h-12 sm:w-49 w-56 border-[3px] border-[#D4C9BE] rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='sm:text-[28px] text-2xl'>件名</h2>
            <div className='h-12 sm:w-110 w-56 border-[3px] border-[#D4C9BE] rounded-xl'></div>
          </div>
          <div className='flex flex-col'>
            <h2 className='sm:text-[28px] text-2xl'>本文</h2>
            <div className='h-50 sm:w-110 w-56 border-[3px] border-[#D4C9BE] rounded-xl'></div>
          </div>
          <button 
            className='h-12 w-31 border-[3px] sm:text-[26px] text-2xl border-[#D4C9BE] rounded-xl'
            type='submit'
          >
            送信する
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home