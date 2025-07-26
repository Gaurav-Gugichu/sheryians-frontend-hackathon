(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

let h1 = document.querySelector(".heading h1")
let h1Text = h1.textContent
let spiltedText = h1Text.split("")
let clutter = ""
spiltedText.forEach((dets) => {
    clutter += `<span>${dets}</span>`
})
h1.innerHTML = clutter
let sideh1 = document.querySelector(".side-text h1")
let sideText = h1.textContent
let spiltedside = h1Text.split("")
let sideclutter = ""
spiltedside.forEach((dets) => {
    sideclutter += `<span>${dets}</span>`
})
sideh1.innerHTML = sideclutter
let footh1 = document.querySelector(".footer h1")
let footText = h1.textContent
let footside = h1Text.split("")
let footclutter = ""
footside.forEach((dets) => {
    footclutter += `<span>${dets}</span>`
})
footh1.innerHTML = clutter
gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".page-2",
        start: "20% top",
        end: "bottom top",
        scrub: 1,
    },
    xPercent: -300
})


let tl = gsap.timeline({
    delay: .3
})
tl.from(".footer h1 span", {
    opacity: 0,
    stagger: .2,
    duration: .5,
})
tl.from('.footer h3', {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
tl.from(".page-1", {
    opacity: 0,
    ease: Power4
})

tl.from(".navbar", {
    y: -400
})

tl.from(".lists h4:nth-child(odd)", {
    y: 400,
    stagger: .3,
    duration: .7
}, 'a')
tl.from(".lists h4:nth-child(even)", {
    y: -400,
    stagger: .3,
    duration: .7
}, 'a')

tl.from(".heading h1 span", {
    opacity: 0,
    stagger: .2,
    duration: .5,
}, 'c')
tl.from(".side-text h1 span", {
    opacity: 0,
    stagger: .2,
    duration: .5,
}, 'c')
tl.from(".page-1 h3:nth-child(odd)", {
    y: 400,
    stagger: .3,
    duration: .5
}, 'b')
tl.from(".page-1 h3:nth-child(even)", {
    y: -400,
    stagger: .3,
    duration: .5
}, 'b')
tl.to(".page-1 button", {
    opacity: 1,
    duration: .5
})
tl.from(".absolute", {
    x: 550,
    duration: .3
})
let video = document.querySelector('.video video')
gsap.to(video, {
    scrollTrigger: {
        trigger: video,
        start: '5% top',
        end: 'bottom top',
        scrub: 1
    },
    onStart: () => {
        video.play()
    }
})
gsap.to('.video', {
    scrollTrigger: {
        trigger: '.video',
        start: '3% top',
        end: 'bottom top',
        scrub: 1,
        pin: true
    },
})
gsap.from(".back h1", {
    scrollTrigger: {
        trigger: ".back h1",
        start: "top 40%",
        end: "bottom 80%",
        scrub: 1,
    },
    y: 200,
    stagger: .3,
    duration: .3
})
gsap.to(".front", {
    scrollTrigger: {
        trigger: ".page-4",
        start: "80% top",
        end: "top top",
        scrub: 1,
    },
    left: 0,
    duration: .2,
})

gsap.to(".page-4", {
    scrollTrigger: {
        trigger: ".page-4",
        start: "top top",
        end: "bottom top",
        pin: true
    }
})

let crsr = document.querySelector(".cursor")



document.querySelector('.main').addEventListener('mousemove', (dets) => {
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
        opacity: 1

    })
})

document.querySelector('.mix').addEventListener('mousemove', () => {
    gsap.to(crsr, {
        scale: 6
    })
})
document.querySelector('.mix').addEventListener('mouseleave', () => {
    gsap.to(crsr, {
        scale: 1
    })
})

