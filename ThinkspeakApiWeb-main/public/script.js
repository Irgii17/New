//Navbar
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;

  if(window.pageYOffset > fixNav){
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
  }



//hamburger
const hamburger =document.querySelector('#hamb');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});



// api url dari blynk
const api_url = "https://sgp1.blynk.cloud/external/api/get?token=nFw3rEZTMcOCkMhm9JaARTVw-COByLHE&v0&v1&v2";
// masukan 

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.v0);
      var field1 = JSON.stringify(res.v1);
      var field2 = JSON.stringify(res.v2);
      var obj = JSON.parse(field);
      var obj1 = JSON.parse(field1);
      var obj2 = JSON.parse(field2);
      // console.log(obj);
      // console.log(obj1);
      // console.log(obj2);
      document.getElementById("v0").innerHTML = obj;
      document.getElementById("v1").innerHTML = obj1;
      document.getElementById("v2").innerHTML = obj2;
    });
}, 1000);

// var AUTH_TOKEN = 'masukkan_token_blynk_anda_di_sini';
// 		var DATASTREAM_ID = 'masukkan_id_datastream_anda_di_sini';

// 		var blynk = new Blynk.Blynk(AUTH_TOKEN);
// 		var datastream = new blynk.VirtualPin(DATASTREAM_ID);

// 		datastream.on('read', function() {
// 			datastream.write(new Date().getTime());
// 		});

// 		datastream.on('write', function(param) {
// 			document.getElementById('datastream').innerHTML = param[0];
// 		});



//     function randomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min) + min);
//     }setInterval(() => {
//       data = {
//         temperature: randomNumber(25,30)
//       }
//       console.log(data)
//       document.getElementById("dummy-1").innerHTML = data.temperature
//     }, 1000 );

// const url = 'https://sgp1.blynk.cloud/external/api/get?token=nFw3rEZTMcOCkMhm9JaARTVw-COByLHE&v0&v1&v2';
// const request = new XMLHttpRequest();
// request.open('GET', url);
// request.send();

// request.onload = function() {
//   if (request.status === 200) {
//     const response = JSON.parse(request.response);
//     var nilaiV0 = response[0];
//     var pin0 = nilaiV0.toString();
//     document.getElementById('v0').innerHTML = pin0;
//   } else {
//     console.error('Terjadi kesalahan saat mengambil data');
//   }
// }
