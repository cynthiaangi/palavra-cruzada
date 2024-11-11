var contagem = 0;

function bt_Resposta00() {
    var resposta = (ipt_resposta.value).replaceAll(' ', '').replaceAll('-', '').toUpperCase();

    if(contagem == 0){
        if (resposta == "DUALCORE") {
            CHAR_2.innerHTML = `D`;
            CHAR_3.innerHTML = `U`;
            CHAR_4.innerHTML = `A`;
            CHAR_5.innerHTML = `L`;
            CHAR_6.innerHTML = `C`;
            CHAR_7.innerHTML = `O`;
            CHAR_8.innerHTML = `R`;
            CHAR_9.innerHTML = `E`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `É a parte de um SO, que realiza as instruções de um programa de computador, para executar a aritmética básica, lógica, e a entrada e saída de dados.`
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }
    }else if(contagem == 1){        
        if (resposta == 'CPU') {
            CHAR_10.innerHTML = `C`
            CHAR_11.innerHTML = `P`
            CHAR_12.innerHTML = `U`
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Sigla em inglês de uma característica de um computador que dá possibilidades à leitura e escrita da memória do sistema independente de uma CPU.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }
    } else if(contagem == 2){ 
            if (resposta == 'DMA') {
                CHAR_13.innerHTML = `D`
                CHAR_14.innerHTML = `M`
                CHAR_15.innerHTML = `A`
                contagem++;
                pontos.innerHTML = contagem;
                pergunta.innerHTML = `Uma série de processadores da marca Intel que foi lançado pela primeira vez ao mundo em 9 de Setembro de 2009 nos Estados Unidos da América.`;
            } else {
                alert("Resposta incorreta! \n Tente novamente.");
            }

    } else if(contagem == 3){
        if (resposta == "I5") {
            CHAR_16.innerHTML = `I`;
            CHAR_17.innerHTML = `5`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Uma série de processadores da marca Intel que foi lançado pela primeira vez ao mundo em 17 de Novembro de 2008 nos Estados Unidos da América.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }
    } else if(contagem == 4){
        if (resposta ==  "I7") {
            CHAR_18.innerHTML = `I`;
            CHAR_19.innerHTML = `7`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Nomenclatura para Seleção de Chip na língua inglesa. Geralmente o mesmo é utilizado com a lógica dos três estados.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 5){
        if (resposta == 'CS') {
            CHAR_20.innerHTML = `C`;
            CHAR_21.innerHTML = `S`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `É um microprocessador que possui (4) quatro núcleos ou quatro 'cérebros'. Há quatro núcleos dentro de apenas único chip.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }
    } else if(contagem == 6){
        if (resposta == "QUADCORE") {
            CHAR_23.innerHTML = `Q`;
            CHAR_24.innerHTML = `U`;
            CHAR_25.innerHTML = `A`;
            CHAR_26.innerHTML = `D`;
            CHAR_27.innerHTML = `O`;
            CHAR_28.innerHTML = `R`;
            CHAR_29.innerHTML = `E`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Corresponde a uma memória local rápida do microprocessador e também armazena informações binárias (instruções, endereços e também dados).`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 7){
        if (resposta == 'REGISTRADORES') {
            CHAR_30.innerHTML = `E`;
            CHAR_31.innerHTML = `G`;
            CHAR_32.innerHTML = `S`;
            CHAR_33.innerHTML = `T`;
            CHAR_34.innerHTML = `R`;
            CHAR_35.innerHTML = `A`;
            CHAR_36.innerHTML = `D`;
            CHAR_37.innerHTML = `O`;
            CHAR_38.innerHTML = `R`;
            CHAR_39.innerHTML = `E`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Tipo de memória NÃO VOLÁTIL, ou seja, consegue manter informações mesmo quando não há alimentação. Se difere da ROM pois pode ser atualizada.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 8){
            if (resposta == 'FLASH') {
                CHAR_40.innerHTML = `F`;
                CHAR_41.innerHTML = `L`;
                CHAR_42.innerHTML = `A`;
                CHAR_43.innerHTML = `S`;
                CHAR_44.innerHTML = `H`;
                contagem++;
                pontos.innerHTML = contagem;
                pergunta.innerHTML = `É um tipo de memória NÃO VOLATIL e muito conhecida, porém, diferente da Memória Flash, esse tipo de memória não pode ser regravada.`;
            } else {
                alert("Resposta incorreta! \n Tente novamente.");
            }
    } else if(contagem == 9){
        if (resposta == 'ROM') {
            CHAR_45.innerHTML = `R`;
            CHAR_46.innerHTML = `O`;
            CHAR_47.innerHTML = `M`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `É um tipo de memória VOLATIL, que guarda os arquivos do computados de forma temporária, ou seja, a mesma pode ser regravada várias e várias vezes.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 10){
        if (resposta == 'RAM') {
            CHAR_48.innerHTML = `R`;
            CHAR_49.innerHTML = `M`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `É um tipo de memória que pode ser regravada. As informações são apagadas pela exposição à luz ultravioleta por aproximadamente 15 minutos.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 11){
        if (resposta == "EPROM") {
            CHAR_50.innerHTML = `E`;
            CHAR_51.innerHTML = `P`;
            CHAR_52.innerHTML = `R`;
            CHAR_53.innerHTML = `O`;
            CHAR_54.innerHTML = `M`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Termo utilizado dentro da computação para a transferência de dados entre computadores.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 12){
        if (resposta == "DATABUS") {
            CHAR_56.innerHTML = `D`;
            CHAR_57.innerHTML = `A`;
            CHAR_58.innerHTML = `T`;
            CHAR_59.innerHTML = `A`;
            CHAR_60.innerHTML = `B`;
            CHAR_61.innerHTML = `U`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Um elemento da CPU que transmite a localização (endereço) de um dado ou de uma informação armazenada pelo computador.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }
        
    } else if(contagem == 13){
        if (resposta == "ADRESSBUS") {
            CHAR_62.innerHTML = `A`;
            CHAR_63.innerHTML = `D`;
            CHAR_64.innerHTML = `E`;
            CHAR_65.innerHTML = `S`;
            CHAR_66.innerHTML = `S`;
            CHAR_67.innerHTML = `B`;
            CHAR_68.innerHTML = `U`;
            CHAR_69.innerHTML = `S`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `É um tipo de memória que tem sua utilidade a armazenação de dados e informações em grande quantidade.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 14){
        if (resposta == 'MEMORIADEMASSA' || resposta == 'MEMÓRIADEMASSA') {
            CHAR_70.innerHTML = `M`;
            CHAR_71.innerHTML = `M`;
            CHAR_72.innerHTML = `R`;
            CHAR_73.innerHTML = `-`;
            CHAR_74.innerHTML = `D`;
            CHAR_75.innerHTML = `-`;
            CHAR_76.innerHTML = `A`;
            CHAR_77.innerHTML = `S`;
            CHAR_78.innerHTML = `A`;
            contagem++;
            pontos.innerHTML = contagem;
            pergunta.innerHTML = `Sigla para o circuito digital que realiza as operações lógicas e aritméticas. Peça fundamental para uma CPU.`;
        } else {
            alert("Resposta incorreta! \n Tente novamente.");
        }

    } else if(contagem == 15){
            if (resposta == 'ULA') {
                CHAR_79.innerHTML = `U`;
                CHAR_80.innerHTML = `L`;
                contagem++;
                pontos.innerHTML = contagem;
            } else {
                alert("Resposta incorreta! \n Tente novamente.");
            }
            
        }

        
        if(contagem < 16){
            ret.style.display = "none";
            ipt_resposta.value = '';
        } else{
            ret.style.display = "block";
            repositorio.innerHTML = `Link do Repositório no GitHub:
            Clique aqui`
            alert('Parabéns! \nVocê conseguiu finalizar o desafio!')
        }
}

function voltar() {
    Pergunta1.style.display = "block"
    id_ajuda.style.display = "none";
}
