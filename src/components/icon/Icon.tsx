import React from "react";
import classNames from "classnames";

interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  children: string;
}

const Icon: React.FC<IconProps> = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={classNames(className, "material-symbols-sharp")}
    >
      {children}
    </span>
  );
};

export default Icon;
