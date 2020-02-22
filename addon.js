//  All console warnings start with "[AHS]: " to diferentiate this addons warnings from any other.
//  AHS = Amino Enhancement Suite

console.info("AHS Loaded.");
main();

async function main(){

	//Find the annoying html elements and store them in their respective arrays
	var banner = await document.getElementsByClassName("content community-bg");
	var navButtons = await document.getElementsByClassName("home-fixed-container");
	var navButtonsOverflow = await document.getElementsByClassName("overflow-hint");
	var communityListBlur = await document.getElementsByClassName("global-chat-community-bg");
	var liveComments = await document.getElementsByClassName("live-comment")[0].getElementsByClassName("content init");
	var liveMembers = await document.getElementsByClassName("live-member-list active");
	var communityList = await document.getElementsByClassName("aminos-list list-all-items-loaded");
	var communityListContainer = await document.getElementsByClassName("global-chat-community-container")

	//if the banner was collected succesfully...
	if(banner[0].lenght !== 0){
		try {
			//Delete unwanted elements...
			banner[0].parentNode.removeChild(banner[0]);
			communityListBlur[0].parentNode.removeChild(communityListBlur[0]);
			navButtonsOverflow[0].parentNode.removeChild(navButtonsOverflow[0]);

			//Customize the NavButtons
			navButtons[0].style.marginTop = "-2.5%";
			navButtons[0].style.width = "auto";
			navButtons[0].style.maxWidth = "100%";
			navButtons[0].style.background = "rgba(0,0,0,0)";
			navButtons[0].style.paddingLeft = "0px";
			navButtons[0].style.paddingRight = "0px";
			navButtons[0].style.marginLeft = "-14.275%";
			navButtons[0].style.paddingTop = "0px";

			//Customize the CommunityList
			communityList[0].style.display = "grid";
			communityList[0].style.gridTemplateRows = "50px 50px 50px";
			communityList[0].style.gridTemplateColumns = "50px 50px 50px 50px";
			communityList[0].style.gridGap = "20px";
			communityList[0].style.background = "aqua";
			communityList[0].style.overflow =  "hidden";

			communityList[0].style.
			//Make this container bigger...
			communityListContainer[0].style.width = "";


		} catch(e) {
			
			console.error("[AHS]: ERROR: ");
			console.log(e);
		}
	}
	
	//Live comments are edited separetly because they are not always on the page...

	//When the page loads...
	window.onload = async function() {
		try {
			//Hide the liveComments
			liveComments[0].style.position = "initial";

			//Customize the liveMembers position
			liveMembers[0].style.position = "fixed";
			liveMembers[0].style.marginLeft = "0.5%";

		} catch(e) {
			console.error("[AHS]: ERROR: ");
			console.log(e);

		}
	};
}