#- 기존 HTML,CSS,JS 개발방법과 리액트의 개발방법의 큰차이는 기존방식은 명령형 접근방식이지만 리액트는 선언형 접근방식이다.

#- 컴포넌트는 JSX를 반환

#- 컴포넌트(함수)의 첫글자는 대문자여야하는데 그 이유는 div나 h1 태그와 같은 내장 HTML 요소(실은 이미 정의된 컴포넌트)와 겹치지않기위함
#- div나 h1같은것도 사실은 전부 리액트 컴포넌트이다.

#- props는 key-value로 되어있는 javascript 객체이다.

#- JSX에서 {}안에 한줄 표현식은 사용할 수 있지만 블록 구문을 사용할 수 없다.

#- javascript안에서는 React없이도 함수 안에서 함수를 정의할 수 있다. ex)click 이벤트 발생 시 delete 함수
#- onClick={deleteHandler} {}안에 deleteHandler()이런식으로 하면 React가 바로 실행버린다. 따라서 ()는 지워줘야함
