import AnimateCSSLive from './logo';
import {TimelineMax} from 'gsap';
import './lib/gsapArray';



var numPoints = 14;

var points = [];
var points1 = [];
var startPoints = [];
var startPoints0 = [];
var endPoints = [];

for (var i = 0; i < numPoints; i++) {
  points.push(
    20+Math.random()*10
  );
  startPoints.push(0);
  endPoints.push(100 + Math.random()*50);
  startPoints0.push(-Math.random()*100);
}

let startPoints1 = startPoints.slice(0);
let startPoints2 = startPoints0.slice(0);
let startPoints3 = startPoints0.slice(0);
let startPoints4 = startPoints0.slice(0);
points.forEach((el,index) => {
  points1.push(points[index] - 4);
});

function draw(path,points,closed) {


  let str = '';
  if(closed) {
  	str += ` M 0 0 V ${points[0]}` ;
  } else{
  	str += ` M 0 ${points[0]}` ;
  }
  
  for (var i = 0; i < numPoints-1; i++) {
	  var p = (i+1)/(numPoints -1)*100;
	  var cp = p - (1/(numPoints -1)*100)/2;
	  // Bezier Curve generation
	  str += `C ${cp} ${points[i]} ${cp} ${points[i+1]} ${p} ${points[i+1]}`;
  }
  if(closed) str += 'V 0 H 0';
  path.setAttribute('d',str);
}

// draw(points);


let path01 = document.querySelectorAll('.waves__01')[0];
let path02 = document.querySelectorAll('.waves__02')[0];
let path03 = document.querySelectorAll('.waves__03')[0];

let path1 = document.querySelectorAll('.waves__1')[0];
let path2 = document.querySelectorAll('.waves__2')[0];
let path3 = document.querySelectorAll('.waves__3')[0];

let tl = new TimelineMax();

tl
  .to(startPoints0,1,{endArray:endPoints,onUpdate:function() {
    draw(path01,startPoints0,1);
  }},'-=0.6')
  .to(startPoints2,1,{endArray:endPoints,onUpdate:function() {
    draw(path02,startPoints2,1);
  }},'-=0.6')
  .to(startPoints3,1,{endArray:endPoints,onUpdate:function() {
    draw(path03,startPoints3,1);
  }},'-=0.6')
  .to(startPoints,1,{endArray:points,onUpdate:function() {
    draw(path1,startPoints,1);
    draw(path2,startPoints,0);
  }})
  .to(startPoints1,1,{endArray:points1,onUpdate:function() {
    draw(path3,startPoints1,0);
  }},'-=1')
  .to('#logo',1,{y:0},'-=0.8')
  .call(AnimateCSSLive);






