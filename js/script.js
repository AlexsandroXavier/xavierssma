// MENU HAMBURGUER
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const icon = toggle?.querySelector('i');

function setMenuOpen(isOpen) {
    if (!nav) return;

    nav.classList.toggle('active', isOpen);
    toggle?.setAttribute('aria-expanded', String(isOpen));

    if (icon) {
        icon.classList.toggle('fa-xmark', isOpen);
        icon.classList.toggle('fa-bars', !isOpen);
    }
}

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        setMenuOpen(!nav.classList.contains('active'));
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuOpen(false);
    });
}
 
// EFEITO SCROLL NO HEADER
const header = document.querySelector('header');

function updateHeaderOnScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 50);
}

updateHeaderOnScroll();
window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

// FORMULARIO

document.addEventListener("DOMContentLoaded", function () {

    console.log(emailjs);

    emailjs.init("k3hVRiACelnZCSFMk");

    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        console.log("enviando...");

        emailjs.sendForm("service_89gmcmd", "template_opcjhaf", this)
            .then(() => {

                // 👉 limpa o formulário
                form.reset();

                // 👉 substitui o conteúdo por mensagem de sucesso
                document.querySelector(".formulario").innerHTML = `
                    <h2>Mensagem enviada com sucesso!</h2>
                    <p>Em breve entraremos em contato com você.</p>
                `;

            })
            .catch(function(error) {
                console.log("ERRO COMPLETO:", error);

                document.querySelector(".formulario").innerHTML = `
                    <h2>Erro ao enviar</h2>
                    <p>Tente novamente ou entre em contato pelo WhatsApp.</p>
                `;
            });
    });

});