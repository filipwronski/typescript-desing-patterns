interface Furniture {
    info(): string;
    color(): string;
}

interface FurnitureFactory {
    createChair(): Furniture; 
}
 
export class VictorianFurnitureFactory implements FurnitureFactory {
    createChair() {
       return new VictorianChair(); 
    }
    createTable() {
        return new VictorianTable();
    }
}
  
export class ModernFurnitureFactory implements FurnitureFactory{
    createChair() {
        return new ModernChair();
    }
    createTable() {
        return new ModernTable();
    }
}
  
export class ModernChair implements Furniture {
    info() {
        return "Amazing modern chair";
    }
    color() {
        return "brown";
    }
}

export class VictorianChair implements Furniture {
    info() {
        return "Dignified victorian chair";
    }
    color() {
        return "brown";
    }
}

export class ModernTable implements Furniture {
    info() {
        return "Amazing modern tabler";
    }
    color() {
        return "brown";
    }
}

export class VictorianTable implements Furniture {
    info() {
        return "Dignified victorian table";
    }
    color() {
        return "brown";
    }
}