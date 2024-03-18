import { CourseCardProps } from "./types";
import "./styles.scss";

const CourseCard = ({ course }: CourseCardProps) => {
  const { image, name, bgColor } = course;
  return (
    <div className="course-card">
      <div
        className="course-card__image-container"
        style={{ backgroundColor: bgColor }}
        // It is also possible to pass bgColor as CSS variable via component ref
      >
        <img className="course-card__image" src={image} alt={name} />
      </div>
      <p className="course-image__caption">{name}</p>
    </div>
  );
};

export default CourseCard;
