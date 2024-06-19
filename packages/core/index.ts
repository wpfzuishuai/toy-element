import { makeInstaller } from "@toy-element/utils";
import components from "./components";
import "@toy-element/theme/index.css";

export * from "@toy-element/components";

const installer = makeInstaller(components);

export default installer;
