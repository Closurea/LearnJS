#include <stdio.h>

void rightShift(int, int[]);
void leftShift(int, int, int[]);
void printArray(int, int[]);

int
main()
{
    int arr[] = {5, 4, 3, 2, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    leftShift(0, size, arr);
    printArray(size, arr);
}

void rightShift(int size, int arr[])
{
    for (size_t i = size - 1; i >= 0; ++i) {

    }
}

void leftShift(int index, int size, int arr[]) 
{
    int edge = arr[0];
    for (size_t i = 0; i < size - 1; ++i) {
        arr[i] = arr[i + 1];
    }
    arr[size - 1] = edge;
}

void printArray(int size, int arr[]) 
{
    for (size_t i = 0; i < size; ++i) {
        printf("%d, ", arr[i]);
    }
}