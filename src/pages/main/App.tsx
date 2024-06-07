import { useEffect, useState } from 'react'
import s from './App.module.scss'
import { CoursesListContainer } from '../../components/CoursesList/CoursesListContainer'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import './Normalize.css'
import { fetchAPI } from '../../common/fetchAPI'
import { ALL, API_URL } from '../../common/constants'
import { createTags } from '../../common/utils'

export interface ICoursesAPI {
  name: string,
  id: string,
  image: string,
  bgColor: string,
  tags: Array<string>
}

function App() {
  const [courses, setCourses] = useState<ICoursesAPI[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentTag, setCurrentTag] = useState<string>(ALL)

  useEffect(() => {
    setLoading(true)
    fetchAPI<ICoursesAPI[]>(API_URL)
      .then(res => setCourses(res))
      .catch(() => setError(true)) // можно обработать и вывести текст ошибки, если есть такая необходимость
      .finally(() => setLoading(false))
  }, [])

  if (!courses) return null
  if (error) return <>Что-то пошло не так!</>

  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        {!loading && <Sidebar tags={createTags(courses)} selectedTag={currentTag} onTagClick={setCurrentTag} />}
      </div>
      <div className={s.courses}>
        <CoursesListContainer filterValue={currentTag} courses={courses} />
      </div>
    </div>
  )
}

export default App
