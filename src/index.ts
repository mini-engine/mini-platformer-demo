import { Game } from "mini-engine";
import { Stage01 } from "./Scene/Stage01";

const containerElement = document.getElementById("app");

const config = {
    containerNode: containerElement,
    gameWidth: 1280,
    gameHeight: 720,
    debugEnabled: false,
    context2d: "fallback",
    bgColor: "#967557",
    pyysicsFramerate: 60,
    physicsIterations: 8,
};

// Create the Game
const game = new Game(config);

// Add a scene
game.addScene("Stage01", () => new Stage01());

// Run the game
game.run();
