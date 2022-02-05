import './App.css';
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Suspense fallback={null} >
      </Suspense>
    </Canvas>
  );
}

export default App;
