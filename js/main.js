

//alert is method (built in function in JS)
//alert("Hello" + firstName);

//modern JS
//alert(`Hello ${firstName}`);

//console.log("Hello");

(() => {

const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let puzzleBoard = document.querySelector(".track-slot-drop-zone");
	let	puzzleSelectors = document.querySelectorAll("#soundBoxs img");

	let dropZones = document.querySelectorAll('.drop-zone');

	// functions go in the middle
	// drag and drop functionality does here

	function initDrag() {
		puzzleSelectors.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('dragging...')

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	// handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you droped sumpin on me");

			if (zone.children.length > 0) {
				return false;
			}

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			let audio = document.querySelector(`audio[data-id="${piece}"]`);


		 if (!audio) { return; }

		 // Play audio track
    	 audio.play();
    	 audio.loop = true;


		});
	});


		function playSound(e) {
		 // e in round brakcets is the event object ->
		 // gets generated with every event and passes some data through
		 //debugger;

		 // try selecting the matching audio elemtent
		 let audio = document.querySelector(`audio[data-id="${e.dataId}"]`);


		 if (!audio) { return; }

		 // Play audio track
    	 audio.play();


		// selects the parent div and animate it
		// try selecting the matching audio elemtent
		let key = document.querySelector(`div[data-id="${e.dataId}"]`);
		key.classList.add('playing');

	}

    window.addEventListener('click', playSound);

	initDrag();

	function reload() {
		location.reload(); 
	}



})();
