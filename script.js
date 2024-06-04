let exchangeRate = 0;

// Função para buscar a taxa de câmbio da API
async function fetchExchangeRate() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/CHAVE-API/latest/USD');
        const data = await response.json();
        exchangeRate = data.conversion_rates.BRL;
    } catch (error) {
        console.error('Erro ao buscar a taxa de câmbio:', error);
    }
}

// Função para converter de Real para Dólar
function convertToDollar() {
    const realValue = document.getElementById('real').value;
    const dollarValue = (realValue / exchangeRate).toFixed(2);
    document.getElementById('dollar').value = dollarValue;
}

// Função para converter de Dólar para Real
function convertToReal() {
    const dollarValue = document.getElementById('dollar').value;
    const realValue = (dollarValue * exchangeRate).toFixed(2);
    document.getElementById('real').value = realValue;
}

// Buscar a taxa de câmbio quando a página carregar
window.onload = fetchExchangeRate;
