export default function esMayorDeEdad(campo){
  const dataNacimiento = new Date(campo.value);
  if(!validaEdad(dataNacimiento)){
    campo.setCustomValidity('el usuario es menor de edad')
  }
  validaEdad(dataNacimiento)
}

function validaEdad(data){
  const dataActual = new Date();
  const mayor18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataActual >= mayor18;
}
