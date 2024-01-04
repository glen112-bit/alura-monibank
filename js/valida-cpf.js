export default function ehUmCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, "")
  if(validaNumerosRepetidos(cpf) || validaPrimerDigito(cpf) || validaSegundoDigito(cpf)){
    campo.setCustomValidity('el cpf no es valido')
  }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]
    return numerosRepetidos.includes(cpf)
}

function validaPrimerDigito(cpf){
  let suma = 0;
  let multiplicador = 10;

  for(let tamaño = 0; tamaño < 9; tamaño++) {
    suma += cpf[tamaño] * multiplicador;
    multiplicador--;
  }
  suma = (suma * 10) % 11;

  if( suma == 10 || suma == 11 ) {
    suma = 0;
  }
  return suma != cpf[9]
}

function validaSegundoDigito(cpf){
  let suma = 0;
  let multiplicador = 10;

  for(let tamaño = 0; tamaño < 10; tamaño++) {
    suma += cpf[tamaño] * multiplicador;
    multiplicador--;
  }
  suma = (suma * 10) % 11;

  if( suma == 10 || suma == 11 ) {
    suma = 0;
  }
  return suma != cpf[10]
}
