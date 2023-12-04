#include <iostream>
using namespace std;

void selectionsort(int arr[], int n, int i, int max)
{
    if (n == 0)
    {
        return;
    }

    if (i < n)
    {
        if (arr[i] > arr[max])
        {
            selectionsort(arr, n, ++i, i);
        }

        else
        {

            selectionsort(arr, n, ++i, max);
        }
    }

    else
    {
        swap(arr[max], arr[n]);
        selectionsort(arr, n - 1, 0, 0);
    }
}

int main()
{
    int arr[] = {5, 4, 3, 2, 7, 8, 0, 1};

    selectionsort(arr, 7, 0, 0);

    for (int i = 0; i < 8; i++)
    {
        cout << arr[i] << " ";
    }
}