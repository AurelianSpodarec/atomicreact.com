import fs from "fs";
import path from "path";
import { bundleMDX, } from "mdx-bundler";

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");

 