document.addEventListener('DOMContentLoaded', function() {
    // Simulador de consumo
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    const consumoKwh = document.getElementById('consumoKwh');
    const custo = document.getElementById('custo');
    
    // Valores de potência em Watts
    const potencias = {
        lampada: 10,
        chuveiro: 5500,
        tv: 100,
        geladeira: 50
    };
    
    // Nomes para exibição
    const nomesEletro = {
        lampada: "Lâmpada LED",
        chuveiro: "Chuveiro elétrico",
        tv: "TV LED 42\"",
        geladeira: "Geladeira"
    };
    
    // Evento de cálculo
    calcularBtn.addEventListener('click', function() {
        const eletrodomestico = document.getElementById('eletrodomestico').value;
        const horas = parseFloat(document.getElementById('horas').value);
        const dias = parseInt(document.getElementById('dias').value);
        const tarifa = parseFloat(document.getElementById('tarifa').value);
        
        if (!eletrodomestico || isNaN(horas) || isNaN(dias) || isNaN(tarifa)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }
        
        // Cálculo do consumo
        const potencia = potencias[eletrodomestico];
        const consumo = (potencia * horas * dias) / 1000;
        const custoTotal = consumo * tarifa;
        
        // Exibir resultados
        consumoKwh.textContent = `Consumo mensal de ${nomesEletro[eletrodomestico]}: ${consumo.toFixed(2)} kWh`;
        custo.textContent = `Custo estimado: R$ ${custoTotal.toFixed(2)}`;
        
        resultadoDiv.style.display = 'block';
    });
    
    // Botão de imprimir checklist
    const imprimirChecklist = document.getElementById('imprimirChecklist');
    if (imprimirChecklist) {
        imprimirChecklist.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Botão de alto contraste
    const toggleContrast = document.createElement('button');
    toggleContrast.textContent = 'Alto Contraste';
    toggleContrast.style.position = 'fixed';
    toggleContrast.style.bottom = '20px';
    toggleContrast.style.right = '20px';
    toggleContrast.style.zIndex = '1000';
    toggleContrast.style.padding = '10px';
    toggleContrast.style.backgroundColor = '#000';
    toggleContrast.style.color = '#fff';
    toggleContrast.style.border = 'none';
    toggleContrast.style.borderRadius = '5px';
    toggleContrast.style.cursor = 'pointer';
    
    toggleContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
    
    document.body.appendChild(toggleContrast);
});

// Estilos de alto contraste
const highContrastStyles = `
.high-contrast {
    background-color: #000 !important;
    color: #fff !important;
}

.high-contrast header,
.high-contrast nav,
.high-contrast footer {
    background-color: #000 !important;
    color: #ff0 !important;
    border: 2px solid #ff0 !important;
}

.high-contrast a {
    color: #0ff !important;
}

.high-contrast button {
    background-color: #000 !important;
    color: #ff0 !important;
    border: 2px solid #ff0 !important;
}

.high-contrast section {
    background-color: #000 !important;
    color: #fff !important;
    border: 2px solid #ff0 !important;
}

.high-contrast .curiosidade-card {
    background-color: #333 !important;
    border: 2px solid #ff0 !important;
}
`;

const styleElement = document.createElement('style');
styleElement.textContent = highContrastStyles;
document.head.appendChild(styleElement);