modal = document.getElementById('Modal');

window.onclick = function(event){
  if(event.target == modal){
    $('#Modal').fadeOut();
  }
}

$('#Modal_close').click(function(){
  $("#Modal").fadeOut();
});

$("#header_button").click(function(){
  $("#Modal").fadeIn();
});

$("#Sheme_button").click(function(){
  $("#Modal").fadeIn();
});

$('#header_mobile_button').click(function(){
  $("#Modal").fadeIn();
});

var i = 0;
$('#mobile_button').click(function(){
  if(i == 0){
    $('#phone_links').css({'right': '0'});
    i = 1;
  }
  else{
    $('#phone_links').css({'right': '-100%'});
    i = 0;
  }
});


/*FORM*/

function CorrectFunction(){
  $("#Correct").fadeIn();
  setTimeout(function () {
    $("#Correct").fadeOut();
  }, 3000);
};

modal_button.onclick = async function(event){
  if (inputName.value.length < 3 || inputName.value.length > 30 || inputName.value.split(' ').length > 2 || !/^[+]998([012345789][012345789]|6[125679]|7[01234569])[0-9]{7}$/.test(inputPhone.value)) {
    Correct.innerText = 'Неправильный ввод'
    Correct.style.background = 'red'
  } else {
    let response = await requestJSON('/sendPhone', 'POST', {
      username: inputName.value,
      phone: inputPhone.value
    })
    
    if (response?.status == 200) {
      Correct.style.background = '#3ab51f'
      Correct.innerText = 'Ваше сообщение отправлено'
    } else {
      Correct.innerText = 'Неправильный ввод'
      Correct.style.background = 'red'
    }
  }
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

Contacts_button.onclick = async function(event){
  if (emailName.value.length < 3 || emailName.value.length > 30 || emailName.value.split(' ').length > 2 || !/^[+]998([012345789][012345789]|6[125679]|7[01234569])[0-9]{7}$/.test(emailPhone.value) || emailMessage.value.length < 10) {
    Correct.innerText = 'Неправильный ввод'
    Correct.style.background = 'red'
  } else {
    
    let response = await requestJSON('/sendEmail', 'POST', {
      username: emailName.value,
      phone: emailPhone.value,
      message: emailMessage.value
    })
    if (response?.status == 200) {
      Correct.style.background = '#3ab51f'
      Correct.innerText = 'Ваше сообщение отправлено'
    } else {
      Correct.innerText = 'Неправильный ввод'
      Correct.style.background = 'red'
    }
  }
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

Zahvat_button.onclick = async function(event){
  if (!/^[+]998([012345789][012345789]|6[125679]|7[01234569])[0-9]{7}$/.test(zahvatPhone.value) || !['Пошить', 'Лекала', 'Принт', 'Вышивка', 'Консультация'].includes(option.value)) {
    Correct.innerText = 'Неправильный ввод'
    Correct.style.background = 'red'
  } else {
    let response = await requestJSON('/sendMessage', 'POST', {
      message: option.value,
      phone: zahvatPhone.value
    })
    
    if (response?.status == 200) {
      Correct.style.background = '#3ab51f'
      Correct.innerText = 'Ваше сообщение отправлено'
    } else {
      Correct.innerText = 'Неправильный ввод'
      Correct.style.background = 'red'
    }
  }
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

/*/FORM*/