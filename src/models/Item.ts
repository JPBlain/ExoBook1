export class Item {
  description: string[];
  isAvailable: boolean;

  constructor(public name: string) {
    this.isAvailable = true;
  }
}
