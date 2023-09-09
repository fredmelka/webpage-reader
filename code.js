
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

const observeItem = (target) => {
	let observer = new IntersectionObserver(observerCallback, options);
	observer.observe(target);
};

const trackUser = () => {
	let lazyLoadedItems = document.querySelectorAll('.c-product__item');
	if (lazyLoadedItems.length == observedItems) {return;};
	for (i = observedItems ; i < lazyLoadedItems.length ; i++) {observeItem(lazyLoadedItems[i]);};
	observedItems = lazyLoadedItems.length;
}; 

document.onscroll = trackUser;