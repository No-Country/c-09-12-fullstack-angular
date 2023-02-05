import config from "./config";
import { InitServer } from "./services/server";

InitServer(parseInt(config.PORT || '8080'));