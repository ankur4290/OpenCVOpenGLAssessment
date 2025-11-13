cmake_minimum_required(VERSION 3.10.2)

project("opencvopenglassessment")

# OpenCV
set(OpenCV_DIR "${CMAKE_CURRENT_SOURCE_DIR}/../../../jniLibs/${ANDROID_ABI}/opencv/sdk/native/jni")
find_package(OpenCV REQUIRED)

add_library(native-lib SHARED native-lib.cpp)

find_library(log-lib log)

target_link_libraries(native-lib ${log-lib} ${OpenCV_LIBS})
