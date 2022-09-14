import { CountUp } from './modules/countUp.min.js';
import ItcCollapse from "./modules/collapse.js";
import "./modules/smooth-scroll.js";


// banner
let buttonClose = document.querySelector('.banner__button-close');
let banner = document.querySelector('.banner');
buttonClose.onclick = () => {
    banner.remove();
    let header = document.querySelector('.header');
    let unlock = document.querySelector('.unlock');
    unlock.style.paddingTop = header.getBoundingClientRect().bottom + 30 + 'px';
}

// block 
if (document.documentElement.clientWidth > 768) {
    const block = document.querySelector('.block');
    const blockImages = document.querySelector('.block__images');
    block.addEventListener('mouseenter', function () {
        let duration = 0;
        for (let index = 4; index < blockImages.childElementCount; index++) {
            blockImages.children[index].style.opacity = 1;
            duration += 0.1;
            blockImages.children[index].style.transition = `.3s ${duration}s`
        }
    })
    block.addEventListener('mouseleave', function () {
        let duration = 0;
        for (let index = 9; index > 3; index--) {
            blockImages.children[index].style.opacity = 0;
            duration += 0.1;
            blockImages.children[index].style.transition = `.3s ${duration}s`
        }
    })
}

// checkbox

let checkboxBlock = document.querySelector('.js-checkbox');

checkboxBlock.addEventListener('click', function (event) {
    checkboxBlock.classList.toggle('active');
})

// CountUp
let numberCountUp_1 = new CountUp('myTarget1', 47572397);
let number_1 = document.getElementById('myTarget1'),
    numberTop_1 = number_1.getBoundingClientRect().top; 

let numberCountUp_2 = new CountUp('myTarget2', 183241);
let numberCountUp_3 = new CountUp('myTarget3', 257518389);
let numberCountUp_4 = new CountUp('myTarget4', 19.24);
let number_2 = document.getElementById('myTarget2'),
    numberTop_2 = number_2.getBoundingClientRect().top; 


window.addEventListener('scroll', function onScroll1() {
        if (window.pageYOffset > numberTop_1 - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll1);
                numberCountUp_1.start();            
        }
})
window.addEventListener('scroll', function onScroll2() {
    if (window.pageYOffset > numberTop_2 - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll2);
        numberCountUp_2.start();            
        numberCountUp_3.start();
        numberCountUp_4.start();
    }
})

//  Stake
let stakeCountUp_1 = new CountUp('stake-countUp-1', 30);
let stakeCountUp_2 = new CountUp('stake-countUp-2', 2600);
let stakeCountUp_3 = new CountUp('stake-countUp-3', 1800000);
let stakeNumber_1 = document.getElementById('stake-countUp-1'),
    stakeNumberTop_1 = stakeNumber_1.getBoundingClientRect().top; 

window.addEventListener('scroll', function StakeCountUp() {
        if (window.pageYOffset > stakeNumberTop_1 - window.innerHeight / 2) {
            this.removeEventListener('scroll', StakeCountUp);
            stakeCountUp_1.start();            
            stakeCountUp_2.start();
            stakeCountUp_3.start();
        }
})
    
// Untility
let untility_target = document.querySelector('.js-utility-1'),
    untility_targetTop = untility_target.getBoundingClientRect().top; 
let utility_blocks = document.querySelectorAll('.untility__card-block');
    window.addEventListener('scroll', function untility() {
        if (window.pageYOffset > untility_targetTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', untility);
            for (const utility_block of utility_blocks) {
                utility_block.classList.add('active');
            }
            
        }
    })
    
let untility_target_2 = document.querySelector('.js-utility-2'),
    untility_targetTop_2 = untility_target_2.getBoundingClientRect().top; 
let utility_blocks_2 = document.querySelector('.js-utility-dots');
    window.addEventListener('scroll', function untility_2() {
        if (window.pageYOffset > untility_targetTop_2 - window.innerHeight / 2) {
            this.removeEventListener('scroll', untility_2);            
                utility_blocks_2.classList.add('active');
        }
})

let untility_target_3 = document.querySelector('.js-utility-lighters'),
    untility_targetTop_3 = untility_target_3.getBoundingClientRect().top; 
    window.addEventListener('scroll', function untility_3() {
        if (window.pageYOffset > untility_targetTop_3 - window.innerHeight / 2) {
            this.removeEventListener('scroll', untility_3);            
            untility_target_3.classList.add('active');
        }
})


// Support


let supportCountUp_1 = new CountUp('support-countUp-1', 4824884);
let supportCountUp_2 = new CountUp('support-countUp-2', 63844);
let supportNumber_1 = document.querySelector('.support-target'),
    supportNumberTop_1 = supportNumber_1.getBoundingClientRect().top; 

window.addEventListener('scroll', function SupportCountUp() {
        if (window.pageYOffset > supportNumberTop_1 - window.innerHeight / 2) {
            this.removeEventListener('scroll', SupportCountUp);
            supportCountUp_1.start();
            supportCountUp_2.start();
        }
})

// Questions
document.addEventListener('click', function (event) {
    if (event.target.closest('.accordion__header')) {
        const el = event.target.closest('.accordion__header').parentElement.querySelector('.collapse');
        const collapse = new ItcCollapse(el,300);
        event.target.closest('.accordion__item').classList.toggle('_active');
        collapse.toggle();
    }
})
// burger 
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__menu');
burger.onclick = function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('overflow');
}
document.body.addEventListener('click', function (event) {
    if (nav.classList.contains('active')) {
        if (event.target.closest('a')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('overflow')
        }            
    }
})

