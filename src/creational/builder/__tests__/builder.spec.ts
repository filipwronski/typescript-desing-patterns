import { Director, WoodenHouseBuilder } from "../builder";

describe('Wooden House Builder', () => {
    let director: Director;
    let builder: WoodenHouseBuilder;
    beforeEach(() => {
        director = new Director();
        builder = new WoodenHouseBuilder();
        director.setBuilder(builder);
    })
    it('should return small wooden house with garage', () => {
        director.buildSmallHouseWithGarage();
        const house = builder.build();

        expect(house.getHouse()).toEqual({
            basement: undefined,
            firstFloor: 'wooden first floor',
            secondFloor: undefined,
            garage: 'wooden garage',
        })
    })

    it('should return big wooden house with garag and basement', () => {
        director.buildBigHouseWithGarageAndBasemenet();
        const house = builder.build();

        expect(house.getHouse()).toEqual({
            basement: 'wooden basement',
            firstFloor: 'wooden first floor',
            secondFloor: 'wooden second floor',
            garage: 'wooden garage',
        })
    })

    it('should return small wooden house without director', () => {
        const house = builder.addFirstFloor()
        .addBasement()
        .build()

        expect(house.getHouse()).toEqual({
            basement: 'wooden basement',
            firstFloor: 'wooden first floor',
            secondFloor: undefined,
            garage: undefined,
        })
    })
});
