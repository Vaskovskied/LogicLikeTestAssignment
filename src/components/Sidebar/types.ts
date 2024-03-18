import { Tag } from "../../types/courses";

export interface SidebarProps {
  tags: Tag[];
  selectedTag: Tag | null;
  onChangeTag: (tag: Tag | null) => void;
}
