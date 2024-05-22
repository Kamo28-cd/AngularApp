import { Sport } from './sport';

export class IceHockey extends Sport {
  constructor() {
    super('Ice Hockey', 60, 6, 3);
  }

  // Unique method for Ice Hockey
  getPeriods(): string {
    return `Ice Hockey is played in three periods.`;
  }

  // Override getDescription method
  override getDescription(): string {
    return `${super.getDescription()} It is played in three periods with breaks.`;
  }
}

const hockey = new IceHockey();
