var me = {
    name : 'Antonio',
    age: 16
}

function checkAge(person) {
    console.log('A idade dessa pessoa é: ' + person.age)
    if(person.age >= 18){
        console.log('A pessoa é maior de idade')
    } else {
        console.log('A pessoa é menor de idade')
    }
}

checkAge(me)


/**
 * Compaction operators:
 * 
 * - == means: 
 * A comparison!
 * i.e. it only compares the value, not the type! 
 * (e.g. '3' == 3 return true.)
 * 
 * - === means: 
 * A strict comparison!
 * i.e. compare the value and the type!
 * (e.g. '3' === 3 return false.)
 * 
 */