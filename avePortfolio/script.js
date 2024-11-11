// Initialize Lenis and for smooth scrolling.
function lenis(){
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
    
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
}
lenis();

//Loader animation
function loader(){
    let tl = gsap.timeline();

    tl.from("#loader h3",{
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 2
    });

    tl.to("#loader h3",{
        x: -10,
        stagger: 0.1,
        duration: 1,
        opacity: 0
    });

    tl.to("#loader",{
        opacity: 0
    });

    tl.to("#loader",{
        display: "none"
    });
    
}
loader();

//Navigation

//landing-page animation content
function landingpageAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#landing-page > h1",
            scroller:"body",
            start: "top 27%",
            end: "top 0",
            scrub:3
        }
    });

    tl.to("#landing-page > h1",{
        x: -100
    },"link");

    tl.to("#landing-page > h2",{
        x: 100
    },"link");

    tl.to("#landing-page > video",{
        width: "65%"
    },"link");
}
landingpageAnimation();

//showing the skill blur pop-up animation.
function skillshowcase(){
    let tl1 = gsap.timeline({
        scrollTrigger:{
            trigger: "#skill-showcase",
            start: "50% 50%",
            end: "150% 50%",
            pin: true,
            scrub: 1
        }
    });
    
    tl1.to("#java",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#mongodb",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#photoshop",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#php",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#react",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#backend",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#express",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#html",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#logo-design",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#mysql",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#javascr",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
    .to("#css",{
        opacity: "1",
        filter: "blur(0px)",
        delay: "-0.2"
    })
}
skillshowcase();

function marqueAnimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
            gsap.to("#marque",{
                transform: 'translateX(-200%)',
                duration: 8,
                repeat: -1,
                ease: 'none'
            });

            gsap.to("#marque img",{
                rotate: 180
            });

        }else{
            gsap.to("#marque",{
                transform: 'translateX(0%)',
                duration: 8,
                repeat: -1,
                ease: 'none'
            });

            gsap.to("#marque img",{
                rotate: 0
            });
        }
    });
}
marqueAnimation();

// string animation
function stringAnimation(){

  let initialPath = `M 10 175 Q 600 175 1190 175`  // this value makes the svg straight.
  let finalPath = `M 10 175 Q 600 175 1190 175`

  let stringData = document.querySelector("#playString");

  stringData.addEventListener("mousemove",(dets)=>{
      initialPath = `M 10 175 Q ${dets.x} ${dets.y} 1190 175`
    //   console.log(`${dets.x} ${dets.y}`) to know the position value of x and y axis.

      gsap.to("svg path",{
        attr: {d:initialPath},
        duration: 0.4,
        ease: "power3.out"
      });
  });

  stringData.addEventListener("mouseleave",(dets)=>{
    gsap.to("svg path",{
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
      });
});

}
stringAnimation();

function fullnav(){
    let menu = document.querySelector("#menu");
    let close = document.querySelector("#CLOSE i");
 
    let tl = gsap.timeline();
 
    tl.to("#nav",{
         top: "0",
         duration: 1.2,
         ease: "power2"
    });

    tl.from("#nlink .navlink",{
        y: 100,
        duration: 0.5,
        stagger: 0.1,
        opacity: 0
    });

    tl.to("#CLOSE i",{
        opacity: 1
    });

    tl.pause();

    menu.addEventListener("click",()=>{
        tl.play();
    });

    close.addEventListener("click",()=>{
        tl.reverse();
    });

 }
 fullnav();