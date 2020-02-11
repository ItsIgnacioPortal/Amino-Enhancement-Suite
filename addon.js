/*
What this addon does:
1: Delete "div class="content community-bg"" (addressed as banner)
2: Delete "nav class="home-section-nav"  (addressed as navButtons)
3: Delete "section class="live-comment""  (addressed as liveComments)
4: Delete "global-chat-community-bg"  (addressed as communityListBlur)

----------------------------------------------------------------------------

All console warnings start with "[AHS]: " to diferentiate this addons warnings from any other.
AHS = Amino Enhancement Suite

*/



//Find the annoying html elements and store them in their respective arrays
var banner = document.getElementsByClassName('content community-bg');
//var navButtons = document.getElementsByClassName('home-section-nav');
var liveComments = document.getElementsByClassName('live-comment');
var communityListBlur = document.getElementsByClassName('global-chat-community-bg');

//Delete the collected elements
if(banner[0].lenght != 0){  //If the banner was located
	banner[0].parentNode.removeChild(banner[0]);//Delete it

} else {
	//The banner could not be found
	console.warn("[AHS]: Couldn't locate Banner");
}

//navButtons[0].parentNode.removeChild(navButtons[0]);

if(liveComments[0].lenght != 0){  //If the liveComments section was located...
	liveComments[0].parentNode.removeChild(liveComments[0]);  //Delete it

} else {
	console.warn("[AHS]: Couldn't locate liveComments");
}

if(communityListBlur[0].lenght != 0){  //If the communityListBlur was located...
	communityListBlur[0].parentNode.removeChild(communityListBlur[0]);  //Delete it

} else {
	console.warn("[AHS]: Couldn't locate communityListBlur");
}

