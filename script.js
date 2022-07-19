function insert (num) { //função insert vai inserir os dados na caixa de digitação
    var n1 = document.getElementById ('caixa').innerHTML ;
    document.querySelector ('#caixa').innerHTML = n1 + num; //pega o valor que já tinha e insere o novo valor

}
function clean() // vai apagar todo o valor de dentro da caixa, quando o botão for clicado
{
    document.getElementById('caixa').innerHTML = "";
}

function back() //vai voltar um espaço anterior, ou seja, vai "apagar" um caracter quando for clicado
{
    var resultado = document.getElementById('caixa').innerHTML;
    document.getElementById('caixa').innerHTML = resultado.substring(0, resultado.length -1);
    //substring vai pegar todos os caracteres que estão lá dentro e vai diminuir um;
    //resultado.length = vai ver quais são os caracteres que estão dentro da caixa;
}
function calcular () // vai fazer o cálculo 
{
    var resultado = document.getElementById('caixa').innerHTML;

    if(resultado) // se tiver algo dentro de resultado, executa a operação
    {
        document.getElementById('caixa').innerHTML = eval(resultado); //eval: método que computa todas as operações
        /*eval não é um método tão confiável, foi usado pois é um projetinho simples, para projetos mais robustos
        recomendo usar outras funções.*/
    }
    else // senão, não vai ter nada para calcular
    {
        alert('Digite um valor para calcular!')
    }
}