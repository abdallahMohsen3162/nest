import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UesrsService } from './uesrs/uesrs.service';

   

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [UesrsService],
})
export class AppModule {

}
