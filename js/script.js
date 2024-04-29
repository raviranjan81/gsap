gsap.to('#box',{
    y:150,
    x:150,
    duration:2,
    ease:'power2.inOut',
    onComplete:()=>{
        console.log('animation complete')
    }
})

gsap.from('#box2',{
    y:150,
    x:150,
    duration:2,
    scale:1,
    backgroundColor:"blue",
    rotate:360,
    opacity:0,
    repeat:-1,
    borderRadius:"50%",
    ease:'power2.inOut',
    onComplete:()=>{
        console.log('animation complete')
    }
})

gsap.from('#heading-h h1',{
    duration:2,
    x:-150,
    repeat:-1,
    yoyo:true,
    opacity:0,
    ease:'power2.inOut',
    stagger:0.5
})

gsap.from('#box3',{
    y:50,
    opacity:0,
    duration:1,

})
gsap.from('#box4',{
    y:50,
    opacity:0,
    duration:2,
})
gsap.from('#box5',{
    y:50,
    opacity:0,
    duration:4,
})

var tl=gsap.timeline()

tl.from('#ravi',{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
})

tl.from('#part2 h4',{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.5
})