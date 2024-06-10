import { useEffect, useState } from "react"
import { fetchAPI } from "../../common/fetchAPI"
import { ICoursesAPI } from "../../common/types"
import { API_URL } from "../../common/constants"
import { App } from "./App"

export const AppContainer = () => {
  const [courses, setCourses] = useState<ICoursesAPI[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    fetchAPI<ICoursesAPI[]>(API_URL)
      .then(res => setCourses(res))
      .catch(() => setError(true)) // можно обработать и вывести текст ошибки, если есть такая необходимость
      .finally(() => setLoading(false))
  }, [])

  if (error || !courses) return <>Что-то пошло не так!</>
  if (loading) return <>Loading...</>

  return <App courses={courses} />
}
