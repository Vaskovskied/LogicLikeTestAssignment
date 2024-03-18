import SidebarItem from "../SidebarItem";
import { SidebarProps } from "./types";
import "./styles.scss";

const Sidebar = ({ tags, selectedTag, onChangeTag }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <SidebarItem
        data="Все темы"
        onClick={() => {
          if (selectedTag !== null) {
            onChangeTag(null);
          }
        }}
        selected={selectedTag === null}
      />
      {tags.map((el) => (
        <SidebarItem
          key={el}
          data={el}
          onClick={onChangeTag}
          selected={selectedTag === el}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
