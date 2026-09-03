let counter = document.getElementById('counter');
let btn = document.getElementById('incrementBtn');
let count = 0;

btn.addEventListener('click', () => {
	alert(count); // show the value BEFORE incrementing
	count++;
	counter.textContent = count; // update the display after incrementing
});