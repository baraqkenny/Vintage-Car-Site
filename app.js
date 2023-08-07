const carDetails = [
  {
    id: 1,
    img: "./benz.jpg",
    model: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
    price: 40000
  },
  {
    id: 2,
    img: "./none.jpg",
    model: "BMW 2020",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "automatic",
    price: 40000
  },
  {
    id: 3,
    img: "./none.jpg",
    model: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    price: 40000
  },
  {
    id: 4,
    img: "./none.jpg",
    model: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
    price: 40000
  },
  {
    id: 5,
    img: "./none.jpg",
    model: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
    price: 40000
  },
  {
    id: 6,
    img: "./none.jpg",
    model: "Rolls Royce 1960",
    interiorColor: "Gray",
    exteriorColor: "Black",
    type: "Manual",
    price: 40000
  },
];




// Rendering The Car Details Dynamically To The DOM
function carDetailsContainer() {
  
  // Iterating Through The Car Arrays..

carDetails.map(carDetail => {
   const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML += `
                            <div class='car-info-content'>
                            <div class='model-price'>
                            <p>${carDetail.model}</p>
                            <p>$${carDetail.price}</p>
                            </div>
                                <img src=${carDetail.img} alt=${carDetail.title}/> 
                             <p>${carDetail.type}</p>
                             <button onclick="displayCarDetails(${carDetail.id})">view details</button>
                             </div>
                            `;
                      }
)};



carDetailsContainer()

 function viewCarDetails() {
   const carInfoContent = document.querySelectorAll(".car-info-content");
   for (let i = 0; i < carInfoContent.length; i++) {
     carInfoContent[i].addEventListener("click", () => {
       const mainContent = document.querySelector(".main-content");
       const carDetailsBox = document.createElement("div");
       carDetailsBox.classList.add("car-details-box");
       mainContent.appendChild(carDetailsBox);

       // Display the car detail box
       carDetailsBox.style.display = "block";
       // if(carDetailsBox.style.display === 'block'){
       //   document.body.removeEventListener('click', ()=> {});
       // }

       // Show Car Content
       ;
     });
   }
 }

 viewCarDetails();

 function displayCarDetails(carId) {
   const selectedCar = carDetails.find((car) => car.id === carId);
   console.log(selectedCar)
  //  if(selectedCar){
  //   document.querySelector('.car-details-box').innerHTML += `<img src=${carDetail.img}>`
  //  }
 }
