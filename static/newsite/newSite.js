var rawMarkdown;
var rawMarkdownLines
$(function() {
	console.log("test js");
	var siteVersion = window.location.href.indexOf("newSite".toLowerCase()) < 0 ? "profile" : "profile2";
	$.get("/static/newsite/"+siteVersion+".md", function(data){
		if(window.location.href.indexOf("#") < 0) {
			rawMarkdown = data;
			rawMarkdownLines = data.split(" ");
			// $("#renderedMarkdown").html(marked(rawMarkdown));
			var stepTimes = renderTimes(rawMarkdownLines.length);
			for(let i = 1; i <= rawMarkdownLines.length; i++){
				setTimeout(function(){
					var renderString = rawMarkdownLines.slice(0, i).join(" ");
					var rawString = rawMarkdownLines.slice(i, rawMarkdownLines.length).join(" ");
					rawString = rawString.replace(new RegExp("<", 'g'), ">")
					$("#renderedMarkdown").html(marked(renderString));
					$("#rawMarkdown").html(rawString);
					$("a").each(function(ind, elem) {if(elem.href.indexOf("#") < 0){elem.target = "_blank" }});
				}, stepTimes[i-1]);
			}
		} else {
			$("#renderedMarkdown").html(marked(data));
		}
		if(window.location.href.indexOf("#") < 0) window.location.href = window.location.href+"#";
	});
});


function renderTimes(numSteps){
	var times = [];
	var time = 0;
	var stepSize = (ind) => Math.max(140-ind*5, 1)
	for(var i = 0; i < numSteps; i++){
		time += stepSize(i);
		times.push(time);
	}
	return times;
}