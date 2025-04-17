console.log(global === this )
console.log(module == this )

this.sayHi = function () {
    console.log('Hi!')
}

