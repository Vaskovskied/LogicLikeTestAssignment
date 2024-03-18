import { SidebarItemProps } from "./types";
import "./styles.scss";

const SidebarItem = ({ data, onClick, selected = false }: SidebarItemProps) => {
  return (
    <button
      onClick={() => {
        if (!selected) {
          onClick(data);
        }
      }}
      className={`sidebar-item ${selected ? `sidebar-item--selected` : ""}`}
    >
      {data}
    </button>
  );
};

export default SidebarItem;
