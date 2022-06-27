function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e){
	if (e.key === 'ArrowDown' || e.key === 'Down'){
	const currentTop = extractPos(avatar.style.top);
	avatar.style.top = `${currentTop+50}px`;
}
	else if (e.key === 'ArrowUp' || e.key === 'Up'){
	const currentTop = extractPos(avatar.style.top);
	avatar.style.top = `${currentTop-50}px`;
}
	else if (e.key === 'ArrowLeft' || e.key === 'Left'){
	const currentLeft = extractPos(avatar.style.left);
	avatar.style.left = `${currentLeft-50}px`;
	avatar.style.transform = 'scale(1,1)'
}
	else if (e.key === 'ArrowRight' || e.key === 'Right'){
	const currentLeft = extractPos(avatar.style.left);
	avatar.style.left = `${currentLeft+50}px`;
	avatar.style.transform = 'scale(-1,1)'
}
if (isTouching(avatar, coin)) moveCoin();
});

const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0,-2));
}

const moveCoin = () =>{

	const y = Math.floor(window.innerHeight * Math.random());
	const x = Math.floor(window.innerWidth * Math.random());

	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;

}

moveCoin();
