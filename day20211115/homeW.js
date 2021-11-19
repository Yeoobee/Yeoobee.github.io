const ele = document.getElementById('btn1')
ele.addEventListener('click',fun1)

function fun1(){
    let num1 = document.getElementById('id1').value
    let num2 = document.getElementById('id2').value
    const sum = parseInt(num1) + parseInt(num2)
    console.log(sum)
    let ppp1 = document.getElementById('ppp')
    ppp1.innerHTML= sum


}