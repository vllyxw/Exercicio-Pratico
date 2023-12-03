function mostrarCampos() {
    const tipoPessoa = document.getElementById('tipoPessoa').value;
    const dadosFisicos = document.getElementById('dadosFisicos');
    const dadosJuridicos = document.getElementById('dadosJuridicos');
  
    // Se for pessoa física, mostrar campos fisicos e esconder campos jurídicos, e vice-versa
    if (tipoPessoa === 'fisica') {
      dadosFisicos.style.display = 'block';
      dadosJuridicos.style.display = 'none';
    } else if (tipoPessoa === 'juridica') {
      dadosFisicos.style.display = 'none';
      dadosJuridicos.style.display = 'block';
    }
  }
  
  function calcularNotaFiscal() {
    const tipoPessoa = document.getElementById('tipoPessoa').value;
    const dadosNotaFiscal = {
      valorServico: parseFloat(document.getElementById('valorServico').value),
      taxaImposto: 5 // Taxa de imposto fixa em 5%
    };
  
    if (isNaN(dadosNotaFiscal.valorServico)) {
      alert('Por favor, insira um valor válido para o serviço.');
      return;
    }
  
    let resultadoNotaFiscal = '';
  
    if (tipoPessoa === 'fisica') {
      const dadosFisicos = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value
      };
  
      resultadoNotaFiscal += `
        <p>Nome: ${dadosFisicos.nome}</p>
        <p>CPF: ${dadosFisicos.cpf}</p>
        <p>Endereço: ${dadosFisicos.endereco}</p>
      `;
    } else if (tipoPessoa === 'juridica') {
      const dadosJuridicos = {
        nomeJuridico: document.getElementById('nomeJuridico').value,
        cnpj: document.getElementById('cnpj').value,
        enderecoJuridico: document.getElementById('enderecoJuridico').value
      };
  
      resultadoNotaFiscal += `
        <p>Nome da Empresa: ${dadosJuridicos.nomeJuridico}</p>
        <p>CNPJ: ${dadosJuridicos.cnpj}</p>
        <p>Endereço da Empresa: ${dadosJuridicos.enderecoJuridico}</p>
      `;
    }
  
    const imposto = (dadosNotaFiscal.valorServico * dadosNotaFiscal.taxaImposto) / 100;
    const total = dadosNotaFiscal.valorServico + imposto;
  
    resultadoNotaFiscal += `
      <p>Valor do Serviço: R$ ${dadosNotaFiscal.valorServico.toFixed(2)}</p>
      <p>Imposto (${dadosNotaFiscal.taxaImposto}%): R$ ${imposto.toFixed(2)}</p>
      <p>Total: R$ ${total.toFixed(2)}</p>
    `;
  
    document.getElementById('resultadoNotaFiscal').innerHTML = resultadoNotaFiscal;
  }
  