
// Textos específicos para cada produto
const textosOriginais = {
    peanut: {
        nome: "PEANUT BUTTER",
        descricao: "Feita apenas com amendoins selecionados, oferece uma cremosidade natural e um sabor autêntico. 100% amendoim, sem açúcar e sem aditivos, preservando o que há de melhor no ingrediente. Rica em nutrientes, é uma escolha elegante e saudável para quem valoriza qualidade superior a cada colherada.",
        cor: "linear-gradient(135deg, #8B4513, #A0522D)",
        corDestaque: "#8B4513"
    },
    molina: {
        nome: "MOLINA TRADICIONAL",
        descricao: "Pasta artesanal feita com farinha de mandioca, amendoim torrado e castanha de caju selecionados. Uma receita tradicional que combina a crocância das castanhas com o sabor único da mandioca. Ingredientes naturais e processo artesanal para um produto de qualidade superior.",
        cor: "linear-gradient(135deg, #D2691E, #E8C39E)",
        corDestaque: "#D2691E"
    }
};

// Configurações do usuário
let configUsuario = {
    fundo: {
        imagem: null,
        intensidadeBlur: 3,
        opacidade: 40
    },
    logo: null,
    textoPersonalizado: null,
    validade: "",
    localizacao: "",
    gramagem: {
        quantidade: 500,
        unidade: "g",
        tipoPeso: "liquido"
    }
};

// Função para formatar a gramagem
function formatarGramagem(config) {
    const { quantidade, unidade, tipoPeso } = config.gramagem;
    let tipoTexto = "";

    switch (tipoPeso) {
        case "liquido":
            tipoTexto = "PESO LÍQUIDO";
            break;
        case "bruto":
            tipoTexto = "PESO BRUTO";
            break;
        case "drenado":
            tipoTexto = "PESO DRENADO";
            break;
    }

    return `${tipoTexto} ${quantidade}${unidade}`;
}

