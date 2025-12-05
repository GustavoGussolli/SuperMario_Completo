function excluirComAjax(id, elemento) {

    if(!confirm('Tem certeza que quer excluir?')) {
        return false;
    }

    const url = `../../api/excluir_ajax.php?id=${id}`;
    var linha = elemento.parentNode.parentNode;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
        if(xhr.status == 200) {
            var resposta = JSON.parse(xhr.responseText);
            
            if(resposta.success) {
                linha.parentNode.removeChild(linha);
            } else {
                alert('Erro: ' + resposta.message);
            }
        } else {
            alert('Erro na conexão');
        }
    };
    
    xhr.send();
    return false;
}