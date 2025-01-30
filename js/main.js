
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Agradezco cada instante a tu lado, tu sonrisa, tus abrazos y tu amor. Contigo, todo es más bonito. Gracias por ser tú y por hacerme sentir afortunado, te amo con todo mi ser, siempre estare aquí para tí.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); // 50ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 50);
};
