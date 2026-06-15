import './style.css'
import { gsap } from "gsap";





let count = 0;
const loaderCount = document.querySelector(".loadingClass > h1");



let st = setInterval(()=>{
  count++;
  loaderCount.textContent = `${count}%`
  if(count===100){
     clearInterval(st);
     landingPageAnimatie();
  }
},40)




function landingPageAnimatie(){
  const tl = gsap.timeline();


  tl.to(loaderCount,{
    opacity:0,
    duration:1.6,
    ease:"Power3.out"
  })

  .to(".loader",{
    yPercent:-100,
    duration:1.2,
    ease:"Power3.out"
  },"-=0.6")
  .from(".bgImage img",{
    scale:1.2,
    duration:1.3,
    ease:"expo.out"
  },"-=0.4")

  .from(".heading h1",{
    yPercent:100,
    duration:1.2,
    ease:"expo.out",
    opacity:0,
    
  },"-=0.5")

  .from(".subheading h2",{
    yPercent:100,
    duration:1.2,
    ease:"expo.out",
    opacity:0
  
  },"-=0.4")


}







