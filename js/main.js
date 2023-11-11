const arrow = document.querySelector('.arrow')
const hidImg = document.querySelector('.item1')
const revArr = document.querySelector('.fas')

const addClass = () => {
	hidImg.classList.toggle('hide')

	if (hidImg.classList.contains('hide')) {
		arrow.style.rotate = '180deg'
	} else {
		arrow.style.rotate = '0deg'
	}
}
arrow.addEventListener('click', addClass)
