import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

export function App() {
  return (
    <div className="bg-gray-900 h-screen px-6 py-6 gap-2">
      <Button>Enviar</Button>
      <Checkbox />
      <Heading>Head</Heading>
      <Text>Hi</Text>
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>
    </div>
  );
}
