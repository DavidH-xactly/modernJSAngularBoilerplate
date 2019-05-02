import * as angular from "angular";
import { mainController } from "./controllers";

const app = angular.module("MainApp", []);

app.controller("MainController", mainController);
