import { ALL } from "./constants"
import { ICoursesAPI } from "./types"

export const createTags = (courses: ICoursesAPI[] | null) => {
  if (!courses) return [ALL]
  return [ALL, ...new Set(courses.map(({ tags }) => tags).flat())]
}
