//use export to reuse a code block

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {capitalizeString }


export const foo = "bar";
export const bar = "foo";

// use * to import everything from a file

import * as {nameHereCreatingObject} from "export";

//create an export fallback with export default

export default function subtract(x,y) {return x - y;} //we know this is the only thing exporting from this file

//import a default export
import subtract from "math_functions" // don't need curly bois bc default

subtract(7,4);