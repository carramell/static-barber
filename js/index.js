var modal = document.getElementById('modal');
var logInButton = document.getElementById('log_in');
var close = document.getElementById('close');

var modalMap = document.getElementById('modal-map');
var closeMap = document.getElementById('close-map');
var searchMap = document.getElementsByClassName("search-map");

var modalOverlay = document.getElementById('modal-overlay');

var login = modal.querySelector("[name=login]");
var password = modal.querySelector("[name=password]");

if(!document.body.classList.contains('inner-page')){
	var appointmentForm = document.querySelector(".appointment-form");
}
//click on log in
logInButton.onclick = function (event) {
	event.preventDefault();
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
	login.focus();
}
close.onclick = function () {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
	modal.style.animation = 'none';
}

//click on map
searchMap[0].onclick = function (event) {
	event.preventDefault();
  modalMap.style.display = 'block';
  modalOverlay.style.display = 'block';
}
if(!document.body.classList.contains('inner-page')){
	searchMap[1].onclick = function (event) {
		event.preventDefault();
		modalMap.style.display = 'block';
		modalOverlay.style.display = 'block';
	}
}
closeMap.onclick = function () {
  modalMap.style.display = 'none';
  modalOverlay.style.display = 'none';
}

//overlay close
modalOverlay.onclick = function(){
	if(modal.style.display === 'block'){
			modal.style.display = 'none';
  		modalOverlay.style.display = 'none';
			modal.style.animation = 'none';
	} else if(modalMap.style.display === 'block'){
			modalMap.style.display = 'none';
  		modalOverlay.style.display = 'none';
		}
}

if(!document.body.classList.contains('inner-page')){
	appointmentForm.onsubmit = function(event){	
		event.preventDefault();
		alert('Вы записаны в очередь.');
	}
}
//escape out
window.onkeydown = function(event){
	if(event.keyCode === 27){
		if(modal.style.display === 'block'){
			modal.style.display = 'none';
  		modalOverlay.style.display = 'none';
			modal.style.animation = 'none';
		} else if(modalMap.style.display === 'block'){
			modalMap.style.display = 'none';
  		modalOverlay.style.display = 'none';
		}
	}
	
}