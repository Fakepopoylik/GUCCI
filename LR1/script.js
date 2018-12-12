window.onload = function() {1
    const name = 'Popoilik';
    alert(name);
    const a = 11;   
    const b = 6;  
    const c = a - b;
    const d = 7;    
    const result = c + d;
    console.log(result);
    function task3 (variant){
        +variant >= 7 ? alert('Right') : alert('Wrong');
        if(variant%2 == 0) {
        variant = +variant + 7;
        } else { 
        variant -= 3;
        }
        return variant;
    };
    console.log('Task 3 begins: ');
    console.log(task3(prompt('Input your variant: ', a)));
    console.log(task3(prompt('Input your variant: ', 5)));
    console.log(task3(prompt('Input your variant: ', 0)));
    console.log(task3(prompt('Input your variant: ', -3)));
    console.log(task3(prompt('Input your variant: ', 2)));
    console.log('Task 3 ended her.');
    function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
    }
    console.log('Task 4 begins: ');
    for (var i = 0; i <= a+10; i++) {
        console.log(i+'^2 = '+pow(i, 2));
    }
    console.log('Task 4 ended her.');
    function simpleNumber(begin, end){
        next:
        for (var i = begin; i <= end; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) continue next;
            }
        console.log(i);
        }
    }
    console.log('Task 5 begins: ');
    console.log(simpleNumber(2, a+10));
    console.log('Task 5 ended her.');
};