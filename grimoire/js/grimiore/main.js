// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

class spell {
    constructor(name, isEvil, energyRequired) {
        this.name = name,
            this.isEvil = isEvil,
            this.energyRequired = energyRequired
    }

    getEnergyRequired() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

class spellBook {
    constructor(title, spells) {
        this.title = title,
            this.spells = spells
    }
}

const getAllSpells = () => {
    return allSpells = [
        new spell("Turn enemy into a newt", true, 5.1),
        new spell("Conjure some gold for a local charity", false, 2.99),
        new spell("Give a deaf person the ability to heal", false, 12.2),
        new spell("Make yourself emperor of the universe", true, 100.0),
        new spell("Convince your relatives your political views are correct", false, 2921.5),
        new spell("Not have acne for FIVE MINUTES", true, 10000),
        new spell("Vishal's cult ritual of doom", false, 5000)
    ]
}


const makeGoodSpellBook = spellArr => {
    return new spellBook("Good Book", spellArr.filter(spell => !spell.isEvil))
}

const makeEvilSpellBook = spellArr => {
    return new spellBook("Evil Book", spellArr.filter(spell => spell.isEvil))
}

const displaySpellBook = book => {
    console.log(book.title);
    book.spells.forEach(ele => console.log(ele.name))
}
allSpells = getAllSpells()
goodBook = makeGoodSpellBook(allSpells)
evilBook = makeEvilSpellBook(allSpells)

displaySpellBook(goodBook)
console.log();
displaySpellBook(evilBook)

const newtSpell = new spell("Turn enemy into a newt", true, 5.1)
const alchemySpell = new spell("Conjure some gold for a local charity", false, 2.99)
const jesusSpell = new spell("Give a deaf person the ability to heal", false, 12.2)
const spellIWant = new spell("Make yourself emperor of the universe", true, 100.0)
const destroyRepublicansInTheMarketplaceOfIdeasSpell = new spell("Convince your relatives your political views are correct", false, 2921.5)