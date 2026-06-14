import './style.css'
import { gsap } from "gsap";



// const box = document.querySelector(".box");


// gsap.to(".box", {
//   x:1200,
//   delay:1,
//   duration:2,
//   ease:"expo.inOut",
//   stagger:{
//     each:0.1,
//     from:"edges"
//   }
// })





// gsap.from("span",{
//   yPercent:100,
//   duration:.9,
//   opacity:0,
//   stagger:{
//     each:0.2,
//     from:"center"
//   }
// })






/** timeline */

// gsap.to(".box1",{
//   x:700,
//   delay:1,
//   duration:1.5,
//   ease:"expo.inOut"
// })


// gsap.to(".box2",{
//   x:700,
//   duration:1.5,
//   delay:2.5,
//   ease:"expo.inOut"
// })


const tl = gsap.timeline();

tl.to(".box1",{
    x:700,
  delay:1,
  duration:1.5,
  ease:"expo.inOut"
})
.to(".box2",{
    x:700,
  duration:1.5,
  ease:"expo.inOut"
},"sourav")
.to(".box3",{
    x:700,
  duration:1.5,
  ease:"expo.inOut"
})
.to(".box4",{
    x:700,
  duration:1.5,
  ease:"expo.inOut"
},"sourav+=0.3")