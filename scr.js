document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".text2",{
    width:"42%",
    duration:4,
    delay:1
  })


  gsap.to(".img1",{
    y:-200,
    duration:4,
    delay:1,
    ease: "sine.inOut",
    repeat:-1

  })
    gsap.to(".img3",{
    y:-200,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

    gsap.to(".img0",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

    gsap.to(".img2",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

   gsap.to(".img9",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

   gsap.to(".img8",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

    gsap.to(".img6",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

    gsap.to(".img4",{
    y:250,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })


   gsap.to(".img7",{
    y:-200,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

   gsap.to(".img5",{
    y:-200,
    duration:4,
    ease: "sine.inOut",
    repeat:-1,
    delay:1
  })

 });

 
let a =  fetch('https://api.escuelajs.co/api/v1/products')
let b = await a.json();


  function zero(){

 }