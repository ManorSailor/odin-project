import { player } from "../components/player.js";

// Waiting time in ms
export const seconds = 2000;

// Array for storing all player instances
const playerInstances = [];

export function makePlayer([name, gameSign]) {
    const p = player(name, gameSign);
    playerInstances.push(p);
    return p;
}

export const getInstances   = () => playerInstances;