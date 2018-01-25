setInterval(tick,1000); //interval for function tick by 1 sec
 
var S = document.getElementById("s"); //access to pictures
var M = document.getElementById("m"); //access to pictures
var H = document.getElementById("h"); //access to pictures
var realTime = new Date();
    function tick(){
    S.style.transform = 'rotate('+ 6 * realTime.getSeconds() +'deg)'; //rotation pictures by 6 degree every second
    M.style.transform = 'rotate('+ 6 * realTime.getMinutes() +'deg)';
    H.style.transform = 'rotate('+ 30 * realTime.getHours() +'deg)';
    realTime = new Date(); //date object
}

var blockMove = document.getElementById('clock'); //access to all block in document
blockMove.onmousedown = function() { // onclick event fire function
     document.onmousemove = function(event){ //mouse move event fire function which change block style
        blockMove.style.position = 'fixed';
        blockMove.style.left = event.pageX - 100   + 'px'; // every event call changes absolute block position by attribute style "top" with "left"
        blockMove.style.top = event.pageY - 150 + 'px';
        };
};
blockMove.onmouseup = function(){
    document.onmousemove = null;    
 };
blockMove.ondragstart = function() {
  return false;
};
