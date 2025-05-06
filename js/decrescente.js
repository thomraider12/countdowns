// Função que calcula a contagem regressiva
function contar() {
  const contador = document.getElementById('contador');
  const dataEvento = new Date(contador.getAttribute('data-data'));
  const agora = new Date();
  const tempoRestante = dataEvento - agora;

  // Verificar se o tempo acabou
  if (tempoRestante <= 0) {
    // Substituir os valores de contagem regressiva por texto
    contador.innerHTML = `
      <div class="text-6xl font-bold">Evento Iniciado!</div>
      <div class="text-xl">Chegou o grande dia, este evento já começou!</div>
    `;
    return;
  }

  // Calcular dias, horas, minutos e segundos
  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  // Atualizar os elementos HTML com os novos valores
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

// Atualizar a contagem a cada segundo
setInterval(contar, 1000);