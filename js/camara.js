const btnStartCamara = document.querySelector('[data-video-botao]');
const campoCamara = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const opturador = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensaje = document.querySelector('[data-mensagem]');
const btnSendPic = document.querySelector('[data-enviar]');

let imagemURL = '';

btnStartCamara.addEventListener('click', async function(){

    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    btnStartCamara.style.display = 'none';
    campoCamara.style.display = 'block';

    video.srcObject = startVideo;
} )

opturador.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL('imagem/jpeg');
    campoCamara.style.display = 'none';
    mensaje.style.display = 'block';
})

btnSendPic.addEventListener('click', () => {
    const recibirDatosExistentes =  localStorage.getItem('cadastro');
    const respuestaConvertida = JSON.parse(recibirDatosExistentes)

    respuestaConvertida.imagem = imagemURL;
    localStorage.setItem('cadastro', JSON.stringify(respuestaConvertida))
    console.log(respuestaConvertida)

    window.location.href = './abrir-conta-form-3.html'
})
