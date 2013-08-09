
function appList()
{/*
var pics = navigator.getDeviceStorage('pictures');

// Let's browse all the images available
var cursor = pics.enumerate();

cursor.onsuccess = function () {
  var file = this.result;
  console.log("File found: " + file.name);

  // Once we found a file we check if there is other results
  if (!this.done) {
  console.log("done");
    // Then we move to the next result, which call the cursor
    // success with the next file as result.
    this.continue();
  }
}

cursor.onerror = function () {
  console.warn("No file found: " + this.error);
}*/

var sdcard = navigator.getDeviceStorage('sdcard');

var request = sdcard.get("Chrono.exe");

request.onsuccess = function () {
  var file = this.result;
  console.log("Get the file: " + file.name);
}

request.onerror = function () {
  console.warn("Unable to get the file: " + this.error);
}
}

function pickHTML()
{
alert("pickFile called");
var pick = new MozActivity({
   name: "pick",
   data: {
	   type: ["text/html"]
   } 
});

pick.onsuccess = function () {
	var sec = document.getElementById("list");
	 var f = new FileReader(); 
	 f.readAsText(this.result.blob); 
	 f.onload = function(evt) {
	 alert("File received successfully.");
	 sec.innerHTML=evt.target.result;
	 }
};
 
pick.onerror = function () {
    // If an error occurred or the user canceled the activity
    alert("pick failed");
};
}


function pickImageFile()
{
var pick = new MozActivity({
   name: "pick",
   data: {
       type: ["image/png", "image/jpg", "image/jpeg"]
   }
});

pick.onsuccess = function () {
    var img = document.createElement("img");
	var sec = document.getElementById("list");
    img.src = window.URL.createObjectURL(this.result.blob);
    sec.appendChild(img);
};
 
pick.onerror = function () {
    // If an error occurred or the user canceled the activity
    alert("Can't view the image!");
};
}
