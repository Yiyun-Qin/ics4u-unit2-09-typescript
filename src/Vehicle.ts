/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

class Vehicle {
  public color: string
  protected speedCar: number = 0
  private readonly maximumSpeed: number

  // constructor
  public constructor (color: string, maxSpeed: number) {
    this.color = color
    this.maximumSpeed = maxSpeed
  }

  // getters
  public status (): void {
    console.log(` -> Speed: ${this.speedCar}`)
    console.log(` -> MaxSpeed: ${this.maximumSpeed}`)
    console.log(` -> Color: ${this.color}`)
  }

  public speed (): number {
    return this.speedCar
  }

  // setters

  // method
  public accelerate (
    accelerationPower: number,
    accelerationTime: number
  ): void {
    this.speedCar = accelerationPower * accelerationTime + this.speedCar
  }

  public break (breakPower: number, breakTime: number): void {
    this.speedCar = this.speedCar - breakPower * breakTime
  }
}
export = Vehicle
