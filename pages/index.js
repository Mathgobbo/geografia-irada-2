import Nav from '../components/nav'
import { useEffect, useState } from 'react'

export default function IndexPage() {
  return (

    <div>
      <CurveWrapper className="relative bg-gradient-to-r from-blue-500 to-blue-700 sm:from-blue-600 sm:to-green-600 h-screen">
        <Nav />
        <div className="container h-full mx-auto px-8 py-8 flex items-center">
          <div className="flex flex-wrap w-full">
            <div className="flex flex-1 flex-col justify-center ">
              <h1 className="text-3xl text-left sm:text-center md:text-left md:text-5xl text-white sm:text-gray-800 py-2 font-bold font-nunito">
                Aprenda com a Melhor Plataforma de Geografia do Brasil
            </h1>
              <p className="py-2 pb-4 text-gray-200 sm:text-gray-500 text-xl">Se prepare para os principais vestibulares e concursos com inúmeras <strong>aulas</strong> e <strong>conteúdos extras</strong>. </p>
              <div className="flex flex-wrap justify-around sm:justify-start " >
                <button className="transition bg-gradient-to-r from-blue-400 to-green-600 text-white font-bold px-8 py-2 rounded-md hover:from-blue-300 hover:to-green-500 border-b-4 border-green-800 hover:border-opacity-0 transform hover:translate-y-1 ">
                  Assine Já
              </button>

                <button className="transition ml-5 bg-gradient-to-r from-blue-400 to-green-600 text-white font-bold px-8 py-2 rounded-md hover:from-blue-300 hover:to-green-500 hover:border-b-0 border-b-4 border-green-800 hover:border-opacity-0 transform hover:translate-y-1 ">
                  Saiba Mais
              </button>
              </div>
            </div>

            <div className="hidden md:flex flex-1 justify-center items-center">
              <img src="/logoSemFundo.png" width="400px" height="400px" />
            </div>
          </div>
        </div>
      </CurveWrapper>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
      <h2>asasas</h2>
    </div>
  )
}


function CurveWrapper({ children, ...props }) {
  const [width, setWidth] = useState(1800)
  useEffect(() => setWidth(window.innerWidth), [])
  return (
    <div {...props}>
      {
        width > 1080 ?
          <>
            <FirstCurve className="hidden sm:block md:absolute inset-0 " />
            <SecondCurve className="hidden sm:block md:absolute inset-0 " />
          </>
          :
          <div />
      }
      <div className="relative z-10 h-full" >
        {children}
      </div>
    </div>
  )
}

function SecondCurve(props) {
  return (
    <div {...props}>
      <svg style={{ width: "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1440 700`}  >
        <path fill="#fefefe" fillOpacity="1" d="M 0 680 Q 90 590 230 600 Q 410 640 530 520 Q 670 350 850 490 Q 1000 600 1060 320 Q 1090 110 1440 60 L 1440 0 L 0 0 Z"></path>
      </svg>
    </div >
  )
}

function FirstCurve(props) {
  return (
    <div {...props}>
      <svg style={{ width: "100%" }} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1440 700`}>
        <path fill="#d3d3d3" fillOpacity="1" d="M 0 680 Q 90 590 220 620 Q 410 670 520 540 Q 640 350 820 480 Q 970 600 1040 380 Q 1100 140 1440 60 L 1440 0 L 0 0 Z"></path>
      </svg>
    </div >
  )
}
