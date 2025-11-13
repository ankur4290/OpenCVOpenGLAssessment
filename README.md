# Android OpenCV OpenGL Web Assessment

This project is a minimal Android app that captures camera frames, processes them using OpenCV in C++ via JNI, and displays the output using OpenGL ES. It also includes a TypeScript-based web viewer for displaying processed frames.

## Features Implemented

### Android App
- Camera feed integration using Camera2 API
- Real-time frame processing with OpenCV Canny Edge Detection
- OpenGL ES rendering of processed frames
- JNI for Java-C++ communication

### Web Viewer
- TypeScript-based page to display sample processed frames
- Basic UI with frame stats (FPS, resolution)

## Architecture

- `/app`: Java/Kotlin code for camera access and UI
- `/jni`: C++ OpenCV processing code
- `/gl`: OpenGL renderer classes
- `/web`: TypeScript web viewer

Frame flow: Camera -> JNI -> OpenCV (C++) -> OpenGL Rendering

## Setup Instructions

1. Clone the repository
2. Open in Android Studio
3. Ensure NDK is installed and configured
4. Download OpenCV Android SDK (version 4.x) from https://opencv.org/releases/
5. Extract the SDK and place the contents in `app/src/main/jniLibs/opencv/`
6. Build and run on device with camera

## Testing Results

### ✅ TypeScript Web Viewer
- TypeScript compilation successful
- Web page loads correctly with dummy frame
- FPS and resolution stats display properly

### ⚠️ Android App
- Gradle build files configured correctly
- Requires Android Studio for full compilation and testing
- OpenCV SDK integration needs manual setup
- Runtime testing requires device with camera permissions

## Screenshots

### Android App Screenshots
*(Note: Screenshots will be added after testing on Android device/emulator. The app requires camera permissions and OpenGL ES 2.0 support.)*

### Web Viewer Screenshot
![Web Viewer](web/screenshot.png)
*(Placeholder - actual screenshot to be captured after opening web/index.html in browser)*

## Dependencies

- Android SDK
- NDK
- OpenCV Android SDK
- TypeScript for web viewer
