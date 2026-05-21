let contador = 0;
let totalEstoqueBaixo = 0;
 
let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";
 
let continuar = true;
 
const botaocadastro = document.getElementById("cadastro");
const botaoSobre = document.getElementById("sobre");
 
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}
 
function validarEntrada(texto) {
 
    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida. Digite novamente:");
    }
 
    return texto.trim();
}
 
function validarNumero(numero) {
 
    while (isNaN(numero) || numero < 0) {
        numero = Number(prompt("Digite um número válido:"));
    }
 
    return numero;
}
 
function classificarVinho(safra) {
 
    let anoAtual = 2026;
    let idade = anoAtual - safra;
 
    if (idade <= 5) {
        return "Vinho Jovem";
    }
    else if (idade <= 15) {
        return "Vinho Amadurecido";
    }
    else {
        return "Vinho Antigo";
    }
}
 
function mostrarDados(nome, tipo, safra, quantidade, classificacao) {
 
    console.log("===== DADOS DO VINHO =====");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);
 
    if (estoqueBaixo(quantidade)) {
        console.log("⚠️ Estoque baixo!");
        alert("ATENÇÃO: Estoque baixo do vinho " + nome);
    }
}
 
botaocadastro.addEventListener("click", function () {
 
    let continuar = true;
 
    while (continuar) {
 
        let nome = validarEntrada(
            prompt("Digite o nome do vinho:")
        );
 
        let tipo = validarEntrada(
            prompt("Digite o tipo do vinho:")
        );
 
        let safra = validarNumero(
            Number(prompt("Digite a safra do vinho:"))
        );
 
        let quantidade = validarNumero(
            Number(prompt("Digite a quantidade em estoque:"))
        );
 
        let classificacao = classificarVinho(safra);
 
        mostrarDados(
            nome,
            tipo,
            safra,
            quantidade,
            classificacao
        );
 
        contador++;
 
        if (estoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }
 
        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            vinhoMaisAntigo = nome;
        }
 
        let resposta = validarEntrada(
            prompt("Deseja cadastrar outro vinho? (sim/não)")
        );
 
        if (resposta.toLowerCase() !== "sim") {
            continuar = false;
        }
    }
 
    alert(
        "===== RELATÓRIO FINAL =====" +
        "\nTotal de vinhos cadastrados: " + contador +
        "\nTotal com estoque baixo: " + totalEstoqueBaixo +
        "\nVinho mais antigo: " + vinhoMaisAntigo +
        "\nSafra mais antiga: " + safraMaisAntiga
    );
});
 
 
 
function mostrarVinho1() {
    alert(
        "Aice di Tmesco\n\n" +
        "Vinho originário da Itália.\n" +
        "Possui sabor suave com notas de frutas tropicais."
    );
}
 
function mostrarVinho2() {
    alert(
        "Viales di Denrs\n\n" +
        "Vinho produzido em Mendoza, na Argentina.\n" +
        "Possui sabor intenso e encorpado."
    );
}
 