async function validateCheckboxes () {

	try {
		var bannerCheckbox = await document.getElementById("sBanner");
		var communityListBlurCheckbox = await document.getElementById("sCommunityListFog");
		var liveCommentsCheckbox = await document.getElementById("sLiveComments");

		if(bannerCheckbox.checked){
			console.log("Showing banner...");

		} else {
			console.log("Hiding banner...");
		}

	} catch(e) {
		console.log(e);
	}

	
}