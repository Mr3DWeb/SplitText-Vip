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

/**
 * @param {string} contentWarpper
 * @param {gsap.TweenVars} lineAnimation
 */
function LineSpAnimation(contentWarpper,lineAnimation){
  const warpper = document.querySelector(contentWarpper);

  const paragraf = warpper.querySelector('p');
  const play = warpper.querySelector('.play');
  const stop = warpper.querySelector('.stop');
  const reverse = warpper.querySelector('.reverse');

  const spLine = new SplitText(paragraf,{type:"lines",tag:"p"});
  const lineTL = gsap.timeline({paused:true , defaults:{immediateRender: false}});
  lineTL.from(spLine.lines,lineAnimation);

  play.addEventListener('click',()=> {
    if(!lineTL.isActive()){
      lineTL.restart();
    }
  });
  stop.addEventListener('click',()=> lineTL.pause());
  reverse.addEventListener('click',()=> lineTL.reverse());
}


window.addEventListener('load',()=>{
  // Enter Animation
  const enterTL = gsap.timeline({defaults:{direction:2,opacity:0}});
  enterTL
        .from("section div",{stagger:0.1})
        .from(".counter",{rotationY:360,transformOrigin:"50% 50%",stagger:0.4,scale:3})
        .from("footer",{y:30 , ease:"back"})

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

  //Line Animation 1 
  LineSpAnimation('#lineAnimation1',{
  opacity:0,
  stagger:0.1, 
  rotationX:-90,
  rotationY:45,
  duration:1.5,
  transformOrigin:"50& 50% -150&"
  });
  //Line Animation 2 
  LineSpAnimation('#lineAnimation2',{
  opacity:0,
  stagger:0.1, 
  duration:1,
  y:80,
  scale:0.6
  });
  //Line Animation 3 
  LineSpAnimation('#lineAnimation3',{
  opacity:0,
  y:100,
  skewY:7,
  filter:"blur(10px)",
  transformOrigin:"0% 100%",
  stagger:0.1,
  duration:0.8,
  ease:"power4.out"
  });

})