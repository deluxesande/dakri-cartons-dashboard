import React, { HTMLAttributes, ReactNode } from "react";

type NonSvgElements =
    | "p"
    | "div"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

type TextProps = {
    variant?: NonSvgElements;
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Text({
    variant = "p",
    className = "",
    children,
    ...props
}: TextProps) {
    const Component = variant as NonSvgElements;

    return (
        <Component
            {...props}
            className={"text-gray-900 dark:text-gray-900 " + className}
        >
            {children}
        </Component>
    );
}
