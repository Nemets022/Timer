	//Timer
	let deadline = '2019-11-28',
		timerID = 'timer';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));
		if (hours < 0) {
			hours = 0;
			minutes = 0;
			seconds = 0;
		}
		seconds = seconds < 10 ? seconds = '0' + seconds : seconds;
		minutes = minutes < 10 ? minutes = '0' + minutes : minutes;
		hours = hours < 10 ? hours = '0' + hours : hours;
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'second': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minute = timer.querySelector('.minutes'),
			second = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minute.textContent = t.minutes;
			second.textContent = t.second;
			if (t.total < 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock(timerID, deadline);