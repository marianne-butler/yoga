const startYear = 1984, numYears = 2024 - startYear,
years = Array.from(Array(numYears).keys());

// html
const mainContainer = document.querySelector('main'),
timeline = mainContainer.querySelector('#timeline'),
activities = mainContainer.querySelector('#activities');

timeline.innerHTML = years.reverse().reduce(function(str, year) {
	return str + `<li data-year="${startYear + year}"></li>`;
}, "");

activities.setAttribute("viewBox", `0 0 12 ${numYears * 12}`)

// intersections
new IntersectionObserver(
	function(items) {
		document.body.setAttribute("data-state", items[0].isIntersecting ? "splash" : "scroll");
	}, 
	{
		root: mainContainer,
		rootMargin: '0px',
  		threshold: [0]
	}
).observe(document.querySelector("#top"));

const io = new IntersectionObserver(
	function(items) {
		items.forEach(function({target, isIntersecting}) {
			//console.log(target.dataset.year, isIntersecting)
		});
	}, 
	{
		root: mainContainer,
		rootMargin: '0px',
  		threshold: [0.2, 0.8]
	}
);

timeline.querySelectorAll('li').forEach(function(el) {
	io.observe(el)
});
