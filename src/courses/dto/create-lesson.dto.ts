import { IsBoolean, IsInt, IsNotEmpty, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateLessonDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    title!: string;

    @IsInt()
    @Min(5)
    @Max(240)
    durationMinutes!: number;

    @IsBoolean()
    isCompleted!: boolean;
}

