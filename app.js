let carDetails = [
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
                                <div class="car-icons">
                                <div class="car-icons-one">
                                 <i style="background-color: #30233b48; padding: 10px; border-radius: 10px; color: purple;" class='bx bx-gas-pump'></i><br>
                                 <p>Gas</p>
                                </div>
                                  <div class="car-icons-two">
                                 <i style="background-color: #30233b48; padding: 10px; border-radius: 10px; color: pink;" class='bx bx-gas-pump'></i>
                                 <p>pump</a>
                                </div>
                                   <div class="car-icons-three">
                                 <i style="background-color: #30233b48; padding: 10px; border-radius: 10px; color: yellow;" class='bx bx-car'></i>
                                 <p>speed</p>
                                </div>
                                </div>
                             <button class="car-details-btn" onclick="displayCarDetails(${carDetail.id})">view details</button>
                             </div>
                            `;
                      }
)};



carDetailsContainer()

 function viewCarDetails() {
   const carDetailsBtn= document.querySelectorAll(".car-details-btn");
   for (let i = 0; i < carDetailsBtn.length; i++) {
     carDetailsBtn[i].addEventListener("click", () => {
       const carDetailsBox = document.querySelector('.car-details-box')
       // Display the car detail box
       carDetailsBox.style.display = "block";

      // // Show Loading Animation
      //  const loading = document.getElementById('loading');
      //   setTimeout(()=> {
      //     loading.textContent = null;
      //   },2000)
     });
   }
 }

 viewCarDetails();

 function displayCarDetails(carId) {
   // Show Loading Animation
   const loading = document.getElementById("loading");
   setTimeout(() => {
    //  loading.textContent = null;
   }, 2000);

   // After 2 seconds, display the car details result.
  //  setTimeout(() => {
  //    const selectedCar = carDetails.find((car) => car.id === carId);
  //    console.log(selectedCar);
  //    if (selectedCar) {
  //      const carDetailsBox = document.querySelector(".car-details-box");
  //      carDetailsBox.innerHTML = `<div class="car-details-box-content">
  //                                 <div class="content-one">
  //                                 <img src=${selectedCar.img} alt=${selectedCar.model}>
  //                                 </div>
  //                               <div class="content-two">
  //                                 <h1>${selectedCar.model}</h1>
  //                               </div>
                              
  //                               </div>
  //                               `;
  //    }
  //  }, 2000);
 }
        

  
 
