let shape = ['oval', 'diamond', 'squiggle']
let color = ['red', 'green', 'purple']
let number = [1, 2, 3]
let shade = ['blank', 'solid', 'stripe']


let cards = []

for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < color.length; j++) {
        for (let x = 0; x < number.length; x++) {
            for (let y = 0; y < shade.length; y++) {
                cards.push({
                    shape: shape[i],
                    color: color[j],
                    number: number[x],
                    shade: shade[y],
                    image: `${color[j].slice(0,2)}${shape[i].slice(0,2)}n${number[x]}${shade[j].slice(0,2)}.png`

                })
            }
        }
    }
}


function combinations(str) {
    var fn = function (active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a)
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}



const checkIfSet = (set) => {

    let shapeS = checkFeaturesSame(set[0].shape, set[1].shape, set[2].shape)
    let colorS = checkFeaturesSame(set[0].color, set[1].color, set[2].color)
    let numberS = checkFeaturesSame(set[0].number, set[1].number, set[2].number)
    let shadeS = checkFeaturesSame(set[0].shade, set[1].shade, set[2].shade)

    let shapeD = checkFeaturesDiff(set[0].shape, set[1].shape, set[2].shape)
    let colorD = checkFeaturesDiff(set[0].color, set[1].color, set[2].color)
    let numberD = checkFeaturesDiff(set[0].number, set[1].number, set[2].number)
    let shadeD = checkFeaturesDiff(set[0].shade, set[1].shade, set[2].shade)

    let shapeIsDEverythingIsS = checkIfAllSame(shapeD, colorS, numberS, shadeS)
    let colorIsDEverythingIsS = checkIfAllSame(colorD, shapeS, numberS, shadeS)
    let numberIsDEverythingIsS = checkIfAllSame(numberD, colorS, shapeS, shadeS)
    let shadeIsDEverythingIsS = checkIfAllSame(shadeD, colorS, numberS, shapeS)
    let everythingIsD = checkIfAllDiff(shapeD, colorD, numberD, shadeD)


    if (everythingIsD) {
        return everythingIsD
    }
    if (shapeIsDEverythingIsS) {
        return shapeIsDEverythingIsS
    }
    if (colorIsDEverythingIsS) {
        return colorIsDEverythingIsS
    }
    if (numberIsDEverythingIsS) {
        return numberIsDEverythingIsS
    }
    if (shadeIsDEverythingIsS) {
        return shadeIsDEverythingIsS
    }




}

const checkFeaturesSame = (feature1, feature2, feature3) => {
    if (feature1 === feature2) {
        if (feature1 === feature3) {
            return true
        }
        return false
    }
    return false
}

const checkFeaturesDiff = (feature1, feature2, feature3) => {
    if (feature1 !== feature2) {
        if (feature1 !== feature3) {
            if (feature2 !== feature3) {
                return true
            }
            return false
        }
        return false
    }
    return false
}
const checkIfAllSame = (diffF, sameF1, sameF2, sameF3) => {
    if (diffF) {
        if (sameF1) {
            if (sameF2) {
                if (sameF3) {
                    return true
                }
                return false
            }
            return false
        }
        return false
    }
}

const checkIfAllDiff = (diffF1, diffF2, diffF3, diffF4) => {
    if (diffF1) {
        if (diffF2) {
            if (diffF3) {
                if (diffF4) {
                    return true
                }
                return false
            }
            return false
        }
        return false
    }

}



let hand = [cards[0], cards[40], cards[80], cards[45], cards[76], cards[72], cards[26], cards[17], cards[80], cards[28], cards[61], cards[75]]

let handObj = {}

for (let i = 0; i < hand.length; i++) {
    if (i === 10) {
        handObj['a'] = hand[i]
    } else if (i === 11) {
        handObj['b'] = hand[i]
    } else handObj[i] = hand[i]
}


let combinationKeys = combinations(Object.keys(handObj).join('')).filter((e) => {
    return e.length === 3
})

let cardCombination = []

combinationKeys.forEach(element => {
    cardCombination.push([handObj[element[0]], handObj[element[1]], handObj[element[2]]])
});

let SET = []

for (let i = 0; i < cardCombination.length; i++) {
    if (checkIfSet(cardCombination[i])) {
        SET.push(cardCombination[i])
    }
}

let search = document.querySelector('.search')
let results = document.querySelector('.results')


const searchCard = (input) => {

    let searchArr = input.split(' ')
    let result = []

    if (searchArr.length > 0) {
        result = cards.filter(e => e.shape === searchArr[0])
        if (searchArr.length > 1) {
            result = result.filter(e => e.color === searchArr[1])
            if (searchArr.length > 2) {
                result = result.filter(e => e.number.toString() === searchArr[2])
                if (searchArr.length > 3) {
                    result = result.filter(e => e.shade === searchArr[3])
                }
            }
        }
    }
    return result
}



search.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        let test = results.innerHTML
        test += 'hello'
        results.innerHTML = searchCard(e.target.value).reduce((acc,e)=>acc+=`<li>${e.shape} ${e.color} ${e.number} ${e.shade} <button>add</button> <img style="width=30px;height:60px;"src="./images/${e.image}"></li>`,'')

        //console.log(searchCard(e.target.value).reduce((acc,e)=>acc+=`<li>${e.shape} ${e.color} ${e.number} ${e.shade}</li> <button>add</button>`),'')
    }

})

results.addEventListener('click', (e) => {
   console.log(e)

})