function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
var isiPad = navigator.userAgent.match(/iPad/i) != null;
if((window.matchMedia("(max-width: 1200px)").matches) || (isiPad)) {
    // the width of browser is more then 700px
//loadjscssfile("app/js/lib/libgif.min.js", "js") //dynamically load and add this .js file
loadjscssfile("mobile.min.js", "js") //dynamically load and add this .js file 
}
if(window.matchMedia("(min-width: 1201px)").matches) {
    // the width of browser is more then 700px
loadjscssfile("function.min.js", "js") //dynamically load and add this .js file
    
}
