var yosh = +prompt('Yoshingizni kiriting')

if (yosh <= '18') {
    alert('Yoshsiz.O`qishingiz kerak');
}else if (yosh >= '19' && yosh <= '49') {
    alert('Ishlashingiz kerak');
}else if (yosh >= '50' && yosh <= '59') {
    alert('Yaqinda pensiyaga chiqasiz');
}else if (yosh >= '60' && yosh <= '150') {
    alert('Pensionerga o`xshaysiz, hali tirik bo`lsangiz :)');
}else if (yosh >= '151' && yosh <= '9999999999999999999999999999999999999999999') {
    alert('Nimadir noto`gri ketib qoldi')
}

var _name =  prompt('Ismingizni kiriting')

if (_name == 'Temur') {
    var $name = "Temur"
    alert('Hello Boss');
}else if (isNaN(_name)) {
    alert('Hello Guest')
}

