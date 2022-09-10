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
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

Contacts_button.onclick = async function(event){
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
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

Zahvat_button.onclick = async function(event){
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
  
  CorrectFunction()
  jQuery('.input_cleaer').val('');
  jQuery('#Modal').fadeOut();
}

/*/FORM*/