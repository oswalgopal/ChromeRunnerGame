const runner = document.getElementById("runner");
const object = document.getElementById("object");

document.addEventListener("keypress", (ev) => {
	if (ev.keyCode === 32) {
		jump();	
	}
});


const jump = () => {
	if (runner.classList !== "runnerAnimation") {
		runner.classList.add("runnerAnimation");
		setTimeout( () => {
			runner.classList.remove("runnerAnimation");
		}, 500);
	}	
}
let count = 0;
const checkLose = setInterval(() => {
	const runnerValue =  parseInt(window.getComputedStyle(runner).getPropertyValue("top"));
 	const objectValue =  parseInt(window.getComputedStyle(object).getPropertyValue("left"));
	if ( objectValue < 20 && runnerValue >=450 ) {
		alert('you lose :( your score is ' +  count / 2);
		object.style.animate = "null";
		object.style.display = "none";
		location.reload();
	}
	if (objectValue < 20) {
		count++;		
	}
}, 10);
