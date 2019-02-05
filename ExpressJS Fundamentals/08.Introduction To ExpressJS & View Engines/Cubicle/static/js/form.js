$(() => {
  let form = $('#create-form');
  let msgs = $('#msgs');
  // var form = document.querySelector('#create-form');
  // var data = new FormData(form);
/*
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
*/
  form.submit((e) => {
    e.preventDefault();

    $(msgs).empty();

    let formData = $(form).serializeArray();
    let pairs = {};

    for(let pair of formData) {
      pairs[pair.name] = pair.value
    }

    $.post('/create', pairs, function(res){
        console.log(res);
        if(res.invalidForm) {
          for(let msg in res.invalidFormMsgs) {
            $(msgs).append(`<div class="alert alert-warning" role="alert">${res.invalidFormMsgs[msg]}</div>`)
          }
          return;
        }

        if(res.hasErrors) {
          for(let msg in res.errors) {
            $(msgs).append(`<div class="alert alert-danger" role="alert">${res.errors[msg]}</div>`)
          }
          return;
        }

window.location.href = res.redirect;
    });
  })

});
