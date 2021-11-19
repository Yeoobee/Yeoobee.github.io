let num = document.getElementById('id1').value
const str = document.getElementById('id2')
const ele = document.getElementById('btn1').addEventListener('click',fun)

function fun(){
    let grade;
    if(num>=90){
    grade = 'a'
    }else{
        grade='b'
    }
    
    str.value=grade
    const word = document.getElementById('word')
    word.innerHTML=grade

}

