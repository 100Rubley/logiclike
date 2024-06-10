
import { ICoursesAPI } from "../../common/types"
import { Course } from "../Course/Course"
import s from "./CoursesList.module.scss"

interface ICoursesListProps {
  courses: ICoursesAPI[]
}

export const CoursesList = ({ courses }: ICoursesListProps) => {
  return (
    <div className={s.courses}>
      {
        courses.map(({ name, id, image, bgColor }) => (
          <Course name={name} image={image} bgColor={bgColor} key={id} />
        ))
      }
    </div>
  )
}
