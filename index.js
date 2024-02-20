let sum=0;
document.getElementById('btn1').addEventListener('click',() => {
    sum++;
    document.getElementById('aa').innerHTML=sum;
})
document.getElementById('btn2').addEventListener('click',() => {
    if (sum > 0) {
       sum--;
    }
    document.getElementById('aa').innerHTML=sum;
})
document.getElementById('btn3').addEventListener('click',()=> {
     sum *=0;
     document.getElementById('aa').innerHTML=sum;

})