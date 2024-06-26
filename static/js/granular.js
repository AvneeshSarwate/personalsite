var sounds;

function preload() {
  sounds = [
    loadSound('static/samples/synA1.wav'), 
    loadSound("static/samples/synA2.wav"), 
    loadSound("static/samples/synA3.wav"),
    loadSound("static/samples/tabla1.wav"),
    loadSound("static/samples/tabla2.wav"),
    loadSound("static/samples/tabla3.wav"),
  ];
  var element = document.getElementById("defaultCanvas0");
  element.parentNode.removeChild(element);
}

function draw() {
  var vol = document.getElementById("granularVolume").checked ? 0.1 : 0;
  masterVolume(vol);
}

var volSet = [false, false, false];

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var touching = createArray(200, 200);

var width = 960,
    height = 500;

var colCount = 0;

var nodes = d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; }),
    root = nodes[0],
    d3color = d3.scale.category10();

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
    .gravity(0.05)
    .charge(function(d, i) { return i ? 0 : -2000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

var svg = d3.select(".granular").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("circle")
    .data(nodes.slice(1))
  .enter().append("circle")
    .attr("r", function(d) { return d.radius; })
    .style("fill", function(d, i) { d.color = i % 6; d.ind = i; return d3color(i % 6); });

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

svg.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * .5;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
        if(node.color === quad.point.color && !touching[quad.point.ind][node.ind]) {
          colCount = (colCount + 1);
          if(colCount % 200 == 0) {
            //console.log(node.color);
            //console.log(x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1);
            if(sounds && sounds[node.color].isLoaded()) {
              //sounds[node.color].setVolume(0.1);
              sounds[node.color].play();
            }
          }
        }
        if(typeof quad.point.ind != 'undefined' && typeof node.ind != 'undefined'){
          touching[quad.point.ind][node.ind] = 1;
          touching[node.ind][quad.point.ind] = 1;
        }
      } else {
        if(typeof quad.point.ind != 'undefined' && typeof node.ind != 'undefined'){
          //console.log(quad.point.ind,node.ind);
          touching[quad.point.ind][node.ind] = 0;
          touching[node.ind][quad.point.ind] = 0;
        }
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}