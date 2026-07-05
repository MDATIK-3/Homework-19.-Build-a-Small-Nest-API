import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export enum CourseLevel {
    BEGINNER = 'beginner',
    MIDDLE = 'middle',
    ADVANCED = 'advanced',
}

export enum CourseStatus {
    DRAFT = 'draft',
    ACTIVE = 'active',
    ARCHIVED = 'archived',
}

export class CreateCourseDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    title!: string;

    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    description!: string;

    @IsEnum(CourseLevel)
    level!: CourseLevel;
}

