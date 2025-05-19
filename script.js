//your JS code here. If required.
const container = document.querySelector('.container');

for(let i = 0; i < 800; i++){
	const box = document.createElement('div');
	box.classList.add('square');

	box.addEventListener('mouseover', ()=>{
		box.style.backgroundColor = getRandomColor();

		setTimeout(() =>{
			box.style.backgroundColor = '';
		}, 1000);
	});
	container.appendChild(box);
}