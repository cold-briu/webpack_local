import api from "./api" // default import export
import * as components from "./components" // named import export
import "./styles/styles.sass"
import "./styles/styles2.sass"
import messi from "./img/messi.jpg"

console.log("hello webpack");

let data = api.httpGet()
components.createTitle(data)
components.createP("hola mundo :D :D :D :D")
components.createImg(messi)