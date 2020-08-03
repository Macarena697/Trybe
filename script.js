window.onload = function () {
  //  Criando <option> com os estados do Brasil
  const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const statesBox = document.querySelector('.states');
  for (let  i = 0; i < states.length; i += 1) {
    let options = document.createElement('option');
    options.innerHTML = states[i];
    statesBox.appendChild(options);
  }
  //  Validando date
  let validateDate = false;
  let buttonSave = document.querySelector('#button-save');
  buttonSave.addEventListener('click', function () {
    let date = document.querySelector('#date').value;
    date = date.split('-');
    if (date[0] >= 0 && date[1] > 0 && date[1] < 13 && date[2] > 0 && date[2] < 32) {
      validateDate = true;
    }
    if (validateDate === false) {
      alert('A data ingresada esta errada');
    }
    //const myForm = document.forms["my-form"];
    //let showPart = document.querySelector('#show-part')
    //showPart.appendChild(myForm);
  });
};