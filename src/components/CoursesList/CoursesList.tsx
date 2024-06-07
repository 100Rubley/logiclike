import { ICoursesAPI } from "../../pages/main/App"
import s from "./CoursesList.module.scss"

interface ICoursesListProps {
  courses: ICoursesAPI[]
}

export const CoursesList = ({ courses }: ICoursesListProps) => {
  return courses.map(({ name, id, image, bgColor }) =>
    <div className={s.wrapper} key={id}>
      <div className={s.imageWrapper} style={{ backgroundColor: bgColor }}>
        <img src={image} alt="Course_pic" className={s.image} />
      </div>

      <div className={s.courseName}>
        {name}
      </div>
    </div>)
}
