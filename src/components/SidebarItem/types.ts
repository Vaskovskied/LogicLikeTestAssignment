import { Tag } from "../../types/courses";

export interface SidebarItemProps {
  data: Tag;
  onClick: (tag: Tag) => void;
  selected?: boolean;
}
