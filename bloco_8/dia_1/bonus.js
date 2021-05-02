const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 200,
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
  strength: 130,
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
  const maxHit = warrior.strength * warrior.weaponDmg;
  const minHit = warrior.strength;
  return block(maxHit, minHit);
}

const mageHit = (block) => {
  const maxHit = mage.intelligence * 2;
  const minHit = mage.intelligence;
  let mageHitInfo = {};
  if(mage.mana >= 15) {
    mageHitInfo = {
      hit: block(maxHit, minHit),
      manaUsed: 15,
      currentMana: mage.mana - 15
    }
  } else {
    mageHitInfo = {
      hit: '0, Não possui mana suficiente',
      manaUsed: 0,
      currentMana: mage.mana
    }
  }
  return mageHitInfo;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorHit) => {
    if (warrior.healthPoints > 0 && dragon.healthPoints > 0) {
      console.log(`Turno do guerreiro:
      `);
      let hitPoints = warriorHit(randomHit);
      warrior.damage = hitPoints;
      console.log(`Dano causado ao dragon: ${hitPoints}`);
      dragon.healthPoints -= hitPoints;
      console.log(`Vida do dragão: ${dragon.healthPoints}`);
      console.log(`<=======================fim de turno do persongem========================>
      `);
    }
  },
  mageTurn: (mageHit => {
    if (mage.healthPoints > 0 && dragon.healthPoints > 0) {
      console.log(`Turno do mago:
      `);
      let hitInfo = mageHit(randomHit);
      if (hitInfo.manaUsed === 15) {
        mage.damage = hitInfo.hit;
        console.log(`Dano causado ao dragão: ${hitInfo.hit}`);
        dragon.healthPoints -= hitInfo.hit;
        console.log(`Vida do dragão: ${dragon.healthPoints}`);
        console.log(`Mana gasta: ${hitInfo.manaUsed}`);
        mage.mana -= hitInfo.manaUsed;
        console.log(`Mana atual ${mage.mana}`);
        console.log(`<=======================fim de turno do persongem========================>
      `)
      } else {
        console.log(`Dano causado ao dragão: 0`);
        console.log(`Vida do dragão: ${dragon.healthPoints}`);
        console.log(`Mana gasta: ${hitInfo.manaUsed}`);
        console.log(`Mana atual ${mage.mana}`);
        console.log(`<=======================fim de turno do persongem========================>
      `);
      }
    }
  }),
  dragonTurn: (dragonHit) => {
    if (dragon.healthPoints > 0 && (warrior.healthPoints > 0 || mage.healthPoints)) {
      console.log(`Turno do dragão:
      `);
      if (warrior.healthPoints > 0) {
        let hitPointsToWarrior = dragonHit(randomHit);
        console.log(`Dano causado ao guerreiro: ${hitPointsToWarrior}`);
        dragon.damage += hitPointsToWarrior;
        warrior.healthPoints -= hitPointsToWarrior;
        console.log(`Vida do guerreiro: ${warrior.healthPoints}`)
      } else {
        console.log(`Vida do mage: guerreiro morto`);
      }
      if (mage.healthPoints > 0) {
        let hitPointsToMage = dragonHit(randomHit);
        console.log(`Dano causado ao mago: ${hitPointsToMage}`);
        dragon.damage += hitPointsToMage;
        mage.healthPoints -= hitPointsToMage;
        console.log(`Vida do mago: ${mage.healthPoints}`)
      } else {
        console.log(`Vida do mago: morto`)
      }
      console.log(`<=======================fim de turno do persongem========================>
      `)
    }

  }
};

let warriorOrMageLives = (warrior.healthPoints > 0 || mage.healthPoints > 0);
for(let turn = 1; dragon.healthPoints > 0 && warriorOrMageLives; turn += 1) {
  console.log(`<======================Turno: ${turn}======================>
  `)
  gameActions.warriorTurn(warriorHit);
  gameActions.mageTurn(mageHit);
  gameActions.dragonTurn(dragonHit);
  warriorOrMageLives = (warrior.healthPoints > 0 || mage.healthPoints > 0)
}

if (dragon.healthPoints > 0) {
  console.log ('DRAAAAAAAGON WINS!!!')
} else if (warrior.healthPoints > 0 && mage.healthPoints > 0) {
  console.log ('WAAAAAARRIOR AAAAAAAAAND MAAAAAGE WINS!!!')
} else if (warrior.healthPoints > 0) {
  console.log ('WAAAAAARRIOR WINS!!!')
}else {
  console.log ('MAAAAAGE WINS!!!')
};
