import { IsEnum } from 'class-validator';
import { CourseStatus } from './create-course.dto';

export class UpdateCourseStatusDto {
    @IsEnum(CourseStatus)
    status!: CourseStatus;
}

