import { TaskCollection } from "./models/Task.collection.js";
import { example } from "./mocks/exampledata.js";
import { PromptMain } from "./prompts/start.prompt.js";

const Collection = new TaskCollection("The god", example);
let Show: boolean = true;

PromptMain(Collection, Show);
