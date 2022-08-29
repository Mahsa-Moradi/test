const generateBtn=document.querySelector('form button')
const qrCodeBox=document.querySelector('.qr-code ')
const qrInput=document.querySelector('form input');
const qrImage=document.querySelector('.qr-code img')

generateBtn.addEventListener('click' , () =>{
let qrValue = qrInput.Value;
if(!qrValue){
    return alert('Please input a url and text ... ')
}
generateBtn.innerHTML='Loading QR code ... '

qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}'

qrImage.addEventListener('load' , ()=> {
    qrCodeBox.classList.remove('hidden')
    generateBtn.innerHTML='Make QR code '
})
})
// ..........
qrInput.addEventListener('keyup' , ()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden')
    }
})
