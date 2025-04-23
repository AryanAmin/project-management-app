import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} />
    </main>
  );
}

export default App;
