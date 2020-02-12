/*jslint devel: true */
console.info("AHS Loaded.");
main();

async function main () {

    //Find the annoying html elements and store them in their respective arrays
    var banner = await document.getElementsByClassName("content community-bg");
    console.log(banner);
    var navButtons = await document.getElementsByClassName("home-fixed-container");
    var liveComments = await document.getElementsByClassName("live-comment");
    console.log(liveComments);
    var communityListBlur = await document.getElementsByClassName("global-chat-community-bg");
    console.log(communityListBlur); 

    await console.info("[AHS]: Modifying page...");

    try {
        //Delete unwanted elements...
        banner[0].parentNode.removeChild(banner[0]);
        communityListBlur[0].parentNode.removeChild(communityListBlur[0]);

        //Customize the looks of the NavButtons
        navButtons[0].style.marginTop = "-32px";
        navButtons[0].style.width = "100%";
        navButtons[0].style.maxWidth = "100%";
        navButtons[0].style.background = "rgba(0,0,0,0)";
        navButtons[0].style.paddingLeft = "0px";
        navButtons[0].style.paddingRight = "0px";
        navButtons[0].style.marginLeft = "-200px";
        navButtons[0].style.paddingTop = "0px";
        console.log(navButtons);

    } catch(e) {
        
        console.error("[AHS]: ERROR: ");
        console.log(e);
    }
    try {
        //Live comments are deleted separetly because they are not always on the page...
        liveComments[0].parentNode.removeChild(liveComments[0]);
    } catch(e) {
    	
        console.error("[AHS]: ERROR: ");
        console.log(e);
    }
    

}