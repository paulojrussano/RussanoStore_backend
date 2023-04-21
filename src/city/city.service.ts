import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { promises } from 'dns';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';//erro set and get


//nest g service city
@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManeger: Cache,
    ){};

    async getaAllCitiesByStatedId(state_id:number): Promise<CityEntity[]>{
        const citiesCache: CityEntity[] = await this.cacheManeger.get(`state_${state_id}`);
        if(citiesCache){
            return citiesCache
        }
        const cities = await this.cityRepository.find({
            where: {
                state_id,
            },

        })

        await this.cacheManeger.set(`state_${state_id}`,cities);
        return cities
    }

}
