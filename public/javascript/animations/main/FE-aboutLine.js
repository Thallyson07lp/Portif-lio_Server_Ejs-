export function wrapLines(el, delayInicial = 0) {
  const texto = el.innerText;
  const palavras = texto.split(' ').filter(p => p !== '');

  // acessibilidade — leitor de tela lê o texto original
  el.setAttribute('aria-label', texto);

  el.innerHTML = '';

  palavras.forEach((palavra, i) => {
    const teste = i < palavras.length - 1;
    let linhaAtual = document.createElement('span');

    el.appendChild(linhaAtual);
    linhaAtual.innerText = palavra;

    // performance — avisa o browser que vai animar
    linhaAtual.style.willChange = 'transform, opacity';
  });

  el.querySelectorAll('span').forEach((linha, i) => {
    linha.classList.add('linha');
    linha.style.animationDelay = `${delayInicial + i * .03}s`;
  });

  // pega o último span e quando ele terminar de animar limpa tudo
  const spans = el.querySelectorAll('span');
  const ultimoSpan = spans[spans.length - 1];

  ultimoSpan.addEventListener('animationend', () => {
    const textoOriginal = [...el.querySelectorAll('span')]
      .map(span => span.textContent)
      .join(' ');

    el.innerHTML = textoOriginal;
    el.removeAttribute('aria-label'); // remove após animação
  });
}