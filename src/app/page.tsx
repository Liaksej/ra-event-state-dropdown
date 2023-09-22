"use client";

import { useState } from "react";
import { DropdownList } from "@/components/DropdownList";

export default function Home() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="container">
      <button className="btn" onClick={() => setMenuState(!menuState)}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList menuState={menuState} />
    </div>
  );
}
