// Dispara o evento de conversão quando a página carrega
window.addEventListener('load', function() {
    // Aguarda um pouco para garantir que o GTM foi carregado
    setTimeout(function() {
        // Envia evento de compra para o dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'purchase',
            'ecommerce': {
                'transaction_id': 'TXN-' + Date.now(), // ID único da transação
                'value': 89.90,
                'currency': 'BRL',
                'items': [{
                    'item_id': 'PRODUTO-001',
                    'item_name': 'Produto Digital',
                    'category': 'Digital',
                    'quantity': 1,
                    'price': 89.90
                }]
            }
        });
        
        // Log para debug (pode ser removido em produção)
        console.log('Evento de conversão enviado para o GTM');
    }, 1000);
});

