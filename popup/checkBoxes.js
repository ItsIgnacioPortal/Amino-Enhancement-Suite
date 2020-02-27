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
			//Show banner
			sendMessage("enableBanner");
		} else {
			//Hide banner
			sendMessage("disableBanner");
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
			//Show community list blur
			sendMessage("enableCLB");
		} else {
			//Hide community list blur
			sendMessage("disableCLB");
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
		} else {
			//Hide live comments
			sendMessage("disableLiveComments");
		}

	//Report Errors
	} catch(e){
		console.error("[AHS]: ERROR: ");
		console.log(e);

	}
}



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