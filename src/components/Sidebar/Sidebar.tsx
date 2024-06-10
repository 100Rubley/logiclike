import { Dispatch, SetStateAction } from "react";
import s from './Sidebar.module.scss'
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { v4 as uuid } from "uuid";

interface ISidebarProps {
  tags: string[];
  selectedTag: string;
  onTagClick: Dispatch<SetStateAction<string>>
}

export const Sidebar = ({ tags, selectedTag, onTagClick }: ISidebarProps) => {
  return (
    <div className={s.sidebar}>
      {tags.map(tag =>
        <SidebarItem isSelected={selectedTag === tag} tag={tag} onTagClick={onTagClick} key={uuid()}/>
      )}
    </div>
  )
}
