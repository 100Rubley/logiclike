import { ALL, ICoursesAPI } from "../../pages/main/App";

interface ICoursesListProps {
  filterValue: string;
  courses: ICoursesAPI[];
}

export const CoursesList = ({filterValue, courses}: ICoursesListProps) => {
  if (filterValue === ALL) return courses.map(cours => <div>{cours.name}</div>)

  return courses.filter(cours => cours.tags.includes(filterValue)).map(cours => <div>{cours.name}</div>)
}
