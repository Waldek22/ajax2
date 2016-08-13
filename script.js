var tweetLink = "https://twitter.com/intent/tweet?text=",
	quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

function getQuote() {
	$.getJSON(quoteUrl, createTweet)
}
function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quteAuthor = "Unknow author";
	};
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + tweetText;
		$('.quote').text(input.quoteText);
		$('.author').text('Author: ' + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}
$(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});