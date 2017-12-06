var rawMarkdown;
var rawMarkdownLines
$(function() {
	$.get("markdownText.md", function(data){
		rawMarkdown = data;
		rawMarkdownLines = data.split("\n");
		var stepTimes = renderTimes(rawMarkdownLines.length);
		for(let i = 1; i <= rawMarkdownLines.length; i++){
			setTimeout(function(){
				var renderString = rawMarkdownLines.slice(0, i).join("\n");
				var rawString = rawMarkdownLines.slice(0, rawMarkdownLines.length).join("\n");
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
	var stepSize = (ind) => Math.max(140-ind*5, 10)
	for(var i = 0; i < numSteps; i++){
		time += stepSize(i);
		times.push(time);
	}
	return times;
}