import { useEffect, useState } from "react";
import CourseService from "./services/CourseService";
import { Course, Tag } from "./types/courses";
import { getGroupedTags } from "./components/utils/tags";
import Sidebar from "./components/Sidebar";
import "./App.scss";
import CourseCard from "./components/CourseCard";

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const tags = getGroupedTags(courses).sort();

  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const filtredCourses = selectedTag
    ? courses.filter((el) => el.tags.includes(selectedTag))
    : courses;

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<boolean>(false);

  const onChangeSelectedTag = (tag: string | null) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        const result = await CourseService.getAll();
        setCourses(result);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };
    getCourses();
  }, []);

  return loading ? (
    <main>Загрузка...</main>
  ) : error ? (
    <main>Ошибка</main>
  ) : (
    <div className="main-container">
      <Sidebar
        tags={tags}
        selectedTag={selectedTag}
        onChangeTag={onChangeSelectedTag}
      />
      <main className="courses">
        {filtredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </main>
    </div>
  );
};

export default App;
