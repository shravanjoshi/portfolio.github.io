document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});


const professions = ["Web Developer", "Competitive Programmer"];
const professionElement = document.getElementById("profession");

let currentProfessionIndex = 0;
let charIndex = 0;

function typeProfession() {
  const currentProfession = professions[currentProfessionIndex];
  if (charIndex < currentProfession.length) {
    professionElement.textContent += currentProfession[charIndex];
    charIndex++;
    setTimeout(typeProfession, 100); // Typing speed
  } else {
    setTimeout(deleteProfession, 1000); // Delay before deleting
  }
}

function deleteProfession() {
  const currentProfession = professions[currentProfessionIndex];
  if (charIndex > 0) {
    professionElement.textContent = currentProfession.slice(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteProfession, 100); // Deleting speed
  } else {
    currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    setTimeout(typeProfession, 500); // Delay before typing the next profession
  }
}

// Start the typing effect
typeProfession();


const downloadButton = document.querySelector(".btn");

// Path to your resume file
const resumeFilePath = "shravan's_resume.pdf"; // Replace with the actual path to your resume file

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = resumeFilePath;
  link.download = "shravan's_resume.pdf"; // Suggested name for the downloaded file
  link.click();
});


$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });