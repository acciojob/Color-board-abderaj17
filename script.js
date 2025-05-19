//your JS code here. If required.
const container = document.querySelector('.container');

for(let i = 0; i < 800; i++){
	const box = document.createElement('div');
	box.classList.add('square');

	box.addEventListener('mouseover', ()=>{
		box.style.backgroundColor = getRandomColor();

		setTimeout(() =>{
			 box.style.backgroundColor = 'rgb(204, 204, 204)';
		}, 1000);
	});
	container.appendChild(box);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
	let color = '#';
	for(let i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}