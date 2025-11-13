cmake_minimum_required(VERSION 3.10.2)

project("opencvopenglassessment")

# OpenCV - Download OpenCV Android SDK and extract to app/src/main/jniLibs/
# Place the OpenCV SDK in app/src/main/jniLibs/opencv/
set(OpenCV_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../jniLibs/opencv/sdk/native/jni")
find_package(OpenCV REQUIRED)

add_library(native-lib SHARED native-lib.cpp)

find_library(log-lib log)

target_link_libraries(native-lib ${log-lib} ${OpenCV_LIBS})
