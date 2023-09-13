const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt the user to select a media stream then pass to video element then play.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //wait until the user select the window to share
        videoElement.srcObject = mediaStream; //pass the media stream selected as source object
        videoElement.onloadedmetadata = () => { //when video load its metadata call the function to play video
            videoElement.play();//play video
        }
    } catch (error) {
        //Catch errors here
        alert('Oooops error in selectMediaStream function', error)
    }
}

button.addEventListener('click', async () => {
    //Disable START button when we click on it
    button.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream()