{
    {
        {
            {
                var sera = 'Sera ??'
            }
        }
    }
}

// sera is see
console.log(sera)

// Scope is respect only within functions
function test() {
    var local = 123
    console.log(local)
}

test()
// console.log(local)