const optionBtn = document.querySelector('.menu');
console.log(optionBtn);
const sidebar = document.querySelector('.side-bar');
optionBtn.addEventListener('click', function (){
	sidebar.classList.add('popup');
	optionBtn.classList.add('option');
});
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function (){
	sidebar.classList.remove('popup');
	optionBtn.classList.remove('option');
});
let container = document.querySelectorAll('.content-1');
console.log(container);

const slider_contact = document.querySelector('.content-1 .Contact');
const body = document.querySelector('.content');
const text_1 = document.querySelector('.text-1');
const text = document.querySelector('.text');
const pop =  document.querySelector('.popup-design');
console.log(container[0]);
container[1].addEventListener('click', display);
function display(){
	slider_contact.classList.add('popup-design');
	slider_info.classList.remove('popup-design');
	text_1.classList.add('text-pop');
	text.classList.add('remove');
	text_2.classList.add('remove');
	slider_payment.classList.remove('popup-design');
	text_1.className = 'text-deft';
}
const slider_info = document.querySelector('.info');
slider_info.className = 'popup-design';
container[0].addEventListener('click', info_display);
function info_display(){
	slider_info.classList.add('popup-design');
	slider_contact.classList.remove('popup-design');
	text_1.classList.add('remove');
	text_2.classList.add('remove');
	slider_payment.classList.remove('popup-design');
	text.className = 'text-deft';
}
const slider_payment = document.querySelector('.payment');
container[2].addEventListener('click', pay_display);
const text_2 = document.querySelector('.text-2');
function pay_display(){
	slider_payment.classList.add('popup-design');
	slider_contact.classList.remove('popup-design');
	text.classList.add('remove');
	text_1.classList.add('remove');
	slider_info.classList.remove('popup-design');
	text_2.className = 'text-deft';
}