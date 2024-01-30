var BusObject = {
  vehicle: "bus",
  imageUrl:
    "https://images.unsplash.com/photo-1590922144791-347af7dd9dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1c3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  farePerkilo: 10,
  capacity: 40,
  description:
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus harum dolor nemo eaque iusto, esse sint nulla enim tenetur cum? ",
};
var carObject = {
  vehicle: "car",
  imageUrl:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  farePerkilo: 3,
  capacity: 4,
  description:
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus harum dolor nemo eaque iusto, esse sint nulla enim tenetur cum? ",
};
var bikeObject = {
  vehicle: "bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  farePerkilo: 3,
  capacity: 2,
  description:
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus harum dolor nemo eaque iusto, esse sint nulla enim tenetur cum? ",
};
const servicesArray = [bikeObject, carObject, BusObject]
function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const stringifiedObj = JSON.stringify(service)

  // this is a element for service this code come html
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="card mt-3 mx-auto" style="max-width: 800px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src= ${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">trnsport Mode${service.vehicle}</h5>
            <p class="card-text">${service.description}</p>
            <p class="card-text"><small class="text-body-secondary">Fer par kilo${service.farePerkilo}</small>
            <small class="text-body-secondary">capacity${service.capacity}</small></p>
                      <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})' data-bs-target="#exampleModal">
            Launch demo modal
          </button>
          </div>
        </div>
      </div>
    </div>
      `;
  mainSection.appendChild(div);
  console.log(service);
}
function displayAllArticles(arr){
  for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    displayServices(bikeObject);
  }
}
displayAllArticles(servicesArray);



function handleBooking(obj){
  const modelBody = document.getElementById('modal-body')
  const stringifiedObj = JSON.stringify(obj)
  modelBody.innerHTML=`
  <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">vicale mode ${obj.vehicle}</h5>
    <h5 class="card-title">trnsport Mode${obj.vehicle}</h5>
    <h5 class="card-title">color : red ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-body-secondary">Fer par kilo${obj.farePerkilo}</small>
    <small class="text-body-secondary">capacity${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
          <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
          <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" id="search-btn" type="submit" onclick="calculateCost(${stringifiedObj})">submit</button>
        </div>
  </div>
</div>
  `
}

function calculateCost(obj){
  console.log(obj);
}

