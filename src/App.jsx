import Counter from "./Counter.jsx";

export default function App() {
  return (
    <>
      <Counter />
      <Counter initValue={100} />
      <Counter initValue={8} />
    </>
  );
}
