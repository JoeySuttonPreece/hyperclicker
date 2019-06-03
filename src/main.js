import { app } from "hyperapp"

import { init } from "./init.js"
import { view } from "./view.js"

app({
    init: init,
    view: view,
    node: document.querySelector("#app"),
})