import { Sport } from './sport';

export class Football extends Sport {
  constructor() {
    super('Football', 90, 11, 1);
  }

  // Unique method for Football
  getHalfTime(): string {
    return `Football has a half-time break.`;
  }

  // Override getDescription method
  override getDescription(): string {
    return `${super.getDescription()} It includes a half-time break.`;
  }
}
