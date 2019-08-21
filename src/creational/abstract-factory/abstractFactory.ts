export enum DroidType {
    Battle = 'battle',
    Pilot = 'pilot'
}

interface Droid {
    info(): string;
}

interface DroidFactory {
    create(): Droid; 
}
export class Client {
    droidProducer(kind: DroidType) {
        switch(kind) {
            case DroidType.Battle:
                return new BattleDroidFactory().create();
            case DroidType.Pilot:
                return new PilotDroidFactory().create();
            default:
                throw new Error('Wrong droid type');
        }
    }
}
  
class BattleDroidFactory implements DroidFactory {
    create() {
       return new B1(); 
    }
}
  
class PilotDroidFactory implements DroidFactory{
    create() {
        return new Rx24();
    }
}
  
export class B1 implements Droid {
    info() {
        return "B1, Battle Droid";
    }
}

export class Rx24 implements Droid {
    info() {
        return "Rx24, Pilot Droid";
    }
}