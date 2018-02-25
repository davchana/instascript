/*

> Get all lists of 20 URLs from html
> save all those to disk
> filenames cannot be changed as it is present in header & also cross-origin
*/

/*configrables*/
var className = "is-photo";

/*configrables ENDS*/
var tStart = new Date(); //start time
var url = window.location.href;
if(url.search("https://websta.me/self/liked") == -1)
  throw new Error("this snippet works only at https://websta.me/self/liked. Please log into your websta.me account & then go to \"Liked\" Page.");
var imgs = document.getElementsByClassName(className);
if(imgs.length === 0)
  throw new Error("No Photos Found. Please check if className is " + className); 

var fUrl, fName, id, user, liked, log="", nl="\r\n", line=nl + "-".repeat(10);

for(var i=0;i<imgs.length;i++){
  fUrl = imgs[i].currentSrc;
  fName = fUrl.split("/").pop().toLowerCase();
  id = imgs[i].parentElement.href.split("/").pop();
  user = imgs[i]
          .parentElement.parentElement.parentElement
          .children[1].children[0].children[0].children[0].children[1].innerText || "not found";
  liked = imgs[i]
            .parentElement.parentElement.parentElement
            .children[1].children[0].children[0].children[0].children[2]
            .dataset.originalTitle  || "not found";
  saveToDisk(fUrl, fName);
  

  log += nl + "URL:     "+ fUrl;
  log += nl + "Name:    "+ fName;
  log += nl + "ID:      "+ id;
  log += nl + "User:    "+ user;
  log += nl + "LikedOn: "+ liked;
  log += line;
  
  //break;
}

var tEnd = new Date();
var time = parseFloat(tEnd.getTime() - tStart.getTime()).toFixed(2) + " seconds";

var stats = "";

stats += tStart; //auto formatted
stats += nl + "Time:    " + time;
stats += line;
log = stats + log;

//save log file as text
var logName = tStart.toISOString().split(".");
console.log(logName);

logName = logName[0].replace(/[:\-\.]/gi,  "");
logName = logName.replace("T", "_");
logName = "Log "+ logName + ".txt";

var link = document.createElement('a');
link.download = logName;
var blob = new Blob([log], {type: 'text/plain'});
link.href = window.URL.createObjectURL(blob);
link.click();

//document.getElementsByClassName("is-photo")[3].currentSrc;

//saveToDisk("https://scontent.cdninstagram.com/vp/58bf6d023bf6a3bcfd977c421db0870e/5B2A1DD1/t51.2885-15/s640x640/sh0.08/e35/23596250_131891764187806_842321195020845056_n.jpg", "test");

function saveToDisk(fileUrl, fileName ) {
  //console.log("url="+fileUrl + " Name="+ fileName);
  var hyperlink = document.createElement('a');
  hyperlink.href = fileUrl;
  hyperlink.target = '_blank';
  hyperlink.download = fileName || fileUrl;
  
  var mouseEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  hyperlink.dispatchEvent(mouseEvent);
  (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
  //return fileUrl;
}


saveToDisk(1,2);
saveToDisk(2,3);



/*####################################################################################################################*/
//appspot compiled pretty print advanced
var a = new Date;
if (-1 == window.location.href.search("https://websta.me/self/liked")) {
  throw Error('this snippet works only at https://websta.me/self/liked. Please log into your websta.me account & then go to "Liked" Page.');
}
var b = document.getElementsByClassName("is-photo");
if (0 === b.length) {
  throw Error("No Photos Found. Please check if className is is-photo");
}
for (var c, d, f, g, h, k = "", l = "\r\n" + "-".repeat(10), m = 0; m < b.length; m++) {
  c = b[m].currentSrc, d = c.split("/").pop().toLowerCase(), f = b[m].parentElement.href.split("/").pop(), g = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].innerText || "not found", h = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[2].dataset.a || "not found", n(c, d), k += "\r\nURL:     " + c, k += "\r\nName:    " + d, k += "\r\nID:      " + f, k += "\r\nUser:    " + g, k += "\r\nLikedOn: " + 
  h, k += l;
}
var p = parseFloat((new Date).getTime() - a.getTime()).toFixed(2) + " seconds", q = "";
q += a;
q += "\r\nTime:    " + p;
q += l;
k = q + k;
var r = a.toISOString().split(".");
console.log(r);
r = r[0].replace(/[:\-\.]/gi, "");
r = r.replace("T", "_");
r = "Log " + r + ".txt";
var u = document.createElement("a");
u.download = r;
u.href = window.URL.createObjectURL(new Blob([k], {type:"text/plain"}));
u.click();
function n(t, v) {
  var e = document.createElement("a");
  e.href = t;
  e.target = "_blank";
  e.download = v || t;
  var w = new MouseEvent("click", {view:window, bubbles:!0, cancelable:!0});
  e.dispatchEvent(w);
  (window.URL || window.webkitURL).revokeObjectURL(e.href);
}
n(1, 2);
n(2, 3);

