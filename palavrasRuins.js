function tiraPalavrasRuins(palavras) {
  export const PALAVRAS_RUINS = new Set([
  "que",

  "para",

  "com",

  "não",

  // restante da lista...
]);

  const palavrasBoas = [];

  for (let palavra of palavras) {
    if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
      palavrasBoas.push(palavra);
    }
  }

  return palavrasBoas;
}