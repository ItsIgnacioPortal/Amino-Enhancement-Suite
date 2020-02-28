window.onload = async function(){

	//Get the wrapper of the github button
	var githubButton = await document.getElementById("githubButtonWrapper");

	//Add an event listener onClick
	await githubButton.addEventListener("click", (function(tab) {
		browser.tabs.create({
			url: "https://github.com/PinkDev1/Amino-Enhancement-Suite"
		});
	}));
}