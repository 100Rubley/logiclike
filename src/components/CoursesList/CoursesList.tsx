import { ICoursesAPI } from "../../pages/main/App"
import s from "./CoursesList.module.scss"

interface ICoursesListProps {
  courses: ICoursesAPI[]
}

export const CoursesList = ({ courses }: ICoursesListProps) => {
  return courses.map(({ name, id }) =>
    <div className={s.wrapper} key={id}>
      {name}
    </div>)
}
