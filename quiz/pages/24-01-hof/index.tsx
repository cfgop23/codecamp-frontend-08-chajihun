export default function HofPage() {
  const onClickHof = (num: number) => () => {
    console.log(num);
  };

  return <button onClick={onClickHof(123)}>hof</button>;
}
