//  All console warnings start with "[AHS]: " to diferentiate this addons warnings from any other.
//  AHS = Amino Enhancement Suite

console.log("AHS LOADED...");

(async function(){

	//Find the annoying html elements and store them in their respective arrays
	var banner = await document.getElementsByClassName("content community-bg");
	var navButtons = await document.getElementsByClassName("home-fixed-container");
	var navButtonsOverflow = await document.getElementsByClassName("overflow-hint");
	var communityListBlur = await document.getElementsByClassName("global-chat-community-bg");
	var liveComments = await document.getElementsByClassName("live-comment")[0].getElementsByClassName("content init");
	var liveMembers = await document.getElementsByClassName("live-member-list active");

	//Create the AHSStorage object
	var AHSStorage = {};
	//Save all of our storage on the AHSStorage object
	await browser.storage.local.get().then(function(item){AHSStorage = item;});

	//if the banner was collected succesfully...
	if(banner[0].lenght !== 0){
		try {

			//If "Show banner" was not selected...
			if(AHSStorage.bannerCheckboxChecked != true){
				//Hide the banner
				banner[0].style.display = "none";
			}  //else don't

			//If "Show community list blur" was not selected...
			if(AHSStorage.CLBCheckboxChecked != true){
				//Hide the community list blur
				communityListBlur[0].style.display = "none";
			}
			
			
			navButtonsOverflow[0].style.display = "none";

			//Customize the NavButtons
			navButtons[0].style.marginTop = "-2.5%";
			navButtons[0].style.width = "auto";
			navButtons[0].style.maxWidth = "100%";
			navButtons[0].style.background = "rgba(0,0,0,0)";
			navButtons[0].style.paddingLeft = "0px";
			navButtons[0].style.paddingRight = "0px";
			navButtons[0].style.marginLeft = "-14.275%";
			navButtons[0].style.paddingTop = "0px";

		} catch(e) {
			
			console.error("[AHS]: ERROR: ");
			console.log(e);
		}
	}
	
	//Live comments are edited separetly because they are not always on the page...
	//When the page loads...
	window.onload = async function() {
		try {

			//If "Show live comments" was not selected...
			if(AHSStorage.liveCommentsCheckboxChecked != true){
				//Hide the liveComments
				liveComments[0].style.display = "none";
			}  //else don't


			//Customize the liveMembers position
			liveMembers[0].style.position = "fixed";
			liveMembers[0].style.marginLeft = "0.5%";

		} catch(e) {
			console.error("[AHS]: ERROR: ");
			console.log(e);

		}
		
		
		//Listen for messages from the background script.
		browser.runtime.onMessage.addListener((message) => {

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
		});
	};
})();