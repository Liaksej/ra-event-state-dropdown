import { FunctionComponent } from "react";

interface DropdownItemProps {
  item: string;
  onSwitch: () => void;
  chosenItem: string | undefined;
}
export const DropdownItem: FunctionComponent<DropdownItemProps> = ({
  item,
  onSwitch,
  chosenItem,
}) => {
  return (
    <li className={item === chosenItem ? "active" : ""}>
      <a onClick={onSwitch} href="#">
        {item}
      </a>
    </li>
  );
};
