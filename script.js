
let input = document.getElementById("cep").addEventListener("blur", () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let valorTratado = cep.length;

    if (valorTratado === 8) {
        fetch(url)
            .then(respostas => respostas.json())

            .then(dados => {
                if (!dados.error) {
                    console.log(dados)

                        document.getElementById("rua").value = dados.logradouro;
                        document.getElementById("bairro").value = dados.bairro;
                        document.getElementById("cidade").value = dados.localidade;
                        document.getElementById("estado").value = dados.uf;
                          document.getElementById("numero").value = dados.ddd
               
                

            }
            })

    }
    else {
        alert("Digite um cep valido com 8 caracteres!!!")
    }


});


