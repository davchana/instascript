var a = new Date;
if (-1 == window.location.href.search("https://websta.me/self/liked")) {
  throw Error("this snippet works only at https://websta.me/self/liked Page.");
}
var b = document.getElementsByClassName("is-photo");
if (0 === b.length) {
  throw Error("No Photos Found. Please check if className is is-photo");
}
for (var c, d, f, g, h, k = "", l = "\r\n" + "-".repeat(10), m = 0; m < b.length; m++) {
  c = b[m].currentSrc, d = c.split("/").pop().toLowerCase(), f = b[m].parentElement.href.split("/").pop(), (g = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].innerText) || (g = "User not found"), (h = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[2].dataset.originalTitle) || (h = "Liked On not found"), n(c, d), k += "\r\nURL:     " + c, k += "\r\nName:    " + d, k += "\r\nID:      " + 
  f, k += "\r\nUser:    " + g, k += "\r\nLikedOn: " + h, k += l;
}
var p = parseFloat((new Date).getTime() - a.getTime()).toFixed(2) + " seconds", q = "";
q += a;
q += "\r\nTime:    " + p;
q += l;
k = q + k;
var r = a.toISOString();
r = r.replace(/[:\-\.]/gi, "");
r = r.replace(/[TZ]/, "_");
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

/*####################################################################################################################*/
//appspot compiled pretty print advanced
var a = new Date;
if (-1 == window.location.href.search("https://websta.me/self/liked")) {
  throw Error("this snippet works only at https://websta.me/self/liked Page.");
}
var b = document.getElementsByClassName("is-photo");
if (0 === b.length) {
  throw Error("No Photos Found. Please check if className is is-photo");
}
for (var c, d, f, g, h, k = "", l = "\r\n" + "-".repeat(10), m = 0; m < b.length; m++) {
  c = b[m].currentSrc, d = c.split("/").pop().toLowerCase(), f = b[m].parentElement.href.split("/").pop(), (g = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].innerText) || (g = "User not found"), (h = b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[2].dataset.originalTitle) || (h = "Liked On not found"), n(c, d), k += "\r\nURL:     " + c, k += "\r\nName:    " + d, k += "\r\nID:      " + 
  f, k += "\r\nUser:    " + g, k += "\r\nLikedOn: " + h, k += l;
}
var p = parseFloat((new Date).getTime() - a.getTime()).toFixed(2) + " seconds", q = "";
q += a;
q += "\r\nTime:    " + p;
q += l;
k = q + k;
var r = a.toISOString();
r = r.replace(/[:\-\.]/gi, "");
r = r.replace(/[TZ]/, "_");
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
var a=new Date;if(-1==window.location.href.search("https://websta.me/self/liked"))throw Error("this snippet works only at https://websta.me/self/liked Page.");var b=document.getElementsByClassName("is-photo");if(0===b.length)throw Error("No Photos Found. Please check if className is is-photo");for(var c,d,f,g,h,k="",l="\r\n"+"-".repeat(10),m=0;m<b.length;m++)c=b[m].currentSrc,d=c.split("/").pop().toLowerCase(),f=b[m].parentElement.href.split("/").pop(),(g=b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[1].innerText)||(g="User not found"),(h=b[m].parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].children[2].dataset.originalTitle)||(h="Liked On not found"),n(c,d),k+="\r\nURL:     "+c,k+="\r\nName:    "+d,k+="\r\nID:      "+f,k+="\r\nUser:    "+g,k+="\r\nLikedOn: "+h,k+=l;var p=parseFloat((new Date).getTime()-a.getTime()).toFixed(2)+" seconds",q="";q+=a;q+="\r\nTime:    "+p;q+=l;k=q+k;var r=a.toISOString();r=r.replace(/[:\-\.]/gi,"");r=r.replace(/[TZ]/,"_");r="Log "+r+".txt";var u=document.createElement("a");u.download=r;u.href=window.URL.createObjectURL(new Blob([k],{type:"text/plain"}));u.click();function n(t,v){var e=document.createElement("a");e.href=t;e.target="_blank";e.download=v||t;var w=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});e.dispatchEvent(w);(window.URL||window.webkitURL).revokeObjectURL(e.href)}
/*####################################################################################################################*/
//mrcoles bookmarklet

