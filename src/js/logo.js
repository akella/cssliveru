import Snap from 'snapsvg';
import {TimelineMax} from 'gsap';

var animationSpeed = 1000;

export default function AnimateCSSLive() {
  var pathC = Snap.select('#C');
  var pathCto = Snap.select('#CTO').attr('d');
  pathC.animate({ d: pathCto }, animationSpeed, mina.linear, function() {});

  var pathS = Snap.select('#S1');
  var pathSto = Snap.select('#S1TO').attr('d');
  pathS.animate({ d: pathSto }, animationSpeed, mina.linear, function() {});


  var pathS1 = Snap.select('#S2');
  var pathS1to = Snap.select('#S2TO').attr('d');
  pathS1.animate({ d: pathS1to }, animationSpeed, mina.linear, function() {});


  var pathDash = Snap.select('#dash');
  var dashTo = Snap.select('#dashTo').attr('d');
  pathDash.animate({ d: dashTo }, animationSpeed, mina.linear, function() {});


  var l = Snap.select('#l');
  var lto = Snap.select('#lto').attr('d');
  l.animate({ d: lto }, animationSpeed, mina.linear, function() {});

  var i = Snap.select('#i');
  var ito = Snap.select('#ito').attr('d');
  i.animate({ d: ito }, animationSpeed, mina.linear, function() {});


  var v = Snap.select('#v');
  var vto = Snap.select('#vto').attr('d');
  v.animate({ d: vto }, animationSpeed, mina.linear, function() {});

  var e = Snap.select('#e');
  var eto = Snap.select('#eto').attr('d');
  e.animate({ d: eto }, animationSpeed, mina.linear, function() {});
}

// document.body.addEventListener('click',() => {
//   AnimateCSSLive();
// });
