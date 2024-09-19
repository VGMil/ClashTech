export class HeroModel {
    private img: string;
    private name: string;
    private health_total: number;
    private mana_total: number;
    private health_quantity: number;
    private mana_quantity: number;

        /**
     * @param img Image of the hero
     * @param name Name of the hero
     * @param health Total health of the hero
     * @param mana Total mana of the hero
     */
    constructor(img: string, name: string, health: number, mana: number) {
        this.img = img;
        this.name = name;
        this.health_total = health;
        this.mana_total = mana;
        this.health_quantity = health;
        this.mana_quantity = mana;
    }

    getHealth_Quantity(): number {
        return this.health_quantity;
    }
    getMana_Quantity(): number {
        return this.mana_quantity;
    }
    addHealth_Quantity(quantity: number) {
        this.health_quantity = quantity;
    }
    addMana_Quantity(quantity: number) {
        this.mana_quantity = quantity;
    }
    removeHealth_Quantity(quantity: number) {
        this.health_quantity -= quantity;
    }
    removeMana_Quantity(quantity: number) {
        this.mana_quantity -= quantity;
    }
    getImg(): string {
        return this.img;
    }

    getName(): string {
        return this.name;
    }
    getHealth_Total() {
        return this.health_total;
    }
    getMana_Total() {
        return this.mana_total;
    }
}