let arr = [
    {
        cardImg: "./images/1.jpg",
        title: "ColorFit Pulse 4",
        subTitle: "1.92 Amoled BT Calling",
        price: "2,499",
        strike: "5,999",
        rating: "4.5"
    },
    {
        cardImg: "./images/2.webp",
        title: "Buds Xero",
        subTitle: "Adaptive ANC",
        price: "4,499",
        strike: "6,999",
        rating: "4.9"
    },
    {
        cardImg: "./images/3.png",
        title: "ColorFit Pro 5 Max AMOLED",
        subTitle: "1.96 Amoled ColorFit VO Max",
        price: "4,499",
        strike: "9,999",
        rating: "4.9"
    },
    {
        cardImg: "./images/4.jpeg",
        title: "Buds Combat Z",
        subTitle: "gaming with ultra low latency",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "./images/5.png",
        title: "Luna Rings",
        subTitle: "Buy the best smart ring - Luna ring",
        price: "19,999",
        strike: "21,999",
        rating: "4.9"
    },
    {
        cardImg: "./images/6.jpg",
        title: "One tru bass",
        subTitle: " dual pairing, voice assistant, and more.",
        price: "1,299",
        strike: "3,999",
        rating: "5.0"
    },
    {
        cardImg: "./images/7.jpg",
        title: "Vibe 2 5Wl",
        subTitle: " Bluetooth with Built-in Mic",
        price: "1,499",
        strike: "3,499",
        rating: "3.0"
    },
    {
        cardImg: "./images/8.webp",
        title: "LaterCase Mettle Smart Watch",
        subTitle: "HD display, stainless steel finish",
        price: "2,199",
        strike: "7,999",
        rating: "5.0"
    },
]
let clutetr2 = ""

arr.forEach((dets) => {
    clutetr2 += ` <div class="card">
    <div class="card-img">
        <img src=${dets.cardImg} alt="">
    </div>
    <div class="card-details">
        <h1>${dets.title}</h1>
        <h3>${dets.subTitle}</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="part-1" style="display: flex; align-items: center; gap: 1rem;">
                <h1>₹ ${dets.price}</h1>
            <strike>${dets.strike}</strike>
            </div>
            <div class="part-2">
                <i class="ri-star-s-fill"></i>
                <h3>${dets.rating}</h3>
            </div>
        </div>
    </div>
</div>`
})
document.querySelector(".card-container").innerHTML = clutetr2


gsap.to(".front-6", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    '--clip': '100%',
    duration: .3
})

gsap.from(".form", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    x: -200,
    duration: .1,
    opacity: 0
})


gsap.to(".page-6", {
    scrollTrigger: {
        trigger: '.page-6',
        start: 'top top',
        end: 'bottom top',
        pin: true,
    },
})

document.querySelector(".form").addEventListener('mouseenter', () => {
    gsap.to(crsr, {
        scale: 0
    })
})
document.querySelector(".form").addEventListener('mouseleave', () => {
    gsap.to(crsr, {
        scale: 1
    })
})
document.querySelector('.form button').addEventListener('click', (e) => {
    e.preventDefault()
})
function swiper(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
}

let input = document.querySelector('.input input')
let chatBox = document.querySelector('.chat-box')
let send = document.querySelector('.send')

send.addEventListener('click', () => {

    if (input.value === "") {
        alert("write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value
        chatBox.appendChild(li)
        input.value = ""
    }
})




let menu = document.querySelector('.button button h1')
function update() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        menu.innerHTML = 'Menu';
    } else {
        menu.innerHTML = 'Shop Now';
    }
}
update()
window.addEventListener('resize', update)
let flag = 0
let full = document.querySelector('.fullscreen')
let fullh1 = document.querySelectorAll('.fullscreen h1');
let h1content = fullh1.textContent;
menu.addEventListener('click', () => {
    if (flag === 0) {
        gsap.to(full, {
            top: 0
        })
        flag = 1
    }
    else {
        gsap.to(full, {
            top: `-100%`
        })
        flag = 0
    }
})
menu.addEventListener('click', () => {
    fullh1.forEach((h1) => {
        gsap.from(h1, {
            y: 200,
            duration: 1
        });
    });
});
swiper()