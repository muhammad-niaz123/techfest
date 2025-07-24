"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import Event from "./components/Event"
import About from "./components/About"
import Sponsor from "./components/Sponsor"
import Footer from "./components/Footer"
import Ready from "./components/Ready"



export default function Page(){


const textdiv = useRef(null)

const texth = useRef(null)

useEffect(()=>{
 

const textdivhndle=(e)=>{
  const {clientX,clientY} = e
  //console.log(clientX,clientY)
  const box = textdiv.current.getBoundingClientRect()
 console.log(box)
const x = clientX-box.left

const y = clientY-box.top

const centerX = box.width / 2;
const centerY = box.height / 2;


console.log("x",x,"y",y,"centerx",centerX,"centery",centerY)

const rotateY = ((x - centerX) / centerX) * 15; 
const rotateX = -((y - centerY) / centerY) * 15;



gsap.to(textdiv.current,{
  rotateX,
  rotateY,
  duration: 0.4,
  ease: "power2.out",
  transformPerspective: 1000,
  transformOrigin: "center",
})
}



const resetRotation = () => {
  gsap.to(textdiv.current, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: "power2.out",
  });
};


textdiv.current.addEventListener("mousemove",textdivhndle)

textdiv.current.addEventListener("mouseleave", resetRotation);


gsap.from(texth.current.querySelectorAll("span"), {
  y: -200,
  opacity:0,
  duration:1,
  stagger:0.1,   
  ease: "back.out(1.7)",       
})


},[])


const text = "CAREER - FEST  2025"


  return(
    <div className="text-white flex flex-col gap-30">


<div className="w-[100vw] h-[100vh]  flex items-center justify-center flex-col gap-14">


<div className="w-[90vw] h-[50vh] p-5 flex items-center justify-center
border-lime-300 border-2 rounded-xl
  hover:border-2 hover:border-lime-300 hover:rounded-xl 
  hover:shadow-[0_0_5px_2px_#00ff00]  
  
  transition-shadow duration-300"
ref={textdiv}
>


<h1 ref={texth} className=" text-[130px] text-center leading-34 overflow-hidden">{
  
  text.split("").map((t,i)=>{
    return(
      <span key={i} className="overflow-hidden inline-block">

<span className="inline-block">{t}</span>


      </span>
    )
  })
  
  
  }</h1>


</div>

<h1 className="font-light text-[12px]">PRESENTED BY UBIT</h1>

</div>



<About id="about"/>

<Ready/>

<Event id="event"/>

<Sponsor id="sponsor"/>

<Footer id="contact" />


    </div>
  )
}