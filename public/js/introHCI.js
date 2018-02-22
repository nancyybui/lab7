'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function projectClick(e){
	console.log("Like clicked");
	e.preventDefault();
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {

$(".likeBtn").click(function() {
	ga("create", "UA-114627412-1", 'auto');
	ga("send", "event", 'like', 'click');
});
}