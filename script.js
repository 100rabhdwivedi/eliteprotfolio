var menu = document.querySelector('.menu');


var tl = gsap.timeline();
tl.to('.menu .line1',{
    rotate:45,
    marginBottom:-2,
    backgroundColor:"white"

},"a")
tl.to('.menu .line2',{
    rotate:-45,
    backgroundColor:"white"
},"a")
tl.to('.nav',{
    color:"white"
})
tl.to('.topnav',{
    top:0,
}
)

tl.to(".text1",{
    y:0,
    duration:1,
},'c')

tl.to(".cross",{
    width:"28rem",
    duration:0.6,
    delay:0.5,
},'c')
tl.to(".text2",{
    y:0,
    duration:1,
    delay:0.2

},'c')
tl.to(".text3",{
    y:0,
    duration:1,
    delay:0.4

},'c')

tl.pause();

var flag = 0;
menu.addEventListener("click", () => {
    if(flag == 0){
        tl.play();
        flag =1 ;
    }
    else{
        tl.reverse();
        flag = 0 ;
    }
});

let mm =gsap.matchMedia();

mm.add("(max-width:600px)",()=>{
    tl.to(".cross",{
        width:"15rem",
        duration:0.6,
        delay:0.5,
    })
})