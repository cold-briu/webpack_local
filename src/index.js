import api from "./api" // default import export
import * as components from "./components" // named import export

console.log("hello webpack");

let data = api.httpGet()
components.createTitle(data)
components.createP("hola")