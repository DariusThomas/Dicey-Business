$(document).ready(function () {
    let $btnCreate = $('#create-die');
    let $container = $('#die-container');
    let $rollBtn =$('#roll-die');
    let objArr = [];
    $btnCreate.click(createDie)
    $rollBtn.click(rollDice)

    class Die {
        constructor(value) {
            this.value =value
            this.div = $('<div></div>')
            this.div.attr('class', 'die m-2 d-flex justify-content-center align-items-center display-4')
            this.div.css({
                'height': '100px',
                'width': '100px',
                'background-color': 'red',
                'color': 'white'
            });
            this.dieVal = $(`<div>${this.value}</div>`)
            this.div.append(this.dieVal)
            $container.append(this.div)
        }
        roll() {
            let newVal= Math.ceil(Math.random() * 6)
            this.value = newVal
            this.dieVal.empty();
            this.dieVal = $(`<div>${this.value}</div>`)
            this.div.append(this.dieVal)
            $container.append(this.div)
        }
    }
    
    function createDie() {
       let val =  Math.ceil(Math.random() * 6)
        let die = new Die(val)
       objArr.push(die)
    }

    function rollDice(){
        for(let i = 0; i<objArr.length; i++){
            objArr[i].roll();
        }
    }


})