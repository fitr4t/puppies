import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './puppies.controller';
import { PuppyEntity } from './puppies.entity';
import { AppService } from './puppies.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  }), TypeOrmModule.forFeature([PuppyEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
