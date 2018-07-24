var rawMarkdown;
var rawMarkdownLines
var replaceAll = function(target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
};
$(function() {
    console.log("test js");
    var subpage = replaceAll(window.location.pathname, "/", "").toLowerCase();
    $.get("/static/newsite/" + subpage +".md", function(data){
        // rawMarkdown = data;
        // rawMarkdownLines = data.split(" ");
        // // $("#renderedMarkdown").html(marked(rawMarkdown));
        // var stepTimes = renderTimes(rawMarkdownLines.length);
        // for(let i = 1; i <= rawMarkdownLines.length; i++){
        //  setTimeout(function(){
        //      var renderString = rawMarkdownLines.slice(0, i).join(" ");
        //      var rawString = rawMarkdownLines.slice(i, rawMarkdownLines.length).join(" ");
        //      rawString = rawString.replace(new RegExp("<", 'g'), ">")
        //      $("#renderedMarkdown").html(marked(renderString));
        //      $("#rawMarkdown").html(rawString);
        //      $("a").each(function(ind, elem) {if(elem.href.indexOf("#") < 0){elem.target = "_blank" }});
        //  }, stepTimes[i-1]);
        // }
        // var fullMD = data.replace(new RegExp("<", 'g'), ">");
        $("#renderedMarkdown").html(marked(data));
        $("a").each(function(ind, elem) {if(elem.href.indexOf("#") < 0){elem.target = "_blank" }});
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