/*####################################################################################################################*/
//appspot compiled advanced
var a=new Date;if(-1==window.location.href.search("https://websta.me/self/liked"))throw Error('this snippet works only at https://websta.me/self/liked. Please log into your websta.me account & then go to "Liked" Page.');var b=document.getElementsByClassName("is-photo");if(0===b.length)throw Error("No Photos Found. Please check if className is is-photo");
for(var c,d,f,g,h,k="",l="\r\n"+"-".repeat(10),m=0;m<b.length;m++)c=b[m].currentSrc,d=c.split("/").pop().toLowerCase(),f=b[m].parentElement.href.split("/").pop(),g=b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].innerText||"not found",h=b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[2].dataset.a||"not found",n(c,d),k+="\r\nURL:     "+c,k+="\r\nName:    "+d,k+="\r\nID:      "+f,k+="\r\nUser:    "+
g,k+="\r\nLikedOn: "+h,k+=l;var p=parseFloat((new Date).getTime()-a.getTime()).toFixed(2)+" seconds",q="";q+=a;q+="\r\nTime:    "+p;q+=l;k=q+k;var r=a.toISOString().split(".");console.log(r);r=r[0].replace(/[:\-\.]/gi,"");r=r.replace("T","_");r="Log "+r+".txt";var u=document.createElement("a");u.download=r;u.href=window.URL.createObjectURL(new Blob([k],{type:"text/plain"}));u.click();
function n(t,v){var e=document.createElement("a");e.href=t;e.target="_blank";e.download=v||t;var w=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});e.dispatchEvent(w);(window.URL||window.webkitURL).revokeObjectURL(e.href)}

/*####################################################################################################################*/
//mrcoles bookmarklet

javascript:(function()%7Bif(-1%3D%3Dwindow.location.href.search(%22https%3A%2F%2Fwebsta.me%2Fself%2Fliked%22))throw%20Error('this%20snippet%20works%20only%20at%20https%3A%2F%2Fwebsta.me%2Fself%2Fliked.%20Please%20log%20into%20your%20websta.me%20account%20%26%20then%20go%20to%20%22Liked%22%20Page.')%3Bvar%20b%3Ddocument.getElementsByClassName(%22is-photo%22)%3Bif(0%3D%3D%3Db.length)throw%20Error(%22No%20Photos%20Found.%20Please%20check%20if%20className%20is%20is-photo%22)%3Bfor(var%20c%2Cd%2Ce%3D0%3Be%3Cb.length%3Be%2B%2B)c%3Db%5Be%5D.currentSrc%2Cd%3Dc.split(%22%2F%22).pop().toLowerCase()%2Cf(c%2Cd)%3Bfunction%20f(g%2Ch)%7Bvar%20a%3Ddocument.createElement(%22a%22)%3Ba.href%3Dg%3Ba.target%3D%22_blank%22%3Ba.download%3Dh%7C%7Cg%3Bvar%20k%3Dnew%20MouseEvent(%22click%22%2C%7Bview%3Awindow%2Cbubbles%3A!0%2Ccancelable%3A!0%7D)%3Ba.dispatchEvent(k)%3B(window.URL%7C%7Cwindow.webkitURL).revokeObjectURL(a.href)%7D%7D)()
