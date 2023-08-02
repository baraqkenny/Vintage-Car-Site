const carDetails = [
  {
    id: 1,
    img: "./benz.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 2,
    img: "./none.jpg",
    title: "BMW 2020",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "automatic",
  },
  {
    id: 3,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 4,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 5,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 6,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 7,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
  {
    id: 8,
    img: "./none.jpg",
    title: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
  },
 
];

// Rendering The Car Detail Dynamically To The DOM
function carDetailsContainer() {
  const sliderContainer = document.querySelector('.slider-container');
  
  // Iterating Through The Car Details

carDetails.map(carDetail => {
  sliderContainer.innerHTML += `<div class='slider-content'>
                                <img src=${carDetail.img} alt=${carDetail.title}/>
                            </div>`
});

}
carDetailsContainer()

let currentIndex = 0;
const images = document.querySelectorAll(".slider-content img");
const totalImages = images.length;

// Display Image on The Browser

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

// Show Next Image 
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

// Show Previous Image
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

const prevButton = document.querySelector(".bxs-chevron-left");
const nextButton = document.querySelector(".bxs-chevron-right");

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
