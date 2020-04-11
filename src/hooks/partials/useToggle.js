import { useState } from "react";

export const useToggle = (initial = false) => {
    const [isToggled, setToggle] = useState(initial);
    const toggle = () => { setToggle(prevState => !prevState) };
    return [isToggled, toggle];
};
