interface Input01Props {
  type: string;
  register: object;
}

export default function Input01(props: Input01Props) {
  return <input type={props.type} {...props.register} />;
}
