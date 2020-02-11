/*
1: Delete "div class="content community-bg"" (addressed as banner)
2: Delete "nav class="home-section-nav"  (addressed as navButtons)
3: Delete "section class="live-comment""  (addressed as liveComments)
4: Delete "global-chat-community-bg"  (addressed as communityListBlur)
*/


//Remove the annoying elements
var banner = document.getElementsByClassName('content community-bg');
var navButtons = document.getElementsByClassName('home-section-nav');
var liveComments = document.getElementsByClassName('live-comment');
var communityListBlur = document.getElementsByClassName('global-chat-community-bg');

banner[0].parentNode.removeChild(banner[0]);
navButtons[0].parentNode.removeChild(navButtons[0]);
liveComments[0].parentNode.removeChild(liveComments[0]);
communityListBlur[0].parentNode.removeChild(communityListBlur[0]);

