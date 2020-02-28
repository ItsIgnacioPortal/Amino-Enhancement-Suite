window.onload = async function(){

	//Get the wrappers
	var githubButton = await document.getElementById("githubButtonWrapper");
	var paypalButton = await document.getElementById("paypalButtonWrapper");

	//Add an event listener onClick
	githubButton.addEventListener("click", (function(tab) {
		browser.tabs.create({
			url: "https://github.com/PinkDev1/Amino-Enhancement-Suite"
		});
	}));

	paypalButton.addEventListener("click", (function(tab) {
		alert("This button isn't setup yet. But thanks for trying :)");
	}));
}