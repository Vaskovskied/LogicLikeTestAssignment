import { BASE_URL } from "../config";
import { Course } from "../types/courses";

interface ICourseSerivce {
  getAll(): Promise<Course[]>;
}

class CourseService implements ICourseSerivce {
  private ENDPOINTS: { [name: string]: string } = {
    courses: "docs/courses.json",
  };
  async getAll() {
    const response = await fetch(`${BASE_URL}/${this.ENDPOINTS.courses}`);
    const result = (await response.json()) as Course[];
    return result;
  }
}

export default new CourseService();
