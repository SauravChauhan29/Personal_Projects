const signin = document.querySelector(".signin-tag")
const signup = document.querySelector(".signup-tag")
const swithdivsudo = document.querySelector(".switch-div").classList
// console.log(swithdivsudo)
let signin_status = true

// Event listener for "signin"

const signbg = document.querySelector(".sign-bg")



signin.addEventListener("click", () => {
    if (!signin_status) {
        console.log("Switching to Sign In");
        flaptl.reverse();
        signin_status = true;
        signbg.style.left = "0%"
    }
});

// Event listener for "signup"
signup.addEventListener("click", () => {
    if (signin_status) {
        console.log("Switching to Sign Up");
        flaptl.play();
        signin_status = false;
        signbg.style.left = "51%"
    }
});

const flaptl = gsap.timeline({ paused: true });


// Move .bggg and .bggg2 simultaneously
flaptl.to(".rotator .bggg", {
    x: "-16%",
    duration: 0.3,
    ease: "power1.inOut"
}, "start")
    .to(".rotator .bggg2", {
        x: "16%",
        duration: 0.3,
        ease: "power1.inOut"
    }, "start")
    // Move form elements with stagger effect
    .to(".signin-container .form-wrapper .form-group, .checkbox, .btn", {
        x: "-120%",
        duration: 1,
        opacity: 0,
        stagger: 0.05
    }, "formMove")
    // Move another set of form elements
    .to(".signin-container .form-wrapper2 .form-group, .checkbox, .btn", {
        x: "-120%",
        duration: 1,
        opacity: 1,
        stagger: 0.05
    }, "formMove")
// After the timeline finishes, reverse the animation
flaptl.to(".rotator .bggg", {
    x: "-0.2%",
    duration: 0.3,
    ease: "power1.inOut"
}, "aaa")

    .to(".rotator .bggg2", {
        x: "0.2%",
        duration: 0.3,
        ease: "power1.inOut"
    }, "aaa")
    .to(".switch-div::before", {
        x: "50%",
        duration: 0.5,
        ease: "power1.inOut"
    });// Run the reverse simultaneously

