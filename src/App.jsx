import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor />
      <p>
        Built by{" "}
        <a
          href="https://github.com/nikitadev-yt"
          style={{ color: "white", textDecoration: "underline" }}
        >
          nikitadev-yt
        </a>
      </p>
    </Box>
  );
}

export default App;
