const form = document.forms[0]
const btnPesquisar = document.querySelector('[btn-submit]')
btnPesquisar.onclick = async (e) =>{
    e.preventDefault()
    let cnpj = form.cnpj.value
    let token='6096|NLkZ6lrLAPtzd3xXmxZ6VyLqvZalZz02'
    let url = `https://api.invertexto.com/v1/cnpj/${cnpj}?token=${token}`
    

    let dados = await axios.get(url)
   
    dados = dados.data
    console.log(dados)
    form.nome.value = dados.nome
    form.fantasia.value = dados.fantasia
    form.data.value = dados.nascimento
    
}