const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".option-container");

const optionsList = document.querySelectorAll(".opsi");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector(".pil").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".option-container2");

const optionsList2 = document.querySelectorAll(".opsi2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach((o) => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector(".pil").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});

// Slide Pilihan
const icon = document.querySelectorAll(".dashboard .dashboard-atas .icon");
const containerIcon = document.querySelector(".dashboard .dashboard-atas");

icon.forEach((el) => {
  el.addEventListener("click", function () {
    containerIcon.querySelector(".active").classList.remove("active");

    el.classList.add("active");
  });
});

const iconPesawat = document.querySelector(".icon.pesawat");
const iconHotel = document.querySelector(".icon.hotel");
const iconTrain = document.querySelector(".icon.train");
const iconMap = document.querySelector(".icon.map");

const containerContent = document.querySelector(".dashboard .dashboard-content .container-content");

iconPesawat.addEventListener("click", () => {
  containerContent.style.left = "0px";
  containerContent.style.transition = "all .5s ease-in-out";
});

iconHotel.addEventListener("click", () => {
  containerContent.style.left = "-1000px";
  containerContent.style.transition = "all .5s ease-in-out";
});

iconTrain.addEventListener("click", () => {
  containerContent.style.left = "-2000px";
  containerContent.style.transition = "all .5s ease-in-out";
});

iconMap.addEventListener("click", () => {
  containerContent.style.left = "-3000px";
  containerContent.style.transition = "all .5s ease-in-out";
});

// Login / Register
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.close');
const loginRegister = document.querySelector('.login-trigger')
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

close.addEventListener('click', function() {
  // modalBody.style.display = 'none';
  close.style.display = 'none';
  loginRegister.style.display = 'block';
  modalContent.style.top = '-70em'
  modal.style.visibility = 'hidden'
  modal.style.opacity = '0'
});

loginRegister.addEventListener('click', function() {
  // modalBody.style.display = 'block';
  close.style.display = 'block';
  // loginRegister.style.display = 'none';
  modalContent.style.top = '-14em';
  modalContent.style.display = 'block'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
  modal.style.opacity = '1'
  modal.style.visibility = 'visible'
})

// Select Down
const containerTravel = document.querySelector('.container-travel'),
selectBtn = containerTravel.querySelector('.travel') ,
searchInp = containerTravel.querySelector('.search-pilihan') ,
options = containerTravel.querySelector('.content-travel .options'),
stp = document.getElementById('stp')

let citys = ['Bali', 'Jakarta', 'Jatim', 'Jogjakarta', 'Maluku', 'Semarang', 'Tangerang']

function addCity(selectedCity) {
  options.innerHTML = "";
  citys.forEach(city => {
    let isSelected = city == selectedCity ? "selectedd" : ""
    let li = `<li onclick="updateName(this)" class="${isSelected}">${city}</li>`
    options.insertAdjacentHTML('beforeend', li)
  })
}

addCity()

function updateName(selectedLi) {
  searchInp.value = ""
  addCity(selectedLi.innerText);
  containerTravel.classList.remove('active')
  stp.innerText = selectedLi.innerText
}

searchInp.addEventListener('keyup', () => {
  let arr = []
  let searchedVal = searchInp.value;
  arr = citys.filter(data => {
    return data.toLowerCase().startsWith(searchedVal);
  }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
  options.innerHTML = arr ? arr : `<p>Oops! Kota tenggelam</p>`;
})

selectBtn.addEventListener('click', () => {
  containerTravel.classList.toggle('active')
})

// Tujuan
const containerTravelTujuan = document.querySelector('.container-travel.tujuan'),
selectBtnTujuan = containerTravelTujuan.querySelector('.travel.tujuan') ,
searchInpTujuan = containerTravelTujuan.querySelector('.search-pilihan.tujuan') ,
optionsTujuan = containerTravelTujuan.querySelector('.content-travel.tujuan .options.tujuan'),
stt = document.getElementById('stt')

let citys1 = ['Bali', 'Jakarta', 'Jatim', 'Jogjakarta', 'Maluku', 'Semarang', 'Tangerang']

function addCity1(selectedCity) {
  optionsTujuan.innerHTML = "";
  citys1.forEach(city => {
    let isSelectedd = city == selectedCity ? "selectedd1" : ""
    let li = `<li onclick="updateName1(this)" class="${isSelectedd}">${city}</li>`
    optionsTujuan.insertAdjacentHTML('beforeend', li)
  })
}

addCity1()

function updateName1(selectedLi) {
  searchInpTujuan.value = ""
  addCity1(selectedLi.innerText);
  containerTravelTujuan.classList.remove('active')
  stt.innerText = selectedLi.innerText
}

searchInpTujuan.addEventListener('keyup', () => {
  let arr = []
  let searchedVal = searchInpTujuan.value;
  arr = citys1.filter(data => {
    return data.toLowerCase().startsWith(searchedVal);
  }).map(data => `<li onclick="updateName1(this)">${data}</li>`).join("");
  optionsTujuan.innerHTML = arr ? arr : `<p>Oops! Kota tenggelam</p>`;
})

selectBtnTujuan.addEventListener('click', () => {
  containerTravelTujuan.classList.toggle('active')
})

// 