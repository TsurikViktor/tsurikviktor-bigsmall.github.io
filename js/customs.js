var z = confirm('сравнение значений (OK) сравнение КМ-FooT (Отмена)' );

if (z===true){
    var x = prompt('Введите значение 1') ;
    var y = prompt('Введите значение 2');

    console.log('значение 1--->',x);
    console.log('значение 1--->',y);

    if (x > y) {
        console.log('значение 1--->',x,'> значения 2--->',y);
        alert(`значение 1 ---> ( ${x} ) больше значения 2 ---> ( ${y} )`);
    } 
    else if (x < y) {
        console.log('значение 1--->',x,'< значения 2--->',y);
        alert (`значение 1 ---> ( ${x} ) меньше значения 2 ---> ( ${y} )`);
    } 
    else if (x === y) {
        console.log('значение 1 --->' ,x,'= значению 2--->',y);
        alert (`значение 1 ---> ( ${x} ) равно значению 2 ---> ( ${y} )`);
    }
} else {
    var km = prompt('Введите растояние в KM') ;
    var foot = prompt('Введите растояние в FOOT');
    var kmToM = km*1000;
    var footToM = foot*0.305;

    console.log('KM--->',km);
    console.log('FOOT--->',foot);
    console.log('KM--->M',kmToM);
    console.log('FOOT--->M',footToM);

    if (kmToM > footToM) {
        console.log('km > foot--->',kmToM > footToM);
        alert (`${km} km больше ${foot} foot`);
    }
    else if (kmToM < footToM) {
        console.log('km < foot--->',kmToM < footToM);
        alert (`${km} km меньше ${foot} foot`);
    }
    else if (kmToM === footToM) {
        console.log('km = foot--->',kmToM === footToM);
        alert(`${km} km равно ${foot} foot`);
    }
}