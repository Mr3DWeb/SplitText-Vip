import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// Helper Function
/**
 * @param {string} btnHover
 * @param {gsap.TweenVars} hoverAnimation
 */
function HoverSpAnimation(btnHover,hoverAnimation={}){
  const btn = document.querySelector(btnHover);
  const spHover = new SplitText(btn,{type:"chars",tag:"span"});
  const hoverTL = gsap.timeline({paused:true , defaults:{immediateRender: false}});
  hoverTL.from(spHover.chars,hoverAnimation)
  btn.addEventListener('mouseenter', () => {
    if (!hoverTL.isActive()) {
      hoverTL.restart();
    }
  })

}

window.addEventListener('load',()=>{
  // Enter Animation
  // Hover Animation 1
  HoverSpAnimation('#Hover-btn1',{
    opacity:0,
    stagger:0.05,
    ease:"back(1.2)",
    y:30,
    rotation:-20,
  });
  // Hover Animation 2
  HoverSpAnimation('#Hover-btn2',{
    opacity:0,
    ease:"back(2)",
    stagger:{
      amount:0.3,
      from:"center"
    },
    y:-30,
    duration:0.3
  });
  // Hover Animation 3
  HoverSpAnimation('#Hover-btn3',{
    opacity:0,
    ease:"back.out(1.7)",
    stagger:0.01,
    y:50,
    rotation:90,
    duration:1,
    transformOrigin:"0% 100%"
  });
})




// const splitWords = new SplitText("h2",{type:"words"})

// const spWords = gsap.from(splitWords.words,{
//   opacity:0,
//   stagger:0.2,
//   ease:"back(4)",
//   y:50,
//   rotation:-40
// })

// const splitLine = new SplitText("p",{type:"lines"})
// const spLine = gsap.from(splitLine.lines,{
//   opacity:0,
//   stagger:0.5, 
//   rotationX:-90,
//   rotationY:45,
//   duration:1.5,
//   transformOrigin:"50& 50% -150&"
// })
