var sign = '';
var firstNum = '';
var secondNum = '';
var sum = '';

//处理数字
function showNumber(num) {
    if (sign == '') {

        firstNum = firstNum + num;

    } else {
        secondNum = secondNum + num;

    }
    document.getElementById('content').value = firstNum + sign + secondNum;
}
//处理符号
function showSign(fuhao) {
    if (firstNum[0] == '0' && firstNum[1] != '.') {
        firstNum = firstNum.substring(1, firstNum.length);
    }
    if (sign == '' && (firstNum != '' || sum != '')) {
        sign = fuhao;
        if (sum != '' && firstNum == '') {
            firstNum = sum;
        }
        document.getElementById('content').value = firstNum + sign;
    }
}
//处理等号
function showEquel() {
    if (firstNum != '' && secondNum != '') {
        var x = parseFloat(firstNum);
        var y = parseFloat(secondNum);
        if (sign == '+') {
            sum = x + y + '';
        } else if (sign == '-') {
            sum = x - y + '';
        } else if (sign == '×') {
            sum = x * y + '';
        } else {
            sum = x / y + '';
        }
        document.getElementById('content').value = sum;
        //清理工作
        firstNum = '';
        secondNum = '';
        sign = '';

    } else {
        alert("请输入需要运算的两个数字");
    }

}

//处理小数点
function radixPoint() {
    if (sign == '') {
        if (firstNum.length > 0 && firstNum.indexOf('.') == -1) {
            firstNum = firstNum + '.';
        }

    } else {
        if (secondNum.length > 0 && secondNum.indexOf('.') == -1) {
            secondNum = secondNum + '.';
        }

    }
    document.getElementById('content').value = firstNum + sign + secondNum;

}


//处理AC
function clickAC() {
    sign = '';
    firstNum = '';
    secondNum = '';
    sum = '';
    document.getElementById('content').value = firstNum + sign + secondNum;

}

//处理逐个删除
function clickBack() {
    if (secondNum.length > 0) {
        secondNum = secondNum.substring(0, secondNum.length - 1);
    } else if (sign.length > 0) {
        sign = sign.substring(0, sign.length - 1);
    } else {
        firstNum = firstNum.substring(0, firstNum.length - 1);
    }
    document.getElementById('content').value = firstNum + sign + secondNum;

}

//处理%
function per() {
    var x = parseFloat(firstNum);
    sum = x / 100 + '';
    document.getElementById('content').value = sum;
    firstNum = '';
}