import { Injectable, NotFoundException } from '@nestjs/common';
import {
    CourseLevel,
    CourseStatus,
} from './dto/create-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseStatusDto } from './dto/update-course-status.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';

export interface Lesson {
    id: number;
    title: string;
    durationMinutes: number;
    isCompleted: boolean;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    level: CourseLevel;
    status: CourseStatus;
    lessons: Lesson[];
}

@Injectable()
export class CoursesService {
    private readonly courses: Course[] = [];
    private nextCourseId = 1;
    private nextLessonId = 1;

    private getCourseOrThrow(courseId: number): Course {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course) {
            throw new NotFoundException('Course not found');
        }
        return course;
    }

    getAll(): Course[] {
        return this.courses;
    }

    getById(courseId: number): Course {
        return this.getCourseOrThrow(courseId);
    }

    create(dto: CreateCourseDto): Course {
        const course: Course = {
            id: this.nextCourseId++,
            title: dto.title,
            description: dto.description,
            level: dto.level,
            status: CourseStatus.DRAFT,
            lessons: [],
        };

        this.courses.push(course);
        return course;
    }

    updateStatus(courseId: number, dto: UpdateCourseStatusDto): Course {
        const course = this.getCourseOrThrow(courseId);
        course.status = dto.status;
        return course;
    }

    addLesson(courseId: number, dto: CreateLessonDto): Lesson {
        const course = this.getCourseOrThrow(courseId);

        const lesson: Lesson = {
            id: this.nextLessonId++,
            title: dto.title,
            durationMinutes: dto.durationMinutes,
            isCompleted: false,
        };

        course.lessons.push(lesson);
        return lesson;
    }

    getLessonsByCourseId(courseId: number): Lesson[] {
        return this.getCourseOrThrow(courseId).lessons;
    }

    completeLesson(courseId: number, lessonId: number): Lesson {
        const course = this.getCourseOrThrow(courseId);
        const lesson = course.lessons.find((l) => l.id === lessonId);
        if (!lesson) {
            throw new NotFoundException('Lesson not found');
        }
        lesson.isCompleted = true;
        return lesson;
    }
}

