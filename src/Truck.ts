/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

import Vehicle from './Vehicle'

export class Truck extends Vehicle {
  private readonly licensePlateNumber: string

  // constructor

  public constructor (color: string, maxSpeed: number, license: string) {
    super(color, maxSpeed)
    this.licensePlateNumber = license
  }

  // getters
  public status (): void {
    super.status()
    console.log(` -> License Plate: ${this.licensePlateNumber}`)
  }

  // method

  public applyAir (airPressure: number): void {
    this.speedCar = this.speedCar - airPressure / 2
  }
}
