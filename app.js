// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
	
	cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    
	// cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    // cameraOutput.src = cameraSensor.toDataURL("image/webp");
    // cameraOutput.classList.add("taken");
    
	
	
	var ctx = cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
	console.log(ctx)
	var imgData = cameraSensor.getContext("2d").getImageData(0, 0, cameraSensor.width, cameraSensor.height);

	// invert colors
	var sumaPixelsR = 0;
	var sumaPixelsG = 0;
	var sumaPixelsB = 0;
	var contPixels = 0;
	for (var i = 0; i < imgData.data.length; i += 4) {
	  sumaPixelsR = sumaPixelsR+imgData.data[i];
	  sumaPixelsG = sumaPixelsG+imgData.data[i+1];
	  sumaPixelsB = sumaPixelsB+imgData.data[i+2];
	  contPixels=contPixels+1;
	}
	var mediaPixelsR=sumaPixelsR/contPixels
	var mediaPixelsG=sumaPixelsG/contPixels
	var mediaPixelsB=sumaPixelsB/contPixels
	msg=document.getElementById("message");
	if (msg.style.display == 'none'){
		msg.style.display = 'block'
		msg.innerHTML=mediaPixelsR + ' ; ' +mediaPixelsG + ' ; ' +mediaPixelsB + ' ; '
	}
	
	// ctx.putImageData(imgData, 0, 0);
	
	
	cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    
    // track.stop();
};

// var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception
// window.location.href=image;

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);