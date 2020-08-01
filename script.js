window.onload = function () {
  const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const statesBox = document.querySelector('.states');
  for (let  i = 0; i < states.length; i += 1) {
    let options = document.createElement('option');
    options.innerHTML = states[i];
    statesBox.appendChild(options);
  }
}