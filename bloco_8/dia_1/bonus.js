const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 10,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomHit = (maxHit, minHit) => {
  return Math.floor(Math.random() * (maxHit - minHit + 1) ) + minHit;
}

const dragonHit = (block) => {
  const maxHit = dragon.strength;
  const minHit = 15;
  return block(maxHit, minHit);
}

const warriorHit = (block) => {
  const maxHit = warrior.strength * warrior.weaponDmg
  const minHit = warrior.strength
  return block(maxHit, minHit)
}

const mageHit = (block) => {
  const maxHit = mage.intelligence * 2
  const minHit = mage.intelligence
  let mageAtk = {};
  if(mage.mana >= 15) {
    mageAtk = {
      hit: block(maxHit, minHit),
      mana: mage.mana -15
    }
  } else {
    mageAtk = {
      msg: 'Não possui mana suficiente'
    }
  }
  return mageAtk
}
console.log(mageHit(randomHit));