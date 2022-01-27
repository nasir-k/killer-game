const playerAttackValue = 10;
const mosnterAttackValue = 15;
const strongAttackValue = 20;
const HEAL_VALUE = 20;

let usrChoosenHealth = parseInt(prompt("choose health for monster and you"));

if(usrChoosenHealth === 0 || usrChoosenHealth === NaN || usrChoosenHealth > 500){
  alert('invalid input');
  usrChoosenHealth = 100; 
}

let choosenLife = 100; //usrChoosenHealth;
let playerHealth = choosenLife;
let monsterHealth= choosenLife;
// let bonusLife = true;

adjustHealthBars(choosenLife);

function reset(){
  playerHealth = choosenLife;
  monsterHealth= choosenLife;
  resetGame(choosenLife);
}

// function bonusLifeHandler(){
//  const initialResult = playerHealth
// }

function chooseAttack(attackMode){
  let choosenMode;
 if(attackMode === "playerAttack"){
   choosenMode = playerAttackValue;
 }else if(attackMode === "strongAttack"){
   choosenMode = strongAttackValue;
 }
 const damage = dealMonsterDamage(playerAttackValue);
 monsterHealth -= damage;
 const playerDamage = dealPlayerDamage(mosnterAttackValue);
 playerHealth -= playerDamage;
 if (monsterHealth <= 0 && playerHealth >= 0){
    alert('You Won');
 }else if (playerHealth <= 0 && monsterHealth >= 0){
alert('You Lose');
 }else if(monsterHealth <= 0 && playerHealth <= 0){
alert('You Had a Draw');
 }
 if(monsterHealth <= 0 || playerHealth <= 0){
  reset();
 }
}

function attackHandler(){
  chooseAttack("playerAttack");
}

function strongAttackHandler(){
 chooseAttack("strongAttack");
}

function healing(){
  let healValue;
  if(playerHealth >= choosenLife - HEAL_VALUE){
   alert('You Cant Heal At This Point');
   healValue = choosenLife - playerHealth;
  }else
  healValue = HEAL_VALUE;
  increasePlayerHealth(healValue);
 playerHealth += HEAL_VALUE; 
 const playerDamage = dealPlayerDamage(mosnterAttackValue);
 playerHealth -= playerDamage;
 
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healing);