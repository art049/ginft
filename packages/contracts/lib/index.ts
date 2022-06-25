export * from "./typechain";
export * from "./types";

import * as factories from "./typechain";

export type Factory = keyof typeof factories;
