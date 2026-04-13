function adjustContactsPadding() {
  const section = document.getElementById("contacts");
  const title = document.getElementById("contacts-title");

  const titleTop = title.offsetTop;

  // espaço extra antes do título
  const safeGap = 40;

  section.style.paddingTop = `${titleTop - safeGap}px`;
}