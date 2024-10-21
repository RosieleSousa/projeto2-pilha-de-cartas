const cheap = []
while(true){
   let option = prompt(`Voce tem atualmente: ${cheap.length};
        voce deseja(digite um numero):
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
                console.log(`Voce puxou a carta ${pullCard}.`)
            }

<<<<<<< HEAD
        }else if(option === '3'){
=======
        }else if(option === '3'){
>>>>>>> 8dbaa4645d4ee3553a212054734291729938042d
            console.log('saindo do programa...')
        }else{
            console.log('Opcao invalida. Tente novamente.')
        }
        
}