import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseStatusDto } from './dto/update-course-status.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    getAll() {
        return this.coursesService.getAll();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number) {
        return this.coursesService.getById(id);
    }

    @Post()
    create(@Body() dto: CreateCourseDto) {
        return this.coursesService.create(dto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateCourseStatusDto,
    ) {
        return this.coursesService.updateStatus(id, dto);
    }

    @Post(':id/lessons')
    addLesson(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: CreateLessonDto,
    ) {
        return this.coursesService.addLesson(id, dto);
    }

    @Get(':id/lessons')
    getLessons(@Param('id', ParseIntPipe) id: number) {
        return this.coursesService.getLessonsByCourseId(id);
    }

    @Patch(':courseId/lessons/:lessonId/complete')
    completeLesson(
        @Param('courseId', ParseIntPipe) courseId: number,
        @Param('lessonId', ParseIntPipe) lessonId: number,
    ) {
        return this.coursesService.completeLesson(courseId, lessonId);
    }
}

