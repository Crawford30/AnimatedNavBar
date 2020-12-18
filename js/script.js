const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
                "linear-gradient(to right top, #f46b45, #eea849)", 
                "linear-gradient(to right top, #005c97, #363795)", 
                "linear-gradient(to right top, #e53935, #e55d5b)"
                ];


const options = {
	//threshold for when the page is 70% do something
	threshold: 0.7
}

let observer =  new IntersectionObserver(navCheck,options);

function navCheck(entries) {

	//after observig, it gets entries and we loop over entries

	entries.forEach(entry => {
		//console.log(entry);
		//get the class name
		const className = entry.target.className;

		//console.log(className);

		const activeAnchor =  document.querySelector(`[data-page=${className}]`);

		const gradientIndex = entry.target.getAttribute("data-index");

		//for the bubble, will have access to the height, width, position of each anchor tag
		const coords = activeAnchor.getBoundingClientRect();

		const directions = {

			height: coords.height,
			width: coords.width,
			top: coords.top,
			left: coords.left

		};

		//check if visible or not
		if(entry.isIntersecting) {
			//grab the bubble and set the height and width property ,  ``---> back tick
			bubble.style.setProperty("left",`${directions.left}px`);
			bubble.style.setProperty("top",`${directions.top}px`);
			bubble.style.setProperty("width",`${directions.width}px`);
			bubble.style.setProperty("height",`${directions.height}px`);

			//gradient
			bubble.style.background =  gradients[gradientIndex];
		}

	});

}

//observe all the sections

sections.forEach(section => {
	observer.observe(section);
});