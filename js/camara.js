const btnStartCamara = document.querySelector('[data-video-botao]');
const campoCamara = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');

btnStartCamara.addEventListener('click', async function(){

    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    btnStartCamara.style.display = 'none';
    campoCamara.style.display = 'block';

    video.srcObject = startVideo;
} )
