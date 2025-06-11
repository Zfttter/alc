let food = document.querySelectorAll('.food')
let foodIndex = [0,1,2,3,5,6,7,8]
function randomFood() {
    let timerIndex = 0
    let nec = 0
    let timer = setInterval(() => {
        if(timerIndex == food.length){
            timerIndex = 0
            nec = nec + 1
        }
        for(let i = 0; i < food.length; i++){
            food[i].classList.remove('food_active')
        }
        food[timerIndex].classList.add('food_active')
        timerIndex++
        if(nec > 2){
            for(let i = 0; i < food.length; i++){
                food[i].classList.remove('food_active')
            }
            clearInterval(timer)
            let randomText = getRandomInt(0, 19)
            food[randomText].classList.add('food_active')
            let food_text = document.querySelector('.food_text')
            switch (randomText) {
                case 0:
                    food_text.innerHTML = 'Today we\'re having dumplings'
                    break
                case 1:
                    food_text.innerHTML = 'Rice dumpling today'
                    break
                case 2:
                    food_text.innerHTML = 'Eat Mantou today'
                    break
                case 3:
                    food_text.innerHTML = 'Today we\'re having noodles'
                    break
                case 4:
                    food_text.innerHTML = 'Have Fried Rice today'
                    break
                case 5:
                    food_text.innerHTML = 'Today we have fat sausage noodles'
                    break
                case 6:
                    food_text.innerHTML = 'Today we\'re having beef noodle soup'
                    break
                case 7:
                    food_text.innerHTML = 'Eat Steamed rolls today'
                    break
                case 8:
                    food_text.innerHTML = 'Eating mooncakes today'
                    break
                case 9:
                    food_text.innerHTML = 'Today we\'re having steamed buns'
                    break
                case 10:
                    food_text.innerHTML = 'Today we\'re having pie'
                    break
                case 11:
                    food_text.innerHTML = 'Today we eat Laba Congee'
                    break
                case 12:
                    food_text.innerHTML = 'Today we\'re having Chongyang cake'
                    break
                case 13:
                    food_text.innerHTML = 'Today we\'re eating fried dough sticks'
                    break
                case 14:
                    food_text.innerHTML = 'Today we have Qingtuan'
                    break
                case 15:
                    food_text.innerHTML = 'Eat Zongzi today'
                    break
                case 16:
                    food_text.innerHTML = 'Today we\'re eating a jacket box'
                    break
                case 17:
                    food_text.innerHTML = 'Eating beans today'
                    break
                case 18:
                    food_text.innerHTML = 'Today I\'m eating oil splashed noodles'
                    break
                case 19:
                    food_text.innerHTML = 'Today we\'re eating Qiao Guo'
                    break
            }
        }
    },100)
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
document.querySelector('.food_btn').onclick = function () {
    randomFood()
}
