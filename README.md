### 각자 github에 front_study라는 repository를 만들어서 현재 폴더를 git에 업로드 하시기 바랍니다.
- 텍스트 내용입니다.    
    - 안녕하세요
1. 숫자내용
1. 숫자내용
```
int a= 10;
```
1. 안녕하세요



1. 인라인 요소
    - 태그 내용을 표현하고 줄이 바뀌지 않음.
    - 보통 텍스트 내용만큼만 영역을 차지하게 됨.
    - 가로, 세로 크기를 따로 지정할 수 없음.
        - 가로, 세로 크기를 따로 지정하고 싶으면 css로 블록 요소로 지정해야함.
    - 대표적은 인라인 요소
        - span, a 등
2. 블록 요소
    - 태그 내용을 표현하고 줄이 바뀜
    - 텍스트 내용과는 상관없이 한줄을 모두 차지함
    - 가로, 세로 크기를 지정할 수 있음
    - 대표적인 블록 태그
        - div, h1~h6 등
    
    ### 주로 사용하게 될 태그들
    ```
    -  <style>, <script>, <h1>, <p>, <div>
    - <form>, <input>, <button>, <select>
    ```
    ### UI/UX
    - UI(User Interface): 화면, GUI(Graphical User Interface). 얼마나 보기 좋은지
    - UX(User Experience): 사용자 경험. 얼마나 쓰기 좋은지

    ### 경로 지정시 사용하는 방법
    - ./: 현재 파일이 있는 폴더를 가리킴.
    - ../: 현재 폴더에서 한 수준 위로 올라가는 폴더를 가리킴

    ### form 태그
    1. form 시작태그에 작성하는 속성.
    ```
    <form action="주소값" method="get or post">
    ```
        - acrion: form태그에 작성된 내용을 전송할 주소
            - 보통 백엔드에서 받는 주소를 사용함
            - 백엔드에는 해당 주소를 처리해주는 컨트롤러 클래스의 매서드가 있음
        - mtehod: action에 작성한 주소로 데이터를 전송할 때 사용할 전송박식.
            - 여기서 전송방식이라는 것은 http 프로토콜의 전송박식을 의미함.
            - http 전송방식(rest api)
                - get: read 역할
                    - 주소창에 전송하는 데이터가 모두 노출됨.
                    - 검색어 또는 데이터가 노출되어도 문제 없는 상황에서 사용.
                - post: create 역할
                    - 주소창에 전송하는 데이터가 노출되지 않음.
                    - 회원가입, 로그인 등 노출되지 않아야 하는 상황에서 사용.
                - put: update 역할
                - delete: delete 역할
            - form태그의 method에는 get/post만 사용가능
            - http(Hyper text transfer protocol): 쉽게 말해서 인터넷 상에서 정보를 주고받는 프로토콜
                - http는 대부분 요청(request)/응답(response)이 있다.
                    - frontend(client) -> backend(server): 요청
                        - server: java, db
                        - client: html, css, javascript
                    - backend -> frontend: 응답
                - 우리가 인터넷을 한다는 것은 서버에 요청을 하는 것이고 그에 대한 결과를 화면으로 보는것이 응답.
                - 따라서 인터넷을 할 때 주소창에 http:// 가 붙는 것이라고 보면 된다.
                    - 요즘 https는 secure(보안) 이 추가됐다고 보면 됨.
                - 프로토콜: 특정 통신 방식에서 규정하는 규칙을 의미
                - frp, tcp, ip 등에 붙는 p는 모두 프로토콜임. 
2. input 태그
- type 속성
    - text: 텍스트 입력칸이 만들어짐.
    - submit: form태그에 작성한 내용을 action 속성에 작성한 주소로 보낼 수 있음.

3. javascript function
// 함수(자바의 메서드랑 비슷)
    // 특정 기능을 수행하는 코드블록
    // 호출해줘야 실행
    // 특정 이벤트가 발생했을 때 함수를 호출
     - click, doubleclick, mouse over, keyup, keydown
    - 매개변수, 리턴 등 있음.

4. id속성 vs class속성
- id속성
    - 한 문서 안에서 id 속성값은 유일해야 한다.
    - css적용시 사용, javascript 에서 제어할 때도 사용
- class속성
    - css 적용할 때 많이 사용함.
    - 여러 태그에 동일한 class 값을 적용할 수 있다.
    - 한 번에 여러 class를 동시에 적용할 수 있다.
      - ex) p태그에 class1, class2, class3를 동시에 적용하고 싶다면
        ```
        <p class="class1 class2 class3"></p>
        ```

5. DOM 가져오기
- 대부분 document.으로 시작함
    - document는 현재 html 문서를 가리킴
- getElemntById('id속성값') 
    - 현재 html에 작성된 태그 중 특정 id속성값을 가지고 있는 요소를 가져옴.
- querySelector()
 - id, class, 태그 등 여러 요소를 가져올 수 있음.
 - id를 가져올 때는 id앞에 #을 붙여야 함.
    - ex) id1 이라는 요소를 가져온다면  document.querySelector('#id1')
- class를 가져올 때는 class 앞에 .을 붙여야 함.
    - ex) class1 이라는 요소를 가져온다면 document.querySelector('.class1')
- getElementsByClassName()
    - 현재 html에 작성된 태그 중 특정 class속성값을 가지고 있는 요소를 가져옴.