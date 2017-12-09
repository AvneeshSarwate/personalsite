var rawMarkdown;
var rawMarkdownLines
$(function() {
	$.get("profile.md", function(data){
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
				console.log("print "+i+" lines "+renderString.length);
			}, stepTimes[i-1]);
		}
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