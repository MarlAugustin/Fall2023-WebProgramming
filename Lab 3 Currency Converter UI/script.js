function convertion_ca()
{
    us_dollars = document.getElementById("us").value;
    var conversion_rate = 1.35 ;
    document.getElementById("ca").value = (conversion_rate * us_dollars).toFixed(2);
}

function convertion_us()
{
    ca_dollars = document.getElementById("ca").value;
    var conversion_rate = 1.35 ;
    document.getElementById("us").value = (ca_dollars / conversion_rate).toFixed(2);
}