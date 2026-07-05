# TODO (Homework 19 - Nest Small API)

- [ ] Scaffold NestJS 11 project (TypeScript) in repo root
- [ ] Add required project files:
  - [ ] src/main.ts global ValidationPipe settings
  - [ ] src/app.module.ts wiring modules
  - [ ] src/health.controller.ts with GET /health
- [ ] Create Courses feature (Nest feature-module style)
  - [ ] src/courses/courses.module.ts
  - [ ] src/courses/courses.controller.ts (no business logic)
  - [ ] src/courses/courses.service.ts (all operations + reused lookup logic)
  - [ ] src/courses/dto/create-course.dto.ts
  - [ ] src/courses/dto/update-course-status.dto.ts
  - [ ] src/courses/dto/create-lesson.dto.ts
- [ ] Implement validation decorators + DTO constraints
- [ ] Implement error handling (404 for missing resources, ParseIntPipe for params)
- [ ] Ensure default values (course: draft, lesson: isCompleted=false)
- [ ] Create README.md:
  - [ ] setup + start:dev
  - [ ] list endpoints
  - [ ] example valid request bodies
  - [ ] screenshot placeholders (Figure names)
- [ ] Run app and verify endpoints work
- [ ] Collect at least 5 tested request responses/screenshots for README

