class Hamburger {
  constructor (size, filling, flavoring, mayo) {
    this.size = size;
    this.filling = filling;
    this.flavoring = flavoring;
    this.mayo = mayo;
  }
  getPrice() {
    let result = 0;
    if (this.size === 'small') {
      result += 50;
    } else result += 100;
    
    if (this.filling === 'cheese') {
      result += 10;
    } else if (this.filling === 'salad') {
      result += 20;
    } else if (this.filling === 'potato') {
      result += 15;
    }

    if (this.flavoring) result += 15;
    if (this.mayo) result += 20;

    return result;
  }

  getCalories() {
    let result = 0;
    if (this.size === 'small') {
      result += 20;
    } else result += 40;

    if (this.filling === 'cheese') {
      result += 20;
    } else if (this.filling === 'salad') {
      result += 5;
    } else if (this.filling === 'potato') {
      result += 10;
    }

    if (this.mayo) result += 5;

    return result;
  }
}
