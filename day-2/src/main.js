import './style.css'
import { gsap } from "gsap";

const box1 = document.querySelector(".box1");



// gsap.set(box1,{
//   x:-300
// })

gsap.to(box1,{
  x:500,
  delay:1.4,
  duration:2.1,
   ease: "power2.inOut",
  // onStart:()=>{
  //   console.log("animation is starting")
  // },

  // onComplete:()=>{
  //   console.log("completed animation");
  //   gsap.from(box1,{
  //     x:0,
  //     duration:2,
  //     ease:"power2.inOut",
  
    
  //   })
  // }

  // onUpdate:()=>{
  //   console.log("update the animation")
  // }

})