import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';
//nest g controller state terminal
@Controller('state')
export class StateController {

    constructor(
        
        private readonly stateServices: StateService,

    ){}

    @Get()
    async getAllState(): Promise<StateEntity[]>{

        return this.stateServices.getAllState();
    }
       
    

}
