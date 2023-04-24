// Lightbox functionality
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove('active');
});


//return button//
lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return;
	lightbox.classList.remove('active');
});
const button = document.createElement('button');
button.innerText = 'Back';
button.classList.add('back-btn');
document.body.appendChild(button);

button.addEventListener('click', () => {
  document.getElementById('view1').scrollIntoView({behavior: 'smooth'});
});
