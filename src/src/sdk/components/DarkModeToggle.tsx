import React, { memo, useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

interface IProps {
  onToggle: () => void;
}
function DarkModeToggle(props: IProps) {
  const { onToggle } = props;
  const [isDark, setIsDark] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle();
    setIsDark(event.target.checked);
  };

  useEffect(() => {
    const appElement = document.getElementById("App");
    if (isDark) {
      appElement?.classList.add("dark");
    } else {
      appElement?.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <FormControlLabel
      className="DarkModeToggle"
      control={<Switch checked={isDark} onChange={handleChange} />}
      labelPlacement="start"
      label="Dark Mode"
    />
  );
}

export default memo(DarkModeToggle);
