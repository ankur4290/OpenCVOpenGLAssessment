#include <jni.h>
#include <string>
#include <opencv2/opencv.hpp>
#include <android/log.h>

#define LOG_TAG "NativeLib"
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG, LOG_TAG, __VA_ARGS__)

extern "C" {

JNIEXPORT void JNICALL
Java_com_example_opencvopenglassessment_MainActivity_processFrame(JNIEnv *env, jobject thiz, jlong addrRgba, jlong addrGray) {
    cv::Mat& mRgba = *(cv::Mat*)addrRgba;
    cv::Mat& mGray = *(cv::Mat*)addrGray;

    // Convert to grayscale
    cv::cvtColor(mRgba, mGray, cv::COLOR_RGBA2GRAY);

    // Apply Canny edge detection
    cv::Canny(mGray, mGray, 50, 150);

    LOGD("Frame processed");
}

JNIEXPORT jstring JNICALL
Java_com_example_opencvopenglassessment_MainActivity_stringFromJNI(JNIEnv *env, jobject /* this */) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

}
