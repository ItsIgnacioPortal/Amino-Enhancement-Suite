/*jslint devel: true */
console.info("AHS Loaded.");
main();

async function main () {

    //Find the annoying html elements and store them in their respective arrays
    var banner = await document.getElementsByClassName("content community-bg");
    var navButtons = await document.getElementsByClassName("home-fixed-container");
    var communityListBlur = await document.getElementsByClassName("global-chat-community-bg");

    await console.info("[AHS]: Modifying page...");

    //if the banner was collected succesfully...
    if(banner[0].lenght !== 0){
        try {
            //Delete unwanted elements...
            banner[0].parentNode.removeChild(banner[0]);
            communityListBlur[0].parentNode.removeChild(communityListBlur[0]);

            //Customize the looks of the NavButtons
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
    
    try {
        //Live comments are edited separetly because they are not always on the page...
        var liveComments = await document.getElementsByClassName("live-comment");
        var liveCommentsCSS = await liveComments[0].getElementsByClassName("content init");
        liveCommentsCSS[0].style.position = "initial";
    } catch(e) {

        console.error("[AHS]: ERROR: ");
        console.log(e);
    }
    

}