
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Agradezco cada instante a tu lado, tu sonrisa, tus abrazos y tu amor. Contigo, todo es más bonito. Gracias por ser tú y por hacerme sentir afortunado/a.

Te amo con todo mi corazón. Siempre estaré aquí para ti, porque eres mi hogar y mi destino.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
