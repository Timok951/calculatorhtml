function onClickButtonPlus(el) {

    var firstvalue = document.querySelector('input[name="firstvalue"]').value;
    var secondvalue = document.querySelector('input[name="secondvalue"]').value;
    var firstnum = parseInt(firstvalue);
    var secondnum = parseInt(secondvalue);
    alert(firstnum + secondnum);
}

function onClickButtonMinus(el) {
    var firstvalue = document.querySelector('input[name="firstvalue"]').value;
    var secondvalue = document.querySelector('input[name="secondvalue"]').value;
    var firstnum = parseInt(firstvalue);
    var secondnum = parseInt(secondvalue);
    alert(firstnum - secondnum);
}

function onClickButtonMultiply(el){
	    var firstvalue = document.querySelector('input[name="firstvalue"]').value;
    var secondvalue = document.querySelector('input[name="secondvalue"]').value;
    var firstnum = parseInt(firstvalue);
    var secondnum = parseInt(secondvalue);
    alert(firstnum * secondnum);
}

function onClickButtonDel(el){
	    var firstvalue = document.querySelector('input[name="firstvalue"]').value;
    var secondvalue = document.querySelector('input[name="secondvalue"]').value;
    var firstnum = parseInt(firstvalue);
    var secondnum = parseInt(secondvalue);
    alert(firstnum / secondnum);
}