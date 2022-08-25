// $(document).ready(function(){
// $('#submit-1').click(function(){

// })
// })
// .........................
const copysubmit = document.querySelector("#submit-1");
const textarea = document.querySelector("#textarea-1");

copysubmit.addEventListener('click', ()=> {
  textarea.select();
  let textvalue = textarea.value;
  // console.log(textvalue);
  navigator.clipboard.writeText(textvalue)
  copysubmit.innerText = "Success"
  copysubmit.style.backgroundcolor = "rgb(35, 124, 248)"

  setTimeout(()=> {
    copysubmit.innerText = "Copy text"
    copysubmit.style.backgroundcolor = "rgb(137, 189, 249)"
  }, 1500);
})
