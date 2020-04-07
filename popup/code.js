//Retrieve values from storage
var AHSStorage = {};

window.onload = async function createListeners(){
	try{
		//Get the checkboxes
		var bannerCheckbox = await document.getElementById("sBanner");
		var CLBCheckbox = await document.getElementById("sCommunityListFog");
		var liveCommentsCheckbox = await document.getElementById("sLiveComments");
		
		//DEBUGGING: browser.storage.local.get().then(function(item){console.log(item);});
		await browser.storage.local.get().then(function(item){AHSStorage = item;});


		if(AHSStorage.bannerCheckboxChecked){
			bannerCheckbox.checked = true;
		}  //else it will just remain unchecked

		if(AHSStorage.CLBCheckboxChecked){
			CLBCheckbox.checked = true;
		}  //else it will just remain unchecked

		if(AHSStorage.liveCommentsCheckboxChecked){
			liveCommentsCheckbox.checked = true;
		}  //else it will just remain unchecked

		//Add eventlisteners to validateCheckboxes
		bannerCheckbox.addEventListener("click", validateBanner);
		CLBCheckbox.addEventListener("click", validateCommunityListBlur);
		liveCommentsCheckbox.addEventListener("click", validateLiveComments);


		//==================================================================
		//BUTTONS FUNCTIONALITY CODE AHEAD
		//Get the wrappers
		var githubButton = await document.getElementById("githubButtonWrapper");
		var donateButton = await document.getElementById("donateButtonWrapper");

		//Add an event listener onClick
		githubButton.addEventListener("click", (function(tab) {
			browser.tabs.create({
				url: "https://github.com/PinkDev1/Amino-Enhancement-Suite"
			});
		}));

		//Add an event listener onClick
		donateButton.addEventListener("click", (function(tab) {
			//Little popup with PinkDev1's CVU
			alert("Thanks for supporting the project***REMOVED***");
		}));


	} catch(e){

		console.error("[AHS]: ERROR: ");
		console.log(e);
	}
};


//Func. to get a checkbox state and modify the page accordingly
async function validateBanner() {
	try {
		//Get the checkbox
		var bannerCheckbox = await document.getElementById("sBanner");

		//Switch state accordingly
		if(bannerCheckbox.checked){
			//Show banner
			sendMessage("enableBanner");
			browser.storage.local.set({bannerCheckboxChecked: true});
		} else {
			//Hide banner
			sendMessage("disableBanner");
			browser.storage.local.set({bannerCheckboxChecked: false});
		}

	//Report Errors
	} catch(e) {
		console.error("[AHS]: ERROR: ");
		console.log(e);
	}

	
}

//Func. to get a checkbox state and modify the page accordingly
async function validateCommunityListBlur(){
	try{
		//Get the checkbox
		var CLBCheckbox = await document.getElementById("sCommunityListFog");

		//Switch state accordingly
		if(CLBCheckbox.checked){
			//Show community list blur
			sendMessage("enableCLB");
			browser.storage.local.set({CLBCheckboxChecked: true});
		} else {
			//Hide community list blur
			sendMessage("disableCLB");
			browser.storage.local.set({CLBCheckboxChecked: false});
		}

	//Report Errors
	} catch(e){
		console.error("[AHS]: ERROR: ");
		console.log(e);

	}
}

//Func. to get a checkbox state and modify the page accordingly
async function validateLiveComments(){
	try{
		//Get the checkbox
		var liveCommentsCheckbox = await document.getElementById("sLiveComments");

		//Switch state accordingly
		if(liveCommentsCheckbox.checked){
			//Show live comments
			sendMessage("enableLiveComments");
			browser.storage.local.set({liveCommentsCheckboxChecked: true});
		} else {
			//Hide live comments
			sendMessage("disableLiveComments");
			browser.storage.local.set({liveCommentsCheckboxChecked: false});
		}

	//Report Errors
	} catch(e){
		console.error("[AHS]: ERROR: ");
		console.log(e);

	}
}


/*
* A function to send messages to addon.js with the 
*  tabs.sendMessage() API &
*  tabs.query() API
*/
function sendMessage(message){
	browser.tabs.query({
		currentWindow: true,
		active: true
	}).then(function (tabs){
		for (let tab of tabs) {
			browser.tabs.sendMessage(
				tab.id,
				{command: message}
			);
		}
	});
}