let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let list = document.querySelector('#lis');
let navbarr = document.querySelector('.navb');

const searchWrapper = document.querySelector(".search-bar-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

let shopBtn = document.querySelector("#shop");






inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if(userData){
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    })
    emptyArray = emptyArray.map((data) =>{
      return data = '<li>' + data + '</li>';
    });
    console.log(emptyArray);
    suggBox.style.display="block";
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++){
      allList[i].setAttribute("onclick", "select(this)");
    }

  }else{
    suggBox.style.display="none";
  }
}


function select(element){
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
}






function showSuggestions(list){
  let listData;
  if(!list.length){
      userVal = inputBox.value;
      listData = '<li>' + userVal + '</li>';
  }else if(inputBox.value.length == 0){
      suggBox.style.display="none";
  }else{
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}






window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	loginForm.classList.remove('active');
  suggBox.style.display="none";
}

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
})


searchBtn.addEventListener('click', () => {
	searchBtn.classList.toggle('fa-times');
  suggBox.style.display="none";
	searchBar.classList.toggle('active');
})


shopBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  suggBox.style.display="none";
  searchBar.classList.toggle('active');
})



videoBtn.forEach(btn =>{
	btn.addEventListener('click', () =>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	});
})


var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});





list.addEventListener('click', () => {
  list.classList.toggle('fa-times');
  navbarr.classList.toggle('active');
})
