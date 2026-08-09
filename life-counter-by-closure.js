

const calculateLife = () => {
    let lives = 3;
    return () => {
        if(lives > 0) {
            lives--;
        }
        return lives;
    }
}


const ShoaibLifeUpdate = calculateLife();
const SanjinLifeUpdate = calculateLife();
const SuhanaLifeUpdate = calculateLife();

console.log(ShoaibLifeUpdate());
console.log(ShoaibLifeUpdate());
console.log(ShoaibLifeUpdate());
console.log(SanjinLifeUpdate());
console.log(SanjinLifeUpdate());
console.log(SuhanaLifeUpdate());
