import clsx from 'clsx';
import s from './SidebarItem.module.scss'
import { Dispatch, memo, SetStateAction, useCallback } from 'react';

interface ISidebarItemProps {
  tag: string;
  isSelected: boolean;
  onTagClick: Dispatch<SetStateAction<string>>
}

export const SidebarItem = memo(({ tag, isSelected, onTagClick }: ISidebarItemProps) => {
  const onClick = useCallback(() => onTagClick(tag), [onTagClick, tag])

  return (
    <div className={clsx(s.tag, { [s.selected]: isSelected })} onClick={onClick}>
      {tag}
    </div>
  )
})
