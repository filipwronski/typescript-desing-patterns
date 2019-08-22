import {
    VictorianFurnitureFactory,
    ModernFurnitureFactory,
    VictorianChair,
    VictorianTable,
    ModernTable,
    ModernChair,
} from "../abstractFactory";


describe('AbstractFactory', () => {
    interface FurnitureOrder {
        style: FurnitureStyle;
    }
    enum FurnitureStyle {
        victorian = 'victorian',
        modern = 'modern',
    }
    const prepareFurnitureOrder = (order: FurnitureOrder) => {
        switch(order.style) {
            case FurnitureStyle.victorian:
                return {
                    chair: new VictorianFurnitureFactory().createChair(),
                    table: new VictorianFurnitureFactory().createTable(),
                }
            case FurnitureStyle.modern:
                return {
                    chair: new ModernFurnitureFactory().createChair(),
                    table: new ModernFurnitureFactory().createTable(),
                }
        }
    }

    it('should return victorian furnitures for order', () => {
        const furnitureOrder: FurnitureOrder = {
            style: FurnitureStyle.victorian,
        }

        expect(prepareFurnitureOrder(furnitureOrder)).toStrictEqual({
            chair: new VictorianChair(),
            table: new VictorianTable(),
        })
    })

    it('should return modern furnitures for order', () => {
        const furnitureOrder: FurnitureOrder = {
            style: FurnitureStyle.modern,
        }

        expect(prepareFurnitureOrder(furnitureOrder)).toStrictEqual({
            chair: new ModernChair(),
            table: new ModernTable(),
        })
    })

})