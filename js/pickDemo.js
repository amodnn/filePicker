function pickFile()
{
alert("pickFile called");
var pick = new MozActivity({
   name: "pick",
   data: {
	   type: ["text/html"]
   } 
});

pick.onsuccess = function () {
	var sec = document.getElementById("contentE");
	 var f = new FileReader(); 
	 f.readAsText(this.result.blob); 
	 f.onload = function(evt) {
	 alert("File received successfully.");
	 sec.innerHTML=sec.innerHTML+""+evt.target.result;
	 }
};
 
pick.onerror = function () {
    // If an error occurred or the user canceled the activity
    alert("pick failed");
};
}

function pickImageFile()
{
alert("function called");
var pick = new MozActivity({
   name: "pick",
   data: {
       type: ["image/png", "image/jpg", "image/jpeg"]
   }
});

pick.onsuccess = function () {
    var img = document.createElement("img");
	var sec = document.getElementById("contentE");
    img.src = window.URL.createObjectURL(this.result.blob);
    sec.appendChild(img);
};
 
pick.onerror = function () {
    // If an error occurred or the user canceled the activity
    alert("Can't view the image!");
};
}