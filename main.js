/*=============== SHOW MENU ===============*/
var navMenu = document.getElementById("nav-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when any nav-link is clicked, it will remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const scrollHeader = document.getElementById("header");
  // when the page scrolls more than 50vh, add scroll header to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight; // Corrected typo
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    // Check if the scroll position is within the current section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is higher than 350 viewport height, add the show-scroll class to the scroll class to the a tag with the scrollup 
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :  scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home-info, .footer-container, .footer-content')
sr.reveal('.home-image', {delay:700, origin: 'bottom'})
sr.reveal('.logo-img, .program-cards,.pricing-cards ', {interval: 100})
sr.reveal('.choose-content, .calculate-img', {origin: 'right'})
sr.reveal('.choose-image , .calculate-content', {origin: 'left'})
sr.reveal('.social-link', {origin: 'bottom'})



/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  // check if the fields have a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    // Add or remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // show message
    calculateMessage.innerHTML = "Fill in the Height and Weight";
    setTimeout(() => {
      calculateMessage.innerHTML = "";
    }, 3000);
  } else {
    //  BMI Formula
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    // Show your health status
    if (bmi < 18.5) {
      // Add color and display message
      calculateMessage.classList.add("color-green");
      calculateMessage.innerHTML = "Your BMI is " + bmi + " and you are skinny";
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.innerHTML =
        "Your BMI is " + bmi + " and you are healthy";
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.innerHTML =
        "Your BMI is " + bmi + " and you are overweight";
    }

    // To clear the input field
    calculateKg.value = "";
    calculateCm.value = "";

    // Remove message four seconds
    setTimeout(() => {
      calculateMessage.innerHTML = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (contactUser.value.trim() === "") {
    // Add and remove color
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "You must enter your email";

    // Remove message after three seconds
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    // Send the email using EmailJS
    emailjs.sendForm("service_vjen0l3", "template_gv0m1ua", "#contact-form")
      .then((response) => {
        // Show message and add color
        contactMessage.classList.remove("color-red");
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "You registered successfully";

        // Remove message after three seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      }, (error) => {
        // Display the error message
        contactMessage.classList.remove("color-green");
        contactMessage.classList.add("color-red");
        contactMessage.textContent = "Oops! Something went wrong.";
        console.error("EmailJS Error:", error);
      });

    // To clear the input field
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
