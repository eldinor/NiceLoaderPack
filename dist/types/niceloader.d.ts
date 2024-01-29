import { MeshAssetTask, Scene } from "@babylonjs/core";
import "@babylonjs/loaders";
interface INiceLoaderOptions {
    container: string;
    checkCollisions: boolean;
}
/**
 * The NiceLoader lets to load GLB files into a scene, transform them with the help of the Inspector and then export GLB or save JSON file with transforms.
 * Designed to use when developing Babylon.js scenes. Just call the Niceloader to quickly check any models directly in your application environment.
 * @param scene Babylon Scene
 * @param arr Pass here an empty array for storing loaded models
 * @param options Additional options: container (HTML parent element), checkCollisions
 */
export declare class NiceLoader {
    scene: Scene;
    arr: Array<MeshAssetTask>;
    options?: INiceLoaderOptions;
    constructor(scene: Scene, arr: Array<MeshAssetTask>, options?: INiceLoaderOptions);
    createUploadButton(): void;
    uploadModel(scene: Scene, arr: Array<MeshAssetTask>): void;
}
export {};
