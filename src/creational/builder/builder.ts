class WoodenHouseBuilder {
    private house: WoodenHouse;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.house = new WoodenHouse();
    }

    public addBasement(): WoodenHouseBuilder {
        this.house.setBasement('wooden basement');
        
        return this;
    }

    public addFirstFloor(): WoodenHouseBuilder {
        this.house.setFirstFloor('wooden first floor');

        return this;
    }

    public addGarage(): WoodenHouseBuilder {
        this.house.setGarage('wooden garage');

        return this;
    }

    public addSecondFloor(): WoodenHouseBuilder {
        this.house.setSecondFloor('wooden second floor');

        return this;
    }

    public build(): WoodenHouse {
        const result = this.house;
        this.reset();
        return result;
    }
}

interface House {
    setBasement(basement: string): void;
    setFirstFloor(firstFloor: string): void;
    setGarage(garage: string): void;
    setSecondFloor(secondFloor: string): void;
}
class WoodenHouse implements House {
    private basement: string;
    private firstFloor: string;
    private secondFloor: string;
    private garage: string;

    public setBasement(basemenet: string) {
        this.basement = basemenet;
    }

    public setFirstFloor(firstFloor: string) {
        this.firstFloor = firstFloor;
    }

    public setSecondFloor(secondFloor: string) {
        this.secondFloor = secondFloor;
    }

    public setGarage(garage: string) {
        this.garage = garage;
    }
}

class Director {
    private builder: WoodenHouseBuilder;

    public setBuilder(builder: WoodenHouseBuilder): void {
        this.builder = builder;
    }

    public buildSmallHouseWithGarage(): void {
        this.builder
        .addFirstFloor()
        .addGarage();
    }

    public buildBigHouseWithGarageAndBasemenet(): void {
        this.builder
        .addFirstFloor()
        .addSecondFloor()
        .addGarage()
        .addBasement();
    }
}

function clientCode(director: Director) {
    const builder = new WoodenHouseBuilder();
    director.setBuilder(builder);

    console.log('Small House');
    director.buildSmallHouseWithGarage();
    builder.build();

    console.log('Standard full featured product:');
    director.buildBigHouseWithGarageAndBasemenet();
    builder.build();

    // the Builder pattern can be used without a Director class.
    console.log('Custom product:');
    builder.addFirstFloor()
    .addBasement()
    .build();
}

const director = new Director();
clientCode(director);