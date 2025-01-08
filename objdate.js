const agora = new Date();

dia = agora.getDate()
mes = agora.getMonth() + 1;
ano = agora.getFullYear()
hora = agora.getHours()
minuto = agora.getMinutes()

const mensagem = `Hoje é ${dia}/${mes}/${ano} e agora são ${hora}:${minuto}.`;

console.log(mensagem)