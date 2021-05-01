function fact(n)
{
	return (n != 1) ? n * fact(n - 1) : 1;
}
function doAlgorithm ()
{
	try
	{
        var sum = 0;
        num = parseInt(document.getElementById('num').value);
        x = parseInt(document.getElementById('x').value);
        for (var k = 1; k < num; k++)
		{
            sum += ((-1)**k) * (x**k) / fact(fact(k)+1);
        }
        document.getElementById('result').innerHTML = 1/fact(num) * sum;
    }
    catch
	{
		alert('Введены неправильные значения')
    }
}