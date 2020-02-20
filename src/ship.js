var designations = ['passenger', 'cargo', 'military', undefined];

class Ship {
  constructor(ship){
    this.name = ship.name;
    this.typeMes = [undefined, ship.type];
    this.type = this.typeMes[designations.includes(ship.type)*1];
    this.maxCrew = ship.maxCrew;
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = ship.fuel || 0;
    this.captain = ship.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = ship.parts || {};
  };
  addCrew(crewArray) {
    var spaceLeft = this.maxCrew - this.crew.length
    for (var i = 0; i < spaceLeft; i++){
      crewArray[i].isAlive === true && this.crew.push(crewArray[i]);
    };
    return
  };
  loadCargo(partCargo){
    (!!partCargo.type === true) && (this.cargo.push(partCargo));
  }
  updatePart(part){
    this.parts += {part.type};
  }
};
module.exports=Ship;
