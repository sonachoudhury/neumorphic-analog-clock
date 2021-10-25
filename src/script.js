window.addEventListener("DOMContentLoaded",() => {
	const clock = new NeumorphicAnalogClock(".clock");
});

class NeumorphicAnalogClock {
	constructor(qs) {
		const el = document.querySelector(qs);
		const msInSec = 1000;
		const msInMin = msInSec * 60;
		const msInHr = msInMin * 60;
		const msInDay = msInHr * 24;
		const date = new Date();

		let time = date.getHours() * msInHr;
		time += date.getMinutes() * msInMin;
		time += date.getSeconds() * msInSec;
		time += date.getMilliseconds();

		if (el) {
			const hr = el.querySelector(`.clock__hand--hr`);
			const min = el.querySelector(`.clock__hand--min`);
			const sec = el.querySelector(`.clock__hand--sec`);

			if (hr) {
				const hrDelay = (msInDay * ((time % msInDay) / msInDay)) / msInSec;
				hr.style.animationDelay = `${-hrDelay}s`;
			}
			if (min) {
				const minDelay = (msInHr * ((time % msInHr) / msInHr)) / msInSec;
				min.style.animationDelay = `${-minDelay}s`;
			}
			if (sec) {
				const secDelay = (msInMin * ((time % msInMin) / msInMin)) / msInSec;
				sec.style.animationDelay = `${-secDelay}s`;
			}
		}
	}
}