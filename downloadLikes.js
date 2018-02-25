//log into websta.me account & go to My Likes Page
var className = "is-photo";
var imgs = document.getElementsByClassName(className);
var fUrl, fName;
for(var i=0;i<imgs.length;i++){
  fUrl = imgs[i].currentSrc;
  fName = fUrl.split("/").pop().toLowerCase();
  saveToDisk(fUrl, fName);
}


//document.getElementsByClassName("is-photo")[3].currentSrc;

//saveToDisk("https://scontent.cdninstagram.com/vp/58bf6d023bf6a3bcfd977c421db0870e/5B2A1DD1/t51.2885-15/s640x640/sh0.08/e35/23596250_131891764187806_842321195020845056_n.jpg", "test");
function saveToDisk(fileUrl, fileName ) {
  var hyperlink = document.createElement('a');
  hyperlink.href = fileUrl;
  hyperlink.target = '_blank';
  hyperlink.download = fileName || fileUrl;

  console.log( /*app.dowloaded.length +*/ ') download', hyperlink.download );

  var mouseEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  hyperlink.dispatchEvent(mouseEvent);
  (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
  return fileUrl;
}


/*####################################################################################################################*/
//appspot compiled pretty print advanced
if (-1 == window.location.href.search("https://websta.me/self/liked")) {
  throw Error('this snippet works only at https://websta.me/self/liked. Please log into your websta.me account & then go to "Liked" Page.');
}
var b = document.getElementsByClassName("is-photo");
if (0 === b.length) {
  throw Error("No Photos Found. Please check if className is is-photo");
}
for (var c, d, e = 0; e < b.length; e++) {
  c = b[e].currentSrc, d = c.split("/").pop().toLowerCase(), f(c, d);
}
function f(g, h) {
  var a = document.createElement("a");
  a.href = g;
  a.target = "_blank";
  a.download = h || g;
  var k = new MouseEvent("click", {view:window, bubbles:!0, cancelable:!0});
  a.dispatchEvent(k);
  (window.URL || window.webkitURL).revokeObjectURL(a.href);
}
f(1, 2);
f(2, 3);

/*####################################################################################################################*/
//appspot compiled advanced
if(-1==window.location.href.search("https://websta.me/self/liked"))throw Error('this snippet works only at https://websta.me/self/liked. Please log into your websta.me account & then go to "Liked" Page.');var b=document.getElementsByClassName("is-photo");if(0===b.length)throw Error("No Photos Found. Please check if className is is-photo");for(var c,d,e=0;e<b.length;e++)c=b[e].currentSrc,d=c.split("/").pop().toLowerCase(),f(c,d);
function f(g,h){var a=document.createElement("a");a.href=g;a.target="_blank";a.download=h||g;var k=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});a.dispatchEvent(k);(window.URL||window.webkitURL).revokeObjectURL(a.href)}

/*####################################################################################################################*/
//mrcoles bookmarklet

javascript:(function()%7Bif(-1%3D%3Dwindow.location.href.search(%22https%3A%2F%2Fwebsta.me%2Fself%2Fliked%22))throw%20Error('this%20snippet%20works%20only%20at%20https%3A%2F%2Fwebsta.me%2Fself%2Fliked.%20Please%20log%20into%20your%20websta.me%20account%20%26%20then%20go%20to%20%22Liked%22%20Page.')%3Bvar%20b%3Ddocument.getElementsByClassName(%22is-photo%22)%3Bif(0%3D%3D%3Db.length)throw%20Error(%22No%20Photos%20Found.%20Please%20check%20if%20className%20is%20is-photo%22)%3Bfor(var%20c%2Cd%2Ce%3D0%3Be%3Cb.length%3Be%2B%2B)c%3Db%5Be%5D.currentSrc%2Cd%3Dc.split(%22%2F%22).pop().toLowerCase()%2Cf(c%2Cd)%3Bfunction%20f(g%2Ch)%7Bvar%20a%3Ddocument.createElement(%22a%22)%3Ba.href%3Dg%3Ba.target%3D%22_blank%22%3Ba.download%3Dh%7C%7Cg%3Bvar%20k%3Dnew%20MouseEvent(%22click%22%2C%7Bview%3Awindow%2Cbubbles%3A!0%2Ccancelable%3A!0%7D)%3Ba.dispatchEvent(k)%3B(window.URL%7C%7Cwindow.webkitURL).revokeObjectURL(a.href)%7D%7D)()
