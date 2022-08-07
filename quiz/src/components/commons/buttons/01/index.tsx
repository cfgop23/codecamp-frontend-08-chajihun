interface Button01Props {
  title: string;
  isActive: boolean;
}

export default function Button01(props: Button01Props) {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
