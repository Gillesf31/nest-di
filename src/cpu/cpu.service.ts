import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}

  compute(a: number, b: number): number {
    const energy = 10;
    console.log(`Drawing ${energy} watts of power from Power Service.`);
    this.powerService.supplyPower(energy);
    return a + b;
  }
}
