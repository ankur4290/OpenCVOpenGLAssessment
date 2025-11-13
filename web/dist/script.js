"use strict";
class WebViewer {
    constructor() {
        this.stats = { fps: 0, resolution: '640x480' };
        this.frameCount = 0;
        this.lastTime = Date.now();
        this.imageElement = document.getElementById('processedImage');
        this.fpsElement = document.getElementById('fps');
        this.resolutionElement = document.getElementById('resolution');
        this.updateStats();
    }
    updateImage(base64Image) {
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
    setResolution(width, height) {
        this.stats.resolution = `${width}x${height}`;
        this.updateStats();
    }
    updateStats() {
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
