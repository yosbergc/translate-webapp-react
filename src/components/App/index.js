import { AppUI } from "./AppUI";
import { TranslateContext } from "../Context";
function App() {
  return (<TranslateContext>
    <AppUI/>
  </TranslateContext>)
}

export default App;
