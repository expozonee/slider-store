import Link from "next/link";

import { ListItem } from "@/types/ListItem";
import React from "react";

type ListProps = {
  items: ListItem[];
  LiStyle?: Pick<React.ComponentProps<"li">, "className" | "style">;
};

export default function List({
  items,
  className,
  LiStyle,
  style,
}: ListProps & React.ComponentProps<"ul">) {
  return (
    <ul className={className} style={style}>
      {items.map((item, index) => (
        <li key={index} className={LiStyle?.className} style={LiStyle?.style}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
