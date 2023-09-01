
const watchList = {};
let observedItems = 0;
const options = {root: null, threshold: 1};

const addToWatchList = (item) => {
	let name = item.querySelector('.c-product__name').innerText;
	let price = item.querySelector('.c-product__price').innerText;
	if (name in watchList) {return;};
	watchList[name] = price;
	console.log(`New Item ${name} with price of ${price} added to the list!`);
	console.table(watchList);
};

const observerCallback = (entries, observer) => {
	entries.forEach(entry => {if (entry.isIntersecting) {addToWatchList(entry.target);};});
};

const isVisible = (target) => {
	let observer = new IntersectionObserver(observerCallback, options);
	observer.observe(target);
};

const observeItems = () => {
	let loadedItems = document.querySelectorAll('.c-product__item');
	if (loadedItems.length == observedItems) {return;};
	for (i = observedItems ; i < loadedItems.length ; i++) {isVisible(loadedItems[i]);};
	observedItems = loadedItems.length;
}; 

document.onscroll = observeItems;