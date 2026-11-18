// 빈 객체 생성
var calc = {};

// 객체에 멤버변수 추가
calc.x = 0;
calc.y = 0;

// 값을 설정
calc.setValue = function (p1, p2) {
    this.x = p1;
    this.y = p2;
}

// 멤버변수 만의 덧셈결과를 리턴하는 메소드
calc.plus = function () {
    return this.x + this.y;
}

// 멤버변수 만의 뺄셈결과를 리턴하는 메소드
calc.minus = function () {
    return this.x - this.y;
}

// 덧셈과 뺄셈의 결과를 출력하는 메소드
calc.result = function () { 
    // 현재 객체 안에서 다른 메소드를 
    // 호출하는 경우에도 this. 라는 예약어 사용
    
    var v1 = this.plus();
    var v2 = this.minus();
    document.write("<p> 덧셈결과 : "+v1+"</p>")
    document.write("<p> 뺄셈결과 : "+v2+"</p>")
}