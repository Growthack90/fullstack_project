const fraseGandhi = [
    "Un pianeta migliore è un sogno che inizia a realizzarsi quando ognuno di noi decide di migliorare se stesso.",
    "Serenità è quando ciò che dici, ciò che pensi, ciò che fai, sono in perfetta armonia.",
    "Voi occidentali, avete l’ora ma non avete mai il tempo.",
    "Un uomo può uccidere un fiore, due fiori, tre… Ma non può contenere la primavera.",
    "Se urli tutti ti sentono, se bisbigli solo chi è vicino, ma se stai in silenzio, solo chi ti ama ti ascolta."
];
const frasiGandhi = () => {
    const indice = Math.floor(Math.random()*5);
    return fraseGandhi [indice];
};

module.exports = frasiGandhi;