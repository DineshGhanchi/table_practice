
const toastBox = document.querySelector('#toastBox');
const addButtton = document.querySelector('#addToast');
const input = document.querySelector('#input');
const checkBox = document.querySelector('#cancel');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const Duration = document.querySelector('#duration');

addButtton.addEventListener('click', ()=>{
     let toast = document.createElement('div');
     toast.innerText = input.value;
     toast.classList.add('toast');
    
     toastBox.append(toast);
     setTimeout(() =>{
          toast.remove();
     }, Duration.value)

     input.value = '';

      console.log(checkBox.checked);
      console.log(success.checked);
      console.log(error.checked);
    
     if(checkBox.checked && success.checked){
          let xmark = document.createElement('i');
          // <i class="fa-solid fa-xmark"></i>
          xmark.classList.add('fa-solid fa-xmark');
          toast.append(xmark);

          toast.style.backgroundColor = 'green';
          toast.style.color = 'white';
     }
     else if(checkBox.checked && error.checked){
          let xmark = document.createElement('i');
          // <i class="fa-solid fa-xmark"></i>
          xmark.classList.add('fa-solid fa-xmark');
          toast.append(xmark);

          toast.style.backgroundColor = 'red';
          toast.style.color = 'white';
     }
     else if(checkBox.checked){
          let xmark = document.createElement('i');
          // <i class="fa-solid fa-xmark"></i>
          xmark.classList.add('fa-solid fa-xmark');
          toast.append(xmark);
     }

    
})