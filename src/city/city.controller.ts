import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';
//nest g controller city
@Controller('city')
export class CityController {
//npm install cache-manager
    constructor(
        private readonly cityService: CityService,
        ){}

    

    @Get('/:stateId')
        async getaAllCitiesByStatedId(@Param('stateId') stateId: number): Promise<CityEntity[]> {
            return this.cityService.getaAllCitiesByStatedId(stateId);
    }


}
