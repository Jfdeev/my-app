import StringList from "../../components/StringList";

export default function Index() {
  return (
    <StringList items={[{id: "1", value: "Hello"}, {id: "2", value: "World!"}]} />
  );
}