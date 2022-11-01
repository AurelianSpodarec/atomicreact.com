import Button from "@components/atoms/Button/Button";
import Input from "@components/atoms/Input/Input";
import Text from "@components/atoms/Text/Text";
import Link from "next/link";


export const components = {
    Button,
    Input,
    Text,
    h2: ({children, ...props}:any) => (
        <Link href={"#" + children.replace(/\W/g,"-").toLowerCase()} className="flex items-center">
            <a href={"#" + children.replace(/\W/g,"-").toLowerCase()}>
                <Text type="h2" {...props} id={children.replace(/\W/g,"-").toLowerCase()} data-heading>{children}</Text>
                <span>#</span>
            </a>
        </Link>
    ),
};