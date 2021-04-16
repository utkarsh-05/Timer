var start = document.getElementById('start');
var digits = document.getElementsByClassName("digit");
console.log('digits is', digits);
console.log('zero value is ', digits[0].innerHTML);
var cur=0;
var digitval = [0,0,0,0,0];
start.addEventListener('click',function(){
    var num= number.value;
    cur +=1 ;
    digits[4].innerHTML = "1";
    console.log("Enterted number is ", num);
     var inter = setInterval(function(){
        
        if(cur==num) return;
        console.log('else');
      
        var i=4;
       
        for(var j=0; j<5; j++)
        {
            digitval[j] = parseInt(digits[j].innerHTML) ;
        }
        while(digitval[i]==9)
        {
            digitval[i]=0;
            i--;
        }
        digitval[i] += 1;
        console.log('array is ', digitval);
        for(var j=0; j<5; j++)
        {
            digits[j].innerHTML = parseInt(digitval[j]) ;
        }
        cur++;
        console.log('value of cur is ',cur);
        if(cur==num)
        {
            setTimeout(function(){
                cur=0;
                console.log('if');
                window.alert('Time reached');
                number.value = null;
                clearInterval(inter);
                for(var j=0; j<5; j++)
                {
                digits[j].innerHTML = parseInt(0) ;
                }   
                return;
            },1000)
            
        }
    },1000);
})
var num = number.value;
var alertt = parseInt(num)*1000 + 10;
console.log('alertt is ', alertt);
// setTimeout(function(){
//     window.alert('Time reached');
// },alertt)
for(var j=0; j<5; j++)
{
    digitval[j] = parseInt(digits[j].innerHTML) ;
}
console.log('values is ', digitval);
