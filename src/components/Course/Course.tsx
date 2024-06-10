import { memo } from 'react';
import s from './Course.module.scss'

interface ICourseProps {
  image: string;
  bgColor: string;
  name: string;
}

export const Course = memo(({ bgColor, name, image }: ICourseProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper} style={{ backgroundColor: bgColor }}>
        <img src={image} alt="Course_pic" className={s.image} />
      </div>

      <div className={s.courseName}>
        {name}
      </div>
    </div>
  )
})
