interface FrameStats {
    fps: number;
    resolution: string;
}

class WebViewer {
    private imageElement: HTMLImageElement;
    private fpsElement: HTMLElement;
    private resolutionElement: HTMLElement;
    private stats: FrameStats = { fps: 0, resolution: '640x480' };
    private frameCount: number = 0;
    private lastTime: number = Date.now();

    constructor() {
        this.imageElement = document.getElementById('processedImage') as HTMLImageElement;
        this.fpsElement = document.getElementById('fps') as HTMLElement;
        this.resolutionElement = document.getElementById('resolution') as HTMLElement;

        this.updateStats();
    }

    public updateImage(base64Image: string): void {
        this.imageElement.src = `data:image/png;base64,${base64Image}`;
        this.frameCount++;

        const currentTime = Date.now();
        if (currentTime - this.lastTime >= 1000) {
            this.stats.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            this.frameCount = 0;
            this.lastTime = currentTime;
            this.updateStats();
        }
    }

    public setResolution(width: number, height: number): void {
        this.stats.resolution = `${width}x${height}`;
        this.updateStats();
    }

    private updateStats(): void {
        this.fpsElement.textContent = this.stats.fps.toString();
        this.resolutionElement.textContent = this.stats.resolution;
    }
}

// Initialize the web viewer
const viewer = new WebViewer();

// Example usage: Simulate receiving a processed frame
// In a real scenario, this would come from WebSocket or HTTP
setTimeout(() => {
    // Dummy base64 image (1x1 transparent pixel)
    const dummyImage = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    viewer.updateImage(dummyImage);
    viewer.setResolution(640, 480);
}, 1000);
