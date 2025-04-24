// Voltar ao topo
document.getElementById("voltarTopo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mudar tema
function trocarTema() {
    document.body.classList.toggle("tema-escuro");
}

