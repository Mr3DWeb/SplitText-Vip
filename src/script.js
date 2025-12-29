import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


gsap.registerPlugin(SplitText);
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
