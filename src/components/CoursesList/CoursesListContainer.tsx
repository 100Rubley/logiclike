import { ALL } from "../../common/constants";
import { ICoursesAPI } from "../../pages/main/App";
import { CoursesList } from "./CoursesList";

interface ICoursesListContainerProps {
  filterValue: string;
  courses: ICoursesAPI[];
}

export const CoursesListContainer = ({filterValue, courses}: ICoursesListContainerProps) => {
  const currentList = filterValue === ALL ? courses : courses.filter(cours => cours.tags.includes(filterValue))

  return <CoursesList courses={currentList}/>
}