// Rótulos Premium
const rotulos = [
    {
        id: 1,
        nome: "Luxo Dourado - PEANUT BUTTER",
        tipo: "vertical",
        categoria: "peanut",
        descricao: "Manteiga de amendoim",
        cor: textosOriginais.peanut.cor,
        html: (config, downloadMode = false) => {
            const texto = config.textoPersonalizado || textosOriginais.peanut.descricao;
            const hasFundo = config.fundo.imagem && !downloadMode;
            const hasLogo = config.logo;
            const validade = config.validade;
            const localizacao = config.localizacao;
            const gramagem = formatarGramagem(config);

            // Para download, usar fundo sólido em vez de imagem
            const backgroundStyle = downloadMode
                ? 'background: linear-gradient(135deg, #1a0f08, #3A2718)'
                : (hasFundo
                    ? `background: linear-gradient(rgba(58, 39, 24, ${config.fundo.opacidade / 100}), rgba(90, 71, 55, ${config.fundo.opacidade / 100})), url('${config.fundo.imagem}')`
                    : 'background: linear-gradient(135deg, #1a0f08, #3A2718)');

            return `
                        <div style="width: 400px; height: 600px; ${backgroundStyle}; background-size: cover; background-position: center; border: 4px solid #D4AF37; border-radius: 25px; padding: 40px; position: relative; overflow: hidden; color: #F4E4A6; font-family: 'Playfair Display';">
                            ${hasFundo ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: inherit; filter: blur(${config.fundo.intensidadeBlur}px);"></div>` : ''}
                            <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                                <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: linear-gradient(90deg, #D4AF37, #F4E4A6, #D4AF37);"></div>
                                
                                <div style="text-align: center; margin-bottom: 20px; position: relative;">
                                    ${hasLogo ?
                    `<img src="${config.logo}" style="height: 80px; width: auto; margin: 0 auto 10px; display: block;" onerror="this.style.display='none'">` :
                    `<div style="font-size: 48px; font-weight: 700; color: #D4AF37; letter-spacing: 4px; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">DAIWESY</div>`
                }
                                    <div style="font-size: 24px; color: ${textosOriginais.peanut.corDestaque}; font-weight: 600; margin-bottom: 10px;">${textosOriginais.peanut.nome}</div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, #D4AF37, transparent); margin: 15px 0;"></div>
                                </div>

                                <div style="background: rgba(212, 175, 55, 0.1); padding: 20px; border-radius: 15px; border: 1px solid #D4AF37; margin: 10px 0; flex-grow: 1; display: flex; align-items: center;">
                                    <div style="font-size: 12px; color: #F4E4A6; line-height: 1.6; text-align: justify; width: 100%;">${texto}</div>
                                </div>

                                <div style="margin-top: auto; text-align: center;">
                                    <div style="background: ${textosOriginais.peanut.corDestaque}; color: #F4E4A6; padding: 8px 20px; border-radius: 20px; font-weight: 700; display: inline-block; margin-bottom: 15px;">100% NATURAL</div>
                                    <div style="font-size: 14px; color: #F4E4A6;">
                                        ${gramagem}
                                        ${validade ? `<br><span class="selo-validade">VALIDADE: ${validade}</span>` : ''}
                                        ${localizacao ? `<br><span style="font-size: 12px;">📍 ${localizacao}</span>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        }
    },
    {
        id: 2,
        nome: "Herança Familiar - MOLINA",
        tipo: "vertical",
        categoria: "molina",
        descricao: "Molina tradicional",
        cor: textosOriginais.molina.cor,
        html: (config, downloadMode = false) => {
            const texto = config.textoPersonalizado || textosOriginais.molina.descricao;
            const hasFundo = config.fundo.imagem && !downloadMode;
            const hasLogo = config.logo;
            const validade = config.validade;
            const localizacao = config.localizacao;
            const gramagem = formatarGramagem(config);

            const backgroundStyle = downloadMode
                ? 'background: linear-gradient(135deg, #2c1a0d, #4a2c1a)'
                : (hasFundo
                    ? `background: linear-gradient(rgba(44, 26, 13, ${config.fundo.opacidade / 100}), rgba(74, 44, 26, ${config.fundo.opacidade / 100})), url('${config.fundo.imagem}')`
                    : 'background: linear-gradient(135deg, #2c1a0d, #4a2c1a)');

            return `
                        <div style="width: 380px; height: 580px; ${backgroundStyle}; background-size: cover; background-position: center; border: 3px double #D4AF37; border-radius: 20px; padding: 35px; position: relative; overflow: hidden; color: #FFF8E1; font-family: 'Times New Roman';">
                            ${hasFundo ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: inherit; filter: blur(${config.fundo.intensidadeBlur}px);"></div>` : ''}
                            <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                                <div style="position: absolute; top: 20px; right: 20px; background: ${textosOriginais.molina.corDestaque}; color: #F4E4A6; padding: 10px 15px; border-radius: 15px; font-weight: bold; font-size: 12px; transform: rotate(5deg);">RECEITA FAMILIAR</div>
                                
                                <div style="text-align: center; margin: 20px 0;">
                                    ${hasLogo ?
                    `<img src="${config.logo}" style="height: 70px; width: auto; margin: 0 auto 10px; display: block;" onerror="this.style.display='none'">` :
                    `<div style="font-size: 42px; font-weight: bold; color: #D4AF37; margin-bottom: 10px; text-shadow: 2px 2px 4px rgba(0,0,0,0.6);">DAIWESY</div>`
                }
                                    <div style="font-size: 22px; color: ${textosOriginais.molina.corDestaque}; font-weight: 600; margin-bottom: 15px;">${textosOriginais.molina.nome}</div>
                                    <div style="height: 1px; background: linear-gradient(90deg, transparent, #D4AF37, transparent); margin: 15px 0;"></div>
                                </div>

                                <div style="background: rgba(212, 175, 55, 0.15); padding: 15px; border-radius: 12px; margin: 10px 0; border-left: 3px solid #D4AF37; flex-grow: 1; display: flex; align-items: center;">
                                    <div style="font-size: 11px; color: #FFF8E1; line-height: 1.5; text-align: justify; width: 100%;">${texto}</div>
                                </div>

                                <div style="margin-top: auto; text-align: center;">
                                    <div style="display: inline-block; background: rgba(210, 105, 30, 0.3); padding: 12px 20px; border-radius: 10px; border: 1px solid #D4AF37;">
                                        <div style="font-size: 14px; color: #D4AF37; font-weight: bold;">ARTESANAL</div>
                                        <div style="font-size: 10px; color: #F4E4A6;">SEM CONSERVANTES</div>
                                    </div>
                                </div>

                                <div style="margin-top: 15px; text-align: center; font-size: 11px; color: #F4E4A6;">
                                    ${gramagem}
                                    ${validade ? `<br><span class="selo-validade">VALIDADE: ${validade}</span>` : ''}
                                    ${localizacao ? `<br>📍 ${localizacao}` : ''}
                                </div>
                            </div>
                        </div>
                    `;
        }
    },
    {
        id: 3,
        nome: "Seleção Superior - PEANUT BUTTER",
        tipo: "horizontal",
        categoria: "peanut",
        descricao: "Manteiga de amendoim",
        cor: textosOriginais.peanut.cor,
        html: (config, downloadMode = false) => {
            const texto = config.textoPersonalizado || textosOriginais.peanut.descricao;
            const hasFundo = config.fundo.imagem && !downloadMode;
            const hasLogo = config.logo;
            const validade = config.validade;
            const localizacao = config.localizacao;
            const gramagem = formatarGramagem(config);

            return `
                        <div style="width: 500px; height: 320px; ${hasFundo ? `background: linear-gradient(rgba(26, 15, 8, ${config.fundo.opacidade / 100}), rgba(58, 39, 24, ${config.fundo.opacidade / 100})), url('${config.fundo.imagem}')` : 'background: linear-gradient(135deg, #1a0f08, #3A2718)'}; background-size: cover; background-position: center; border: 3px solid #D4AF37; border-radius: 20px; padding: 25px; position: relative; overflow: hidden; color: #F4E4A6; font-family: 'Playfair Display';">
                            ${hasFundo ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: inherit; filter: blur(${config.fundo.intensidadeBlur}px);"></div>` : ''}
                            <div style="position: relative; z-index: 2; display: flex; width: 100%; height: 100%;">
                                <div style="flex: 1; padding-right: 20px; display: flex; flex-direction: column;">
                                    <div>
                                        ${hasLogo ?
                    `<img src="${config.logo}" style="height: 50px; width: auto; margin-bottom: 8px;" onerror="this.style.display='none'">` :
                    `<div style="font-size: 36px; font-weight: 700; color: #D4AF37; margin-bottom: 5px; letter-spacing: 2px;">DAIWESY</div>`
                }
                                        <div style="font-size: 18px; color: ${textosOriginais.peanut.corDestaque}; font-weight: 600; margin-bottom: 10px;">${textosOriginais.peanut.nome}</div>
                                    </div>
                                    
                                    <div style="background: rgba(212, 175, 55, 0.1); padding: 12px; border-radius: 8px; margin-top: 10px; flex-grow: 1; display: flex; align-items: center;">
                                        <div style="font-size: 10px; color: #FFF8E1; line-height: 1.4; text-align: justify; width: 100%;">${texto.substring(0, 200)}...</div>
                                    </div>
                                </div>

                                <div style="width: 140px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-left: 2px solid #D4AF37; padding-left: 15px;">
                                    <div style="text-align: center;">
                                        <div style="font-size: 12px; color: #D4AF37; margin-bottom: 8px; font-weight: bold;">DAIWESY</div>
                                        <div style="font-size: 24px; font-weight: bold; color: #D4AF37; margin-bottom: 12px;">${config.gramagem.quantidade}${config.gramagem.unidade}</div>
                                        <div style="background: ${textosOriginais.peanut.corDestaque}; color: #F4E4A6; padding: 6px 12px; border-radius: 12px; font-size: 10px; font-weight: bold;">QUALIDADE SUPERIOR</div>
                                    </div>
                                </div>
                            </div>

                            <div style="position: absolute; bottom: 12px; left: 0; right: 0; text-align: center; font-size: 10px; color: #F4E4A6; z-index: 2;">
                                CRIADO COM EXCELÊNCIA
                                ${validade ? ` • VAL: ${validade}` : ''}
                                ${localizacao ? `<br>📍 ${localizacao}` : ''}
                            </div>
                        </div>
                    `;
        }
    },
    {
        id: 4,
        nome: "Coleção Artesanal - MOLINA",
        tipo: "horizontal",
        categoria: "molina",
        descricao: "Molina artesanal",
        cor: textosOriginais.molina.cor,
        html: (config, downloadMode = false) => {
            const texto = config.textoPersonalizado || textosOriginais.molina.descricao;
            const hasFundo = config.fundo.imagem && !downloadMode;
            const hasLogo = config.logo;
            const validade = config.validade;
            const localizacao = config.localizacao;
            const gramagem = formatarGramagem(config);

            return `
                        <div style="width: 520px; height: 300px; ${hasFundo ? `background: linear-gradient(rgba(44, 26, 13, ${config.fundo.opacidade / 100}), rgba(74, 44, 26, ${config.fundo.opacidade / 100})), url('${config.fundo.imagem}')` : 'background: linear-gradient(135deg, #2c1a0d, #4a2c1a)'}; background-size: cover; background-position: center; border: 2px solid #D4AF37; border-radius: 15px; padding: 20px; position: relative; overflow: hidden; color: #FFF8E1; font-family: 'Playfair Display';">
                            ${hasFundo ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: inherit; filter: blur(${config.fundo.intensidadeBlur}px);"></div>` : ''}
                            <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #D4AF37, #F4E4A6, #D4AF37); z-index: 2;"></div>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; height: 100%; position: relative; z-index: 2;">
                                <div style="flex: 1;">
                                    <div>
                                        ${hasLogo ?
                    `<img src="${config.logo}" style="height: 45px; width: auto; margin-bottom: 6px;" onerror="this.style.display='none'">` :
                    `<div style="font-size: 32px; font-weight: 700; color: #D4AF37; margin-bottom: 5px;">DAIWESY</div>`
                }
                                        <div style="font-size: 16px; color: ${textosOriginais.molina.corDestaque}; font-weight: 600; margin-bottom: 10px;">${textosOriginais.molina.nome}</div>
                                    </div>
                                    
                                    <div style="background: rgba(212, 175, 55, 0.15); padding: 10px; border-radius: 6px; border-left: 2px solid #D4AF37; margin-top: 8px;">
                                        <div style="font-size: 9px; color: #FFF8E1; line-height: 1.3; text-align: justify;">${texto.substring(0, 150)}...</div>
                                    </div>
                                </div>

                                <div style="width: 130px; text-align: center;">
                                    <div style="background: ${textosOriginais.molina.corDestaque}; color: #F4E4A6; padding: 8px; border-radius: 50%; width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; font-weight: bold; font-size: 11px; text-align: center; line-height: 1.2;">
                                        FEITO À MÃO
                                    </div>
                                    <div style="font-size: 18px; font-weight: bold; color: #D4AF37;">${config.gramagem.quantidade}${config.gramagem.unidade}</div>
                                </div>
                            </div>

                            <div style="position: absolute; bottom: 10px; left: 0; right: 0; text-align: center; font-size: 9px; color: #F4E4A6; letter-spacing: 1px; z-index: 2;">
                                ${gramagem} • INGREDIENTES NATURAIS
                                ${validade ? `<br>VALIDADE: ${validade}` : ''}
                                ${localizacao ? ` • 📍 ${localizacao}` : ''}
                            </div>
                        </div>
                    `;
        }
    }
];

// Inicialização da aplicação
let rotuloAtual = null;
const elementos = {
    gridRotulos: document.getElementById('gridRotulos'),
    modal: document.getElementById('modalRotulo'),
    closeModal: document.getElementById('closeModal'),
    fullRotuloContainer: document.getElementById('fullRotuloContainer'),
    btnDownloadModal: document.getElementById('btnDownloadModal'),
    btnFecharModal: document.getElementById('btnFecharModal'),
    filtroBtns: document.querySelectorAll('.filtro-btn'),
    uploadFundo: document.getElementById('uploadFundo'),
    previewFundo: document.getElementById('previewFundo'),
    previewImg: document.getElementById('previewImg'),
    intensidadeBlur: document.getElementById('intensidadeBlur'),
    valorBlur: document.getElementById('valorBlur'),
    opacidadeFundo: document.getElementById('opacidadeFundo'),
    valorOpacidade: document.getElementById('valorOpacidade'),
    aplicarFundo: document.getElementById('aplicarFundo'),
    removerFundo: document.getElementById('removerFundo'),
    uploadLogo: document.getElementById('uploadLogo'),
    previewLogo: document.getElementById('previewLogo'),
    previewLogoImg: document.getElementById('previewLogoImg'),
    removerLogo: document.getElementById('removerLogo'),
    textoPersonalizado: document.getElementById('textoPersonalizado'),
    contadorCaracteres: document.getElementById('contadorCaracteres'),
    aplicarTexto: document.getElementById('aplicarTexto'),
    restaurarTexto: document.getElementById('restaurarTexto'),
    quantidadeGramagem: document.getElementById('quantidadeGramagem'),
    unidadeGramagem: document.getElementById('unidadeGramagem'),
    tipoPeso: document.getElementById('tipoPeso'),
    aplicarGramagem: document.getElementById('aplicarGramagem'),
    restaurarGramagem: document.getElementById('restaurarGramagem'),
    botoesGramagem: document.querySelectorAll('.btn-gramagem'),
    validadeProduto: document.getElementById('validadeProduto'),
    localizacao: document.getElementById('localizacao'),
    aplicarInfo: document.getElementById('aplicarInfo'),
    limparInfo: document.getElementById('limparInfo'),
    loading: document.getElementById('loading'),
    screenshotManual: document.getElementById('screenshotManual'),
    downloadSemFundo: document.getElementById('downloadSemFundo')
};

function init() {
    renderRotulos();
    setupEventListeners();
    setupControlesPersonalizacao();
}

function setupControlesPersonalizacao() {
    // [Configurações anteriores permanecem...]
    elementos.uploadFundo.addEventListener('change', function (e) {
        handleFileUpload(e, 'fundo');
    });

    elementos.uploadLogo.addEventListener('change', function (e) {
        handleFileUpload(e, 'logo');
    });

    elementos.intensidadeBlur.addEventListener('input', function () {
        configUsuario.fundo.intensidadeBlur = this.value;
        elementos.valorBlur.textContent = this.value + 'px';
        elementos.previewImg.style.filter = `blur(${this.value}px)`;
        aplicarConfiguracao();
    });

    elementos.opacidadeFundo.addEventListener('input', function () {
        configUsuario.fundo.opacidade = this.value;
        elementos.valorOpacidade.textContent = this.value + '%';
        aplicarConfiguracao();
    });

    elementos.aplicarFundo.addEventListener('click', aplicarConfiguracao);
    elementos.removerFundo.addEventListener('click', () => {
        configUsuario.fundo.imagem = null;
        elementos.previewFundo.style.display = 'none';
        aplicarConfiguracao();
    });

    elementos.removerLogo.addEventListener('click', () => {
        configUsuario.logo = null;
        elementos.previewLogo.style.display = 'none';
        aplicarConfiguracao();
    });

    elementos.textoPersonalizado.addEventListener('input', function () {
        const caracteres = this.value.length;
        elementos.contadorCaracteres.textContent = `${caracteres}/500`;
        if (caracteres > 500) {
            elementos.contadorCaracteres.style.color = '#ff6b6b';
        } else {
            elementos.contadorCaracteres.style.color = 'var(--light-gold)';
        }
    });

    elementos.aplicarTexto.addEventListener('click', () => {
        const texto = elementos.textoPersonalizado.value.trim();
        if (texto) {
            configUsuario.textoPersonalizado = texto;
            aplicarConfiguracao();
        } else {
            alert('Por favor, digite uma mensagem personalizada.');
        }
    });

    elementos.restaurarTexto.addEventListener('click', () => {
        configUsuario.textoPersonalizado = null;
        elementos.textoPersonalizado.value = '';
        elementos.contadorCaracteres.textContent = '0/500';
        elementos.contadorCaracteres.style.color = 'var(--light-gold)';
        aplicarConfiguracao();
    });

    // Controles de gramagem
    elementos.aplicarGramagem.addEventListener('click', () => {
        const quantidade = parseInt(elementos.quantidadeGramagem.value) || 500;
        const unidade = elementos.unidadeGramagem.value;
        const tipoPeso = elementos.tipoPeso.value;

        if (quantidade < 1 || quantidade > 5000) {
            alert('Por favor, insira uma quantidade entre 1 e 5000.');
            return;
        }

        configUsuario.gramagem = {
            quantidade,
            unidade,
            tipoPeso
        };
        aplicarConfiguracao();
    });

    elementos.restaurarGramagem.addEventListener('click', () => {
        configUsuario.gramagem = {
            quantidade: 500,
            unidade: "g",
            tipoPeso: "liquido"
        };
        elementos.quantidadeGramagem.value = "500";
        elementos.unidadeGramagem.value = "g";
        elementos.tipoPeso.value = "liquido";

        // Atualizar botões de gramagem rápida
        elementos.botoesGramagem.forEach(btn => {
            btn.classList.remove('ativa');
            if (btn.dataset.gramagem === "500") {
                btn.classList.add('ativa');
            }
        });

        aplicarConfiguracao();
    });

    // Botões de gramagem rápida
    elementos.botoesGramagem.forEach(btn => {
        btn.addEventListener('click', () => {
            const gramagem = btn.dataset.gramagem;
            elementos.quantidadeGramagem.value = gramagem;

            // Atualizar estado dos botões
            elementos.botoesGramagem.forEach(b => b.classList.remove('ativa'));
            btn.classList.add('ativa');

            // Aplicar automaticamente
            configUsuario.gramagem.quantidade = parseInt(gramagem);
            aplicarConfiguracao();
        });
    });

    elementos.aplicarInfo.addEventListener('click', () => {
        configUsuario.validade = elementos.validadeProduto.value.trim();
        configUsuario.localizacao = elementos.localizacao.value.trim();
        aplicarConfiguracao();
    });

    elementos.limparInfo.addEventListener('click', () => {
        configUsuario.validade = "";
        configUsuario.localizacao = "";
        elementos.validadeProduto.value = "";
        elementos.localizacao.value = "";
        aplicarConfiguracao();
    });

    // Novos listeners para download alternativo
    elementos.screenshotManual.addEventListener('click', () => {
        alert('📸 Para captura manual:\n\n1. Pressione Print Screen (PrtScn) no teclado\n2. Abra o Paint ou outro editor de imagem\n3. Cole a imagem (Ctrl+V)\n4. Recorte a área do rótulo\n5. Salve como PNG');
    });

    elementos.downloadSemFundo.addEventListener('click', () => {
        if (rotuloAtual) {
            downloadRotulo(rotuloAtual.id, true);
        } else {
            alert('Por favor, abra um rótulo primeiro clicando nele.');
        }
    });
}

function handleFileUpload(event, tipo) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (tipo === 'fundo') {
                configUsuario.fundo.imagem = e.target.result;
                elementos.previewImg.src = e.target.result;
                elementos.previewFundo.style.display = 'block';
            } else if (tipo === 'logo') {
                configUsuario.logo = e.target.result;
                elementos.previewLogoImg.src = e.target.result;
                elementos.previewLogo.style.display = 'block';
            }
            aplicarConfiguracao();
        }
        reader.readAsDataURL(file);
    }
}

function aplicarConfiguracao() {
    renderRotulos();
    if (rotuloAtual) {
        elementos.fullRotuloContainer.innerHTML = rotuloAtual.html(configUsuario);
    }
}

function renderRotulos(filtro = 'todos') {
    elementos.gridRotulos.innerHTML = '';

    const rotulosFiltrados = rotulos.filter(rotulo => {
        if (filtro === 'todos') return true;
        if (filtro === 'vertical') return rotulo.tipo === 'vertical';
        if (filtro === 'horizontal') return rotulo.tipo === 'horizontal';
        return rotulo.categoria === filtro;
    });

    rotulosFiltrados.forEach((rotulo, index) => {
        const rotuloElement = document.createElement('div');
        rotuloElement.className = 'rotulo-item';
        rotuloElement.style.animationDelay = `${index * 0.1}s`;

        const tipoProduto = rotulo.categoria === 'peanut' ? 'PEANUT BUTTER' : 'MOLINA';
        const classeTipo = rotulo.categoria === 'peanut' ? 'tipo-peanut' : 'tipo-molina';

        rotuloElement.innerHTML = `
                    <div class="rotulo-preview" style="background: ${rotulo.cor};" onclick="abrirModal(${rotulo.id})">
                        <div style="font-size: 1.4rem; font-weight: bold; color: #D4AF37; text-align: center; position: relative; z-index: 2;">
                            ${rotulo.nome.split(' - ')[0]}
                            <br>
                            <span class="tipo-produto ${classeTipo}">${tipoProduto}</span>
                            <br>
                            <span style="font-size: 1rem; color: ${textosOriginais[rotulo.categoria].corDestaque};">
                                ${formatarGramagem(configUsuario)}
                            </span>
                        </div>
                        ${configUsuario.fundo.imagem ? `<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('${configUsuario.fundo.imagem}'); background-size: cover; background-position: center; filter: blur(${configUsuario.fundo.intensidadeBlur}px); opacity: ${configUsuario.fundo.opacidade / 100};"></div>` : ''}
                    </div>
                    <div class="rotulo-info">
                        <div class="rotulo-nome">${rotulo.nome}</div>
                        <div class="rotulo-desc">${rotulo.descricao}</div>
                        <button class="btn-download" onclick="downloadRotulo(${rotulo.id})">
                            📥 Baixar Rótulo
                        </button>
                    </div>
                `;
        elementos.gridRotulos.appendChild(rotuloElement);
    });
}

function setupEventListeners() {
    elementos.filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elementos.filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRotulos(btn.dataset.filtro);
        });
    });

    elementos.closeModal.addEventListener('click', fecharModal);
    elementos.btnFecharModal.addEventListener('click', fecharModal);
    elementos.modal.addEventListener('click', (e) => {
        if (e.target === elementos.modal) fecharModal();
    });

    elementos.btnDownloadModal.addEventListener('click', () => {
        if (rotuloAtual) downloadRotulo(rotuloAtual.id, false);
    });
}

function abrirModal(rotuloId) {
    rotuloAtual = rotulos.find(r => r.id === rotuloId);
    if (rotuloAtual) {
        elementos.fullRotuloContainer.innerHTML = rotuloAtual.html(configUsuario);
        elementos.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function fecharModal() {
    elementos.modal.style.display = 'none';
    rotuloAtual = null;
    document.body.style.overflow = 'auto';
}

async function downloadRotulo(rotuloId, semFundo = false) {
    const rotulo = rotulos.find(r => r.id === rotuloId);
    if (!rotulo) return;

    elementos.loading.style.display = 'block';

    try {
        const tempContainer = document.createElement('div');
        tempContainer.style.position = 'fixed';
        tempContainer.style.left = '0';
        tempContainer.style.top = '0';
        tempContainer.style.width = '100%';
        tempContainer.style.height = '100%';
        tempContainer.style.background = 'white';
        tempContainer.style.zIndex = '9999';
        tempContainer.style.display = 'flex';
        tempContainer.style.justifyContent = 'center';
        tempContainer.style.alignItems = 'center';

        // Usar versão sem fundo se solicitado
        const rotuloElement = document.createElement('div');
        rotuloElement.innerHTML = rotulo.html(configUsuario, semFundo);
        const rotuloDiv = rotuloElement.firstElementChild;

        rotuloDiv.style.transform = 'scale(1)';
        rotuloDiv.style.margin = '0';
        rotuloDiv.style.boxShadow = 'none';

        tempContainer.appendChild(rotuloDiv);
        document.body.appendChild(tempContainer);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const canvas = await html2canvas(rotuloDiv, {
            scale: 2,
            backgroundColor: null,
            useCORS: true,
            logging: false,
            allowTaint: true, // Permitir taint para imagens
            foreignObjectRendering: false, // Desativar foreignObject
            width: rotuloDiv.offsetWidth,
            height: rotuloDiv.offsetHeight
        });

        const link = document.createElement('a');
        const sufixo = semFundo ? '-sem-fundo' : '';
        link.download = `daiwesy-${rotulo.nome.toLowerCase().replace(/\s+/g, '-')}${sufixo}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png', 0.9);
        link.click();

        document.body.removeChild(tempContainer);

    } catch (error) {
        console.error('Erro ao gerar imagem:', error);
        let mensagem = 'Erro ao gerar a imagem. ';
        if (semFundo) {
            mensagem += 'Tente a captura de tela manual.';
        } else {
            mensagem += 'Tente a opção "Download sem Imagem de Fundo".';
        }
        alert(mensagem);
    } finally {
        elementos.loading.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', init);

window.abrirModal = abrirModal;
window.downloadRotulo = downloadRotulo;
