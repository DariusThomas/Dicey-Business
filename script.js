$(document).ready(function () {
    let $btnCreate = $('#create-die');
    let $container = $('#die-container');
    let $rollBtn = $('#roll-die');
    let objArr = [];
    let counterArr =[];
    let $sumBtn = $('#sum-btn');
    let count=0
    $btnCreate.click(createDie)
    $rollBtn.click(rollDice)
    $sumBtn.click(sumDice)
    class Die {
        constructor(value,counter) {
            this.value = value
            this.div = $('<div></div>')
            this.div.attr('class', 'die m-2 d-flex justify-content-center align-items-center display-4')
            this.placedDie = counter
            this.div.css({
                'height': '100px',
                'width': '100px',
                'background-color': 'red',
                'color': 'white'
            });
            this.dieVal = $(`<div>${this.value}</div>`)
            this.div.append(this.dieVal)
            this.div.click(this.roll.bind(this));
            this.div.dblclick(this.removeDie.bind(this))
            $container.append(this.div)
        }
        roll() {
            let newVal = Math.ceil(Math.random() * 6)
            this.value = newVal
            this.dieVal.text(`${this.value}`)
        }

        removeDie(){
           let indexToSplice =counterArr.indexOf(this.placedDie)
            objArr.splice(indexToSplice,1)
            counterArr.splice(indexToSplice,1)
            this.div.remove()
        }
    }

    function createDie() {
        let val = Math.ceil(Math.random() * 6)
        count++ 
        let die = new Die(val,count)
        objArr.push(die)
        counterArr.push(count)
    }

    function rollDice() {
        for (let i = 0; i < objArr.length; i++) {
            objArr[i].roll();
        }
    }
    function sumDice() {
        let sum = 0
        for (let i = 0; i < objArr.length; i++) {
            sum = sum + objArr[i].value
        }
        alert(sum)
    }

})