import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  getData(): string {
    const energy = 20;
    console.log(`Drawing ${energy} watts of power from Power Service.`);
    this.powerService.supplyPower(energy);
    return 'data';
  }
}
