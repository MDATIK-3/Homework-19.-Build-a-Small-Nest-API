import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule],
  controllers: [HealthController],
})
export class AppModule { }

