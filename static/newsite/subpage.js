var rawMarkdown;
var rawMarkdownLines
var replaceAll = function(target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
};
$(function() {
    console.log("test js");
    var subpage = replaceAll(window.location.pathname, "/", "").toLowerCase();
    $.get("/static/newsite/" + subpage +".md", function(data){

        $("#renderedMarkdown").html(marked(data));
        $('title').html("Avneesh Sarwate - " + $('h1').children().html())
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