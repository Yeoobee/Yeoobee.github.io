

const btn1 = document.getElementById('id2')
console.log("btn1값:",btn1)
const btn2 = document.getElementById('id3')

function alertFunction(){
    console.log('1번째')
    alert("안녕")
}
    btn1.addEventListener('click',function(){
        console.log('2번째')
        const result = confirm("컨펌함수")
        if(result){
            console.log("확인누름")
    }else{
        console.log("취소");
    }
})
    
    btn2.addEventListener('click', promptFunction)
    function promptFunction(){
        console.log('3번째')
        const result = prompt("프롬프트함수")
        console.log(result)
    }



