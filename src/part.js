var validTypes = [
  'shell',
  'hyperdrive',
  'computer',
  'life support',
  'landing gear',
  undefined
]
class Part {
  constructor(parts) {
    this.name = parts.name;
    this.validMessage = [undefined, parts.type]
    this.type = this.validMessage[validTypes.includes(parts.type)*1];
    this.value = parts.value;
    this.broken = false;
  }
  isValid(){
    return !!this.name && !!this.type && !!this.value;
  }
}

module.exports = Part;
