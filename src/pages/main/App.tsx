import { useState } from 'react'
import s from './App.module.scss'
import { CoursesListContainer } from '../../components/CoursesList/CoursesListContainer'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import './Normalize.css'
import { ALL } from '../../common/constants'
import { createTags } from '../../common/utils'
import { ICoursesAPI } from '../../common/types'

interface IAppProps {
  courses: ICoursesAPI[];
}

export const App = ({ courses }: IAppProps) => {
  const [currentTag, setCurrentTag] = useState<string>(ALL)

  return (
    <div className={s.wrapper}>
      <Sidebar tags={createTags(courses)} selectedTag={currentTag} onTagClick={setCurrentTag} />
      <CoursesListContainer filterValue={currentTag} courses={courses} />
    </div>
  )
}
