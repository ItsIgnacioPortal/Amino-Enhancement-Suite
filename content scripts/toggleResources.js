(function() {
	/**
	 * Check and set a global guard variable.
	 * If this content script is injected into the same page again,
	 * it will do nothing next time.
	 */
	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	console.log("toggleResources.js has been loaded");

	var banner = document.getElementsByClassName("content community-bg");
	var communityListBlur = document.getElementsByClassName("global-chat-community-bg");
	var liveComments = document.getElementsByClassName("live-comment")[0].getElementsByClassName("content init");


	/**
	 * Listen for messages from the background script.
	*/
	browser.runtime.onMessage.addListener((message) => {

		console.log("Message recieved...");
		switch(message.command){

			case "enableBanner":
				banner[0].style.display = "inherit";
				break;

			case "disableBanner":
				banner[0].style.display = "none";
				break;


			case "enableCLB":
				communityListBlur[0].style.display = "inherit";
				break;

			case "disableCLB":
				communityListBlur[0].style.display = "none";
				break;


			case "enableLiveComments":
				liveComments[0].style.display = "inherit";
				break;

			case "disableLiveComments":
				liveComments[0].style.display = "none";
				break;

			default:
				console.log("If you're reading this something went very wrong...");
				break;
		}

		/*
		if (message.command === "beastify") {
			insertBeast(message.beastURL);
		} else if (message.command === "reset") {
			removeExistingBeasts();
		}
		*/
	});

})();