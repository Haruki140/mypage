import React, {FC, useEffect, useRef, useState} from 'react'
import Slider from './Slider';

import photos from "./assets/favPhotoData.json";
import works from "./assets/workData.json";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import { LazyLoadImage } from 'react-lazy-load-image-component';


const Home:FC = () => {
  const [isShowFinish, setIsShowFinish] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const workData = works.workData;
  const photoData = photos;

  const ContactGoogleForm = {
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSctW2CxrK2hGv0X3g0LDAjqXzm9RyF9sip5rboRhsSxPcRv5Q/formResponse',
    name: 'entry.527111157',
    address: 'entry.1743407270',
    title: 'entry.170708196',
    text: 'entry.311883619',
  }
    

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
        <LazyLoadImage className="w-full object-cover" src="./compressed-photos/home.jpg"></LazyLoadImage>
        <div className="absolute w-full text-center tiny:pl-10 pl-5" style={{top: "42%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <h1 className='2xl:text-7xl sm:text-6xl mobile:text-5xl tiny:text-4xl text-3xl font-semibold sm:text-stroke-name mobile:text-stroke-name-tablet text-stroke-name-mobile'>
            Haruki Ishimaru
          </h1>
          <h1 className='2xl:text-5xl sm:text-4xl mobile:text-3xl tiny:text-2xl text-xl font-semibold sm:text-stroke-sub mobile:text-stroke-sub-tablet text-stroke-sub-mobile'>
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
            <LazyLoadImage 
              className='lg:h-50 md:h-40 h-35 lg:w-50 md:w-40 w-35 rounded-full object-cover'
              src='/photos/profile.png'
            />
            <div className='lg:w-175 md:w-120 w-115 lg:text-3xl md:text-2xl text-xl lg:pl-15 inline-block text-left px-3'>
              大阪公立大学大学院 情報学研究科 基幹情報学専攻の石丸晴基です．
              機械学習を用いたIoT機器の識別に関する研究を行っています．<br />
              加えて，研究室内でWebアプリのチーム開発に取り組むほか，個人開発も行っています．
              <div className='flex gap-5 pl-1 pt-3'>
                <a href='https://github.com/Haruki140'>
                  <LazyLoadImage className='md:h-10 h-9 md:w-10 w-9' src='/icons/Github.svg' alt='1' />
                </a>
                <a href='https://qiita.com/Haruki140'>
                  <LazyLoadImage className='md:h-10 h-9 md:w-10 w-9' src='/icons/Qiita.png' alt='1' />
                </a>
                <a href='https://www.linkedin.com/in/%E6%99%B4%E5%9F%BA-%E7%9F%B3%E4%B8%B8-182906362/'>
                  <LazyLoadImage className='md:h-10 h-9 md:w-10 w-9' src='/icons/LinkedIn.svg' alt='1' />
                </a>
                <a href='https://www.instagram.com/marulog.ramen?igsh=MTZ2M3B2cWc2NmhweA%3D%3D&utm_source=qr'>
                  <LazyLoadImage className='md:h-10 h-9 md:w-10 w-9' src='/icons/Instagram.svg' alt='1' />
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
              <p className='w-70 md:text-2xl text-xl inline-block text-left mt-3'>
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
              <p className='w-70 md:text-2xl text-xl inline-block text-left mt-3'>
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
              <p className='w-70 md:text-2xl text-xl inline-block text-left mt-3'>
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
                className='flex flex-col items-center rounded-2xl shadow-xl border-[#cdaf92] border-2 hover:translate-y-[-7px] hover:cursor-pointer transition duration-400'
                key={id}
                onClick={ () => {
                  localStorage.setItem("height", window.scrollY.toString())
                  navigate('/detail', { state: workData[id]});
                  
                }}
              >
                <LazyLoadImage src={work.photos[0].uri} className='h-50 w-full object-cover rounded-t-xl border-b-2 border-[#313131]' />
                <div className='flex flex-col items-center h-full text-center px-5 rounded-b-xl'>
                  <h2 className='mobile:text-2xl text-xl font-semibold py-1.5 inline-block text-left relative'>
                    {work.title}
                    <span className='absolute bg-[#cdaf92c6] w-full h-[2px] bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl' />
                  </h2>
                  <p className='py-4 tiny:text-[20px] mb-5 font-light text-sm inline-block text-left'>{work.abst}</p>
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
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/HTML.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/CSS.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/JavaScript.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/TypeScript.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/React.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/VueJS.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Vite.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/TailwindCSS.svg' alt='1' />
            </div>
            <div className='flex flex-col mobile:gap-2 md:text-3xl mobile:text-2xl text-xl pt-7.5'>
              <li>主にWebアプリ開発で使用</li>
              <li>ReactとVueは始めて１年</li>
              <li>TailwindはPortfolio作成で初導入</li>
            </div>
          </div>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 pt-5'>
            <h2 className='md:text-4xl text-3xl font-semibold text-start'>
              BackEnd
            </h2>
            <div className='flex flex-wrap sm:gap-7 gap-3 mt-3'>
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Java.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Python.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/C.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/CPP.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Django.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Spring.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Gradle.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Mariadb.svg' alt='1' />
            </div>
            <div className='flex flex-col mobile:gap-2 md:text-3xl mobile:text-2xl text-xl pt-7.5'>
              <li>Python, Cは研究で使用</li>
              <li>C++は競プロ用</li>
              <li>他はWebアプリ開発が基本</li>
              <li>Django, Springbootは始めて１年</li>
            </div>
          </div>
          <div className='flex flex-col 2xl:mx-70 xl:mx-60 lg:mx-50 md:mx-30 sm:mx-20 mx-5 pt-5'>
            <h2 className='md:text-4xl text-3xl font-semibold text-start'>
              Tools
            </h2>
            <div className='flex flex-wrap sm:gap-7 gap-3 mt-3'>
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/VSCode.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Github.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Docker.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Figma.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Linux.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Eclipse.svg' alt='1' />
              <LazyLoadImage className='sm:h-20 h-15 sm:w-20 w-15' src='/icons/Vercel.svg' alt='1' />
            </div>
            <div className='flex flex-col mobile:gap-2 md:text-3xl mobile:text-2xl text-xl pt-7.5'>
              <li>VSCodeが一番使うエディタ</li>
              <li>Linuxは研究用サーバで導入</li>
              <li>DockerはWebアプリ開発に使用</li>
              <li>基本的にFigmaでデザイン</li>
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
        <form 
          className='sm:h-140 h-135 sm:w-132 w-72 pt-5 border-[3px] gap-5 border-[#D4C9BE] flex flex-col items-center sm:mt-15 mt-5 rounded-2xl'
          ref={formRef}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            fetch(ContactGoogleForm.url, {
              method: 'POST',
              mode: 'no-cors',
              body: formData
            })
            .then(() => {
              formRef.current?.reset();
              setIsShowFinish(true);
            });
          }}
        >
          <div className='flex flex-wrap justify-center sm:gap-12 gap-8'>
            <div className='flex flex-col'>
              <label className='sm:text-2xl text-xl'>お名前</label>
              <input 
                className='sm:h-12 h-10 sm:w-49 w-56 border-[3px] border-[#D4C9BE] rounded-xl'
                type='text'
                id='name'
                name={ContactGoogleForm.name}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label className='sm:text-2xl text-xl'>アドレス</label>
              <input 
                className='sm:h-12 h-10 sm:w-49 w-56 border-[3px] border-[#D4C9BE] rounded-xl'
                type='email'
                id='address'
                name={ContactGoogleForm.address}
                required
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='sm:text-2xl text-xl'>件名</label>
            <input 
              className='sm:h-12 h-10 sm:w-110 w-56 border-[3px] border-[#D4C9BE] rounded-xl'
              type='text'
              name={ContactGoogleForm.title}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label className='sm:text-2xl text-xl'>本文</label>
            <textarea 
              className='sm:h-50 h-30 sm:w-110 w-56 border-[3px] border-[#D4C9BE] rounded-xl'
              name={ContactGoogleForm.text}
              required
            />
          </div>
          <button 
            className='sm:h-12 h-10 w-31 sm:text-[26px] text-2xl bg-[#D4C9BE] hover:bg-[#d0b091] rounded-xl transition duration-200'
            type='submit'
          >
            送信する
          </button>
        </form>
        {isShowFinish ? (
          <div className='sm:text-3xl text-2xl mt-10'>
            送信しました！
          </div>
        ): (<></>)}
      </div>
      <Footer />
    </>
  )
}

export default Home