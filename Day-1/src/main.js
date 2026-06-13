import './style.css'
import { gsap } from "gsap";


const box = document.querySelector(".box");

gsap.fromTo(".box",{
  x:300,
   
},{
  duration:4,
  delay:0.9,
  x:700,
  y:200
})




// const obj = {
//   a:0,
// }

// gsap.to(obj,{
//   a:100,
//   onUpdate:()=>{
//     console.log(obj.a)
//   }
// })



// gsap.set(".box",{
//   x:400,
//   y:400,
//   backgroundColor:"yellow",
//   borderRadius:"100%",
//   duration:4,
//   delay:1
// })