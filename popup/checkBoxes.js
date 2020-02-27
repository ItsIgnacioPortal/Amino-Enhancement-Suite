window.onload = async function createListeners(){

	try{
		//Get the checkboxes
		var bannerCheckbox = await document.getElementById("sBanner");
		var communityListBlurCheckbox = await document.getElementById("sCommunityListFog");
		var liveCommentsCheckbox = await document.getElementById("sLiveComments");

		//Add eventlisteners to validateCheckboxes
		bannerCheckbox.addEventListener("click", validateBanner);
		communityListBlurCheckbox.addEventListener("click", validateCommunityListBlur);
		liveCommentsCheckbox.addEventListener("click", validateLiveComments);

	} catch(e){

		console.error("[AHS]: ERROR: ");
		console.log(e);
	}
}


//Func. to get a checkbox state and modify the page accordingly
async function validateBanner() {
	try {
		//Get the checkbox
		var bannerCheckbox = await document.getElementById("sBanner");

		//Switch state accordingly
		if(bannerCheckbox.checked){
			console.log("Showing banner...");

			try {
				browser.tabs.query({
					currentWindow: true,
					active: true
				}).then(sendMessageToTabs);
				function sendMessageToTabs(tabs){
					for (let tab of tabs) {
						browser.tabs.sendMessage(
							tab.id,
							{command: "Hello"}
						 )
					};
				}

			} catch(e) {
				console.error("[AHS]: ERROR: ");
				console.log(e);
			}

		} else {
			console.log("Hiding banner...");

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
		var communityListBlurCheckbox = await document.getElementById("sCommunityListFog");

		//Switch state accordingly
		if(communityListBlurCheckbox.checked){
			console.log("Showing community list blur...");
		} else {
			console.log("Hiding community list blur...");
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
			console.log("Showing live comments...");
		} else {
			console.log("Hiding live comments...");
		}

	//Report Errors
	} catch(e){
		console.error("[AHS]: ERROR: ");
		console.log(e);

	}
}