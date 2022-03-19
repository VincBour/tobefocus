interface TextFieldProps {
    type: 'text' | 'number',
    value?: string | number;
}

export const TextField = ({ type = 'text', value }: TextFieldProps) => {
    return <input type={type} value={value}/>
}

TextField.displayName = "TextField";