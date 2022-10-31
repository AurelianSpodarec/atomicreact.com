import Button from "@components/atoms/Button/Button";
import Input from "@components/atoms/Input/Input";
import Text from "@components/atoms/Text/Text";


export const components = {
    Button,
    Input,
    Text,
    h2: ({children, ...props}:any) => (
        <Text type="h2" {...props} id={children.replace(/\W/g,"-").toLowerCase()} data-heading>{children}</Text>
    ),
};