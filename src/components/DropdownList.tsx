import { FunctionComponent, useState } from "react";
import { DropdownItem } from "@/components/DropdownItem";

interface DropdownListProps {
  menuState: boolean;
}
export const DropdownList: FunctionComponent<DropdownListProps> = ({
  menuState,
}) => {
  const items = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const [chosenItem, setChosenItem] = useState<string | undefined>();

  return (
    <div className={`${menuState ? "open" : ""} dropdown-wrapper`}>
      <ul className="dropdown">
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onSwitch={() => {
              setChosenItem(items[index]);
            }}
            item={item}
            chosenItem={chosenItem}
          />
        ))}
      </ul>
    </div>
  );
};
