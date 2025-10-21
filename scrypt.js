document.addEventListener('DOMContentLoaded', () => {
    const entradaDeTexto = document.getElementById('entrada-de-texto');
    const botaoGerar = document.getElementById('botao-palavrachave');
    const resultadoDiv = document.getElementById('resultado-palavrachave');

    botaoGerar.addEventListener('click', () => {
        const textoOriginal = entradaDeTexto.value;

        if (textoOriginal.trim() === '') {
            resultadoDiv.textContent = 'Por favor, insira algum texto para gerar as palavras-chave.';
            return;
        }

        // --- COLOCA A LÓGICA DO GERADOR AQUI ---
        // 1. Processar o texto (remover stopwords, pontuação, etc.)
        // 2. Contar a frequência das palavras.
        // 3. Selecionar as mais relevantes.
        
        // Exemplo simples: apenas exibe o texto em maiúsculas por enquanto
        const palavrasChaveFicticias = textoOriginal.toUpperCase().split(' ').slice(0, 5).join(' | ');

        resultadoDiv.textContent = `Palavras-Chave Sugeridas: ${palavrasChaveFicticias}`;
    });
});