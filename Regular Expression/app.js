document.getElementById('first-name').addEventListener('blur', validateFName);
document.getElementById('second-name').addEventListener('blur', validateSName);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('birthday').addEventListener('blur', validateBirth);
document.getElementById('user-data').addEventListener('submit', (e)=>{
  const allInputs = document.querySelectorAll('input');
  if(allInputs[0].classList.contains('is-valid') && allInputs[1].classList.contains('is-valid') && allInputs[2].classList.contains('is-valid') && allInputs[3].classList.contains('is-valid') && allInputs[4].classList.contains('is-valid')){
    while(document.querySelector('.col-md-6').firstChild){
      document.querySelector('.col-md-6').firstChild.remove();
    }
    document.querySelector('.col-md-6').appendChild(document.createElement('h1')).className='text-center';
    document.querySelector('h1').textContent='Thanks';
  } else {
    alert('Fill all line right');
  }
  e.preventDefault();
});

function validateFName(){
  const fName = document.querySelector('#first-name');
  const re = /^[A-Z][A-Za-z]{2,9}$/;
  if(re.test(fName.value)){
    document.getElementById('first-name').classList.remove('is-invalid');
    document.getElementById('first-name').classList.add('is-valid');
  }else{
    document.getElementById('first-name').classList.add('is-invalid');
    document.getElementById('first-name').classList.remove('is-valid');
  }
}
function validateSName(){
  const sName = document.querySelector('#second-name');
  const re = /^[A-Z][A-Za-z]{2,9}$/;
  if(re.test(sName.value)){
    document.getElementById('second-name').classList.remove('is-invalid');
    document.getElementById('second-name').classList.add('is-valid');
  }else{
    document.getElementById('second-name').classList.add('is-invalid');
    document.getElementById('second-name').classList.remove('is-valid');
  }
}
function validatePhone(){
  const phone = document.querySelector('#phone');
  const re = /^(\+)\d{7,15}$/;
  if(re.test(phone.value)){
    document.getElementById('phone').classList.remove('is-invalid');
    document.getElementById('phone').classList.add('is-valid');
  }else{
    document.getElementById('phone').classList.add('is-invalid');
    document.getElementById('phone').classList.remove('is-valid');
  }
}
function validateEmail(){
  const email = document.querySelector('#email');
  const re = /^[a-z0-9]{2,15}\@[a-z]{2,15}\.[a-z]{1,5}$/;
  if(re.test(email.value)){
    document.getElementById('email').classList.remove('is-invalid');
    document.getElementById('email').classList.add('is-valid');
  }else{
    document.getElementById('email').classList.add('is-invalid');
    document.getElementById('email').classList.remove('is-valid');
  }
}
function validateBirth(){
  const birthday = document.querySelector('#birthday');
  const re = /^\d{2}[\.\\\-\s]\d{2}[\.\\\-\s]\d{4}$/;
  if(re.test(birthday.value)){
    document.getElementById('birthday').classList.remove('is-invalid');
    document.getElementById('birthday').classList.add('is-valid');
  }else{
    document.getElementById('birthday').classList.add('is-invalid');
    document.getElementById('birthday').classList.remove('is-valid');
  }
}
