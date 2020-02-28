window.onload = async function(){

	var githubButton = await document.getElementById("githubButtonWrapper");
	await githubButton.addEventListener("click", (function(tab) {
		browser.tabs.create({
			url: "https://github.com/PinkDev1/Amino-Enhancement-Suite"
		});
	}));
	console.log("hellowo");
}