let arr = []; 
while(true) {
    let escolha = prompt('Digite:\n 1 - Adicione uma Tarefa\n 2 - Remover uma Tarefa\n 3 - Lista das Tarefas\n 4 - Sair');
    let opcao = parseInt(escolha);

    if(opcao === 1) {
        let escolh1 = prompt('Digite a Tarefa que será Adicionada:');
        arr.push(escolh1);
        alert('Tarefa Adiconada com Sucesso!');
    } else if(opcao === 2) {
        let escolh2 = prompt('Digite a Tarefa que deseja Remover:');
        let index = arr.indexOf(escolh2); // indexOf() - Verifica as ocorrencias das palavras no array

        if(index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            alert('Tarefa Removida com Sucesso!');
        } else {
            alert('Tarefa não Encontrada!');
        }
    } else if(opcao === 3) {
        alert('Lista de Tarefas: ' + arr.join(', ')); // join() - Transforma um Array em uma String 
    } else if(opcao === 4) {
        alert('Saindo...');
        break; // break - breca/para a funcionalidade, fazendo que se encerre
    }
}