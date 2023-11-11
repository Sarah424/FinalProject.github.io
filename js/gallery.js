/*Name this external file gallery.js*/

function addTabIndex(){
    var images = document.querySelectorAll('img');       
    images.forEach(function (image, index) {
        console.log(image.alt);
            image.tabIndex = index + 1; 
        });
}

function upDate(previewPic) {
  document.getElementById("image").style.backgroundImage =
    "url(" + previewPic.src + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage =
    "url(" + '' + ")";
  document.getElementById("image").innerHTML = "Hover over an image below to display here";
}
