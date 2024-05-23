$(function(){
    setTimeout(function(){
        $(".animation").addClass("animationAfter");
        $(".animationDos").addClass("animationDosAfter");
    }, 700);
});

 // Function to check if an element is in the viewport
 function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove animationN1 class based on viewport visibility
function toggleAnimationN1() {
    var targetSection = document.getElementById("target-section2");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
    } else {
        targetSection.classList.remove('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

// Run the function initially to check the initial state
toggleAnimationN1();



function toggleAnimationN4() {
    var targetSection4 = document.getElementById("target-section5");
    if (isElementInViewport(targetSection4)) {
        targetSection4.classList.add('animationN1');
    } else {
        targetSection4.classList.remove('animationN1');
    }
}

window.addEventListener("scroll", toggleAnimationN4);
window.addEventListener("resize", toggleAnimationN4);

// Run the function initially to check the initial state
toggleAnimationN4();




function toggleAnimationN2() {
    var targetSection2 = document.getElementById("target-section3");
    if (isElementInViewport(targetSection2)) {
        targetSection2.classList.add('animationN2');
    } else {
        targetSection2.classList.remove('animationN2');
    }
}

window.addEventListener("scroll", toggleAnimationN2);
window.addEventListener("resize", toggleAnimationN2);

// Run the function initially to check the initial state
toggleAnimationN2();





function toggleAnimationN3() {
    var targetSection3 = document.getElementById("target-section4");
    if (isElementInViewport(targetSection3)) {
        targetSection3.classList.add('animationN2');
    } else {
        targetSection3.classList.remove('animationN2');
    }
}

window.addEventListener("scroll", toggleAnimationN3);
window.addEventListener("resize", toggleAnimationN3);

// Run the function initially to check the initial state
toggleAnimationN3();


