import { Course } from "../../types/courses";

export const getGroupedTags = (courses: Course[]) => {
  const groupedTags: string[] = [];

  courses.forEach((course) => {
    course.tags.forEach((tag) => {
      if (!groupedTags.includes(tag)) {
        groupedTags.push(tag);
      }
    });
    // Maybe code is more readable and easy to reason about using new Set(courses.map(el => el.tags).flat()).
    // I don't think that my solution is more performant, especially in case like this when any of them
    // is seamless to end user.
  });

  return groupedTags;
};
