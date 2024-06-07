import { useEffect, useState } from 'react'
import './App.css'
import { fetchAPI } from '../../api/fetchCourses/fetchCourses'
import { CoursesList } from '../../components/CoursesList/CoursesList'

export interface ICoursesAPI {
  name: string,
  id: string,
  image: string,
  bgColor: string,
  tags: Array<string>
}

export const ALL = "Все темы"

const createTags = (courses: ICoursesAPI[]) => {
  return [ALL, ...new Set(courses.map(({ tags }) => tags).flat())]
}

const API_URL = 'https://logiclike.com/docs/courses.json'

function App() {
  // todo можно ошибку обработать
  const [courses, setCourses] = useState<ICoursesAPI[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [currentTag, setCurrentTag] = useState<string>(ALL)

  useEffect(() => {
    setLoading(true)
    fetchAPI<ICoursesAPI[]>(API_URL).then(res => setCourses(res)).finally(() => setLoading(false))
  }, [])

  if (!courses) return null

  return (
    <>
      {!loading && <div>{createTags(courses).map(tag => <div onClick={() => setCurrentTag(tag)}>{tag}</div>)}</div>}
      =======================
      <CoursesList filterValue={currentTag} courses={courses} />
    </>
  )
}

export default App
