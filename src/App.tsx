import "./app.css"
import { Iframe } from "./Iframe"

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Iframe ниже! <Iframe />
    </div>
  )
}
