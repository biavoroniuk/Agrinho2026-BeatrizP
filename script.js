document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        // Impede a página de recarregar
        event.preventDefault();

        // Pega os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Aqui você integraria com um servidor. Por enquanto, faremos um efeito visual:
        if (nome && email) {
            alert(`Obrigado pelo contato, ${nome}! Nossa equipe do Agro Sustentável responderá em breve no e-mail: ${email}.`);
            
            // Limpa o formulário
            form.reset();
        }
    });
});