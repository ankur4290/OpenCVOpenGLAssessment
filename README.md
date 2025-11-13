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
4. Download OpenCV Android SDK and place in `app/src/main/jniLibs`
5. Build and run on device with camera

## Screenshots

(TODO: Add screenshots/GIF of working app)

## Dependencies

- Android SDK
- NDK
- OpenCV Android SDK
- TypeScript for web viewer
