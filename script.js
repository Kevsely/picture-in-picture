var videoPlayer = document.getElementById("video");
var button = document.getElementById("button");

// Load media devices
async function loadMedia() {
    try {
        // Getting all display media
        const media = await navigator.mediaDevices.getDisplayMedia();
        // Binding the selected media to the video player and start playing
        videoPlayer.srcObject = media;
        videoPlayer.onloadedmetadata = () => {
            videoPlayer.play();
        }
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button to prevent multiple request
    button.disable = true;
    // Activating PIP mode
    await videoPlayer.requestPictureInPicture();
    // Then reactivvating the button
    button.disable = false;
})

loadMedia();