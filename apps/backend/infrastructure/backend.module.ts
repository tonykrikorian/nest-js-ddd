import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';
import {ExampleModule} from 'libs/example/identity-validation/infrastructure/example.module'


@Module({
  imports: [ExampleModule],
  controllers: [BackendController],
  providers: [BackendService],
})
export class BackendModule {}
