import { Dispatch, SetStateAction } from "react";
import s from './Sidebar.module.scss'
import { v4 as uuid } from 'uuid';
import { clsx } from 'clsx';

interface ISidebarProps {
  tags: string[];
  selectedTag: string;
  onTagClick: Dispatch<SetStateAction<string>>
}

export const Sidebar = ({ tags, selectedTag, onTagClick }: ISidebarProps) => {
  return tags.map(tag =>
    <div className={clsx(s.tag, { [s.selected]: tag === selectedTag })} onClick={() => onTagClick(tag)} key={uuid()}>
      {tag}
    </div>
  )
}
