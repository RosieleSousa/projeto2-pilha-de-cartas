const cheap = []
while(true){
   let option = prompt(`Você tem atualmente: ${cheap.length};
        você deseja(digite um número):
        1.Adicionar uma carta;
        2.Puxar uma carta;
        3.Sair;`)

        if(option === '1'){
            addLetter = prompt('Digite o nome da carta:')
            cheap.unshift(addLetter)
            console.log(`Carta ${addLetter} adicionada no baralho.`)
        } else if(opiton === '2'){
            if(cheap.length > 0){
                const pullCard = cheap.shift()
                console.log(`Você puxou a carta ${pullCard}.`)
            }

        }else if(opiton === '3'){
            console.log('saindo do programa...')
        }else{
            console.log('Opção inválida. Tente novamente.')
        }
        
}