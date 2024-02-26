import * as THREE from "three";
import gsap from "gsap";
import GUI from "lil-gui";

export default class AbstractThreeCanvas extends HTMLElement {
  public readonly sizes: { width: number; height: number };
  public readonly cursor: { x: number; y: number } = { x: 0, y: 0 };
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  public readonly clock: THREE.Clock;
  public readonly loadingManager: THREE.LoadingManager;
  public GUI: GUI | null = null;
  public readonly debugObject: Record<string, any> = { color: "#fff0000" };
  public readonly scene: THREE.Scene;
  public canvasElement: HTMLCanvasElement | null = null;

  constructor() {
    super();
    this.canvasElement = document.querySelector(`canvas#${this.dataset.id}`);
    this.sizes = {
      width: Number(this.dataset.width || window?.innerWidth),
      height: Number(this.dataset.height || window?.innerHeight),
    };
    this.loadingManager = new THREE.LoadingManager();
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.1,
      100,
    );
    this.renderer = new THREE.WebGL1Renderer({
      canvas: this.canvasElement ? this.canvasElement : undefined,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window?.devicePixelRatio, 2));
    window?.addEventListener("resize", this.handleResize);
  }

  public readonly initGUI = (): void => {
    this.GUI = new GUI({ width: 120 });
  };

  public readonly addMouseEvent = (): void => {
    this.canvasElement &&
      this.canvasElement.addEventListener("mousemove", this.handleMouseMove);
  };

  private readonly handleMouseMove = (event: MouseEvent) => {
    this.cursor.x = (event.clientX / this.sizes.width - 0.5) * -1;
    this.cursor.y = event.clientY / this.sizes.height - 0.5;
  };

  private readonly handleResize = () => {
    this.sizes.width = window?.innerWidth;
    this.sizes.height = window?.innerHeight;

    // Update Camera
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window?.devicePixelRatio, 2));
  };
}