javascript:(function()%7Bvar%20a%3Dnew%20Date%3Bif(-1%3D%3Dwindow.location.href.search(%22https%3A%2F%2Fwebsta.me%2Fself%2Fliked%22))throw%20Error(%22this%20snippet%20works%20only%20at%20https%3A%2F%2Fwebsta.me%2Fself%2Fliked%20Page.%22)%3Bvar%20b%3Ddocument.getElementsByClassName(%22is-photo%22)%3Bif(0%3D%3D%3Db.length)throw%20Error(%22No%20Photos%20Found.%20Please%20check%20if%20className%20is%20is-photo%22)%3Bfor(var%20c%2Cd%2Cf%2Cg%2Ch%2Ck%3D%22%22%2Cl%3D%22%5Cr%5Cn%22%2B%22-%22.repeat(10)%2Cm%3D0%3Bm%3Cb.length%3Bm%2B%2B)c%3Db%5Bm%5D.currentSrc%2Cd%3Dc.split(%22%2F%22).pop().toLowerCase()%2Cf%3Db%5Bm%5D.parentElement.href.split(%22%2F%22).pop()%2C(g%3Db%5Bm%5D.parentElement.parentElement.parentElement.children%5B1%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.children%5B1%5D.innerText)%7C%7C(g%3D%22User%20not%20found%22)%2C(h%3Db%5Bm%5D.parentElement.parentElement.parentElement.children%5B1%5D.children%5B0%5D.children%5B0%5D.children%5B0%5D.children%5B2%5D.dataset.originalTitle)%7C%7C(h%3D%22Liked%20On%20not%20found%22)%2Cn(c%2Cd)%2Ck%2B%3D%22%5Cr%5CnURL%3A%20%20%20%20%20%22%2Bc%2Ck%2B%3D%22%5Cr%5CnName%3A%20%20%20%20%22%2Bd%2Ck%2B%3D%22%5Cr%5CnID%3A%20%20%20%20%20%20%22%2Bf%2Ck%2B%3D%22%5Cr%5CnUser%3A%20%20%20%20%22%2Bg%2Ck%2B%3D%22%5Cr%5CnLikedOn%3A%20%22%2Bh%2Ck%2B%3Dl%3Bvar%20p%3DparseFloat((new%20Date).getTime()-a.getTime()).toFixed(2)%2B%22%20seconds%22%2Cq%3D%22%22%3Bq%2B%3Da%3Bq%2B%3D%22%5Cr%5CnTime%3A%20%20%20%20%22%2Bp%3Bq%2B%3Dl%3Bk%3Dq%2Bk%3Bvar%20r%3Da.toISOString()%3Br%3Dr.replace(%2F%5B%3A%5C-%5C.%5D%2Fgi%2C%22%22)%3Br%3Dr.replace(%2F%5BTZ%5D%2F%2C%22_%22)%3Br%3D%22Log%20%22%2Br%2B%22.txt%22%3Bvar%20u%3Ddocument.createElement(%22a%22)%3Bu.download%3Dr%3Bu.href%3Dwindow.URL.createObjectURL(new%20Blob(%5Bk%5D%2C%7Btype%3A%22text%2Fplain%22%7D))%3Bu.click()%3Bfunction%20n(t%2Cv)%7Bvar%20e%3Ddocument.createElement(%22a%22)%3Be.href%3Dt%3Be.target%3D%22_blank%22%3Be.download%3Dv%7C%7Ct%3Bvar%20w%3Dnew%20MouseEvent(%22click%22%2C%7Bview%3Awindow%2Cbubbles%3A!0%2Ccancelable%3A!0%7D)%3Be.dispatchEvent(w)%3B(window.URL%7C%7Cwindow.webkitURL).revokeObjectURL(e.href)%7D%7D)()
