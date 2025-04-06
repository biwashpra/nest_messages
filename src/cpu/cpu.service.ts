import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}

  compute(num1: number, num2: number) {
    const sum = num1 + num2;
    const power = this.powerService.supplyPower(sum);
    return `The sum of ${num1} and ${num2} is ${sum} | Power: ${power}`;
  }
}
