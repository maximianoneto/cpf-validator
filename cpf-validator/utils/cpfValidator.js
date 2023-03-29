// utils/cpfValidator.js
export function checkCPF(cpf) {
    console.log('Iniciando verificação do CPF:', cpf);
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11) {
      console.log('CPF com tamanho incorreto:', cpf);
      return false;
    }
  
    let sum;
    let rest;
    sum = 0;
  
    if (cpf === '00000000000') {
      console.log('CPF composto apenas por zeros');
      return false;
    }
  
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    rest = (sum * 10) % 11;
  
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
  
    if (rest !== parseInt(cpf.substring(9, 10))) {
      console.log('Primeiro dígito verificador incorreto');
      return false;
    }
  
    sum = 0;
  
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    rest = (sum * 10) % 11;
  
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
  
    if (rest !== parseInt(cpf.substring(10, 11))){
        console.log('Segundo dígito verificador incorreto');
        return false;
    }
        console.log('CPF válido:', cpf);
        return true;
}        