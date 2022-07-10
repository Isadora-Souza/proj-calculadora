function insert (num) {
    var n1 = document.getElementById ('caixa').innerHTML ;
    document.querySelector ('#caixa').innerHTML = n1 + num;

}
function clean()
{
    document.getElementById('caixa').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('caixa').innerHTML;
    document.getElementById('caixa').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular ()
{
    var resultado = document.getElementById('caixa').innerHTML;
    if(resultado)
    {
        document.getElementById('caixa').innerHTML = eval(resultado);
    }
    else
    {
        alert('Digite um valor para calcular!')
        
    }
}