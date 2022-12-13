import api from "./api" // default import export
import * as components from "./components" // named import export
import "./styles/styles.css"
import "./styles/styles2.css"
import messi from "./img/messi.jpg"

console.log("hello webpack");

let data = api.httpGet()
components.createTitle(data)
components.createP("hola")
components.createImg(messi)