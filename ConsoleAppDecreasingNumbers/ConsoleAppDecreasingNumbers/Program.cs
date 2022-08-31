using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppDecreasingNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            // Question is given a series of numbers
            // Only get sum of consecutive decreasing numbers
            // Return largest decreasing numbers sum
            long[] data = { 1, 4, 3, 9, 5, 4, 3 };
            Console.WriteLine("1, 4, 3, 9, 5, 4, 3");
            
            GetLargestSum(data);
            Console.ReadKey();
        }

        public static bool IsDecreasingNumber(long x, long y)
        {
            bool IsDecreasing = false;
            if (x > y && y == x - 1)
            {
                return IsDecreasing = true;
            }
            else
            {
                return IsDecreasing = false;
            }
        }

        public static long GetSum(long x, long y)
        {
            return x + y;
        }

        public static void GetLargestSum(long[] data)
        {
            long[] numbers = data;
            
            List<long[]> results = new List<long[]>();
            long[] tmp = { };
            bool IsCurrentConsecutive = false;
            List<long> TempList = new List<long>();
            long[] TempArray = { };
            // iterate through each position check if is decreasing
            for (long index = 0; index < numbers.GetLength(0) - 1; index++) //< numbers.GetLength(0) && index != numbers.GetLength(0) - 1) // 
            {
                Console.WriteLine("Iteration: " + index + " " + Convert.ToInt64(numbers.GetLength(0) - 2));
                // if it's decreasing add number and append result
                if (IsDecreasingNumber(numbers[index], numbers[index + 1]) && index <= numbers.GetLength(0) - 2 && IsCurrentConsecutive == true)
                {
                    IsCurrentConsecutive = true;
                    // check if is currently consecutive decreasing
                    // if it's consecutive already add to TempList 
                    // with numbers[index] and numbers [index + 1]
                    //TempList.Add(numbers[index]);
                    TempList.Add(numbers[index + 1]);
                    TempArray = TempList.ToArray();
                    int count = results.Count() - 1;
                    results.RemoveAt(count);
                    results.Add(TempArray);
                    
                    Console.WriteLine("Count 1: " + results.Count());
                }
                else if (IsDecreasingNumber(numbers[index], numbers[index + 1]) && index < numbers.GetLength(0) - 2 && IsCurrentConsecutive == false)
                {
                    // Start new set in the list
                    IsCurrentConsecutive = true;
                    TempList.Add(numbers[index]);
                    TempList.Add(numbers[index + 1]);
                    TempArray = TempList.ToArray();
                    results.Add(TempArray);
                    
                    Console.WriteLine("Count 2: " + results.Count());
                }
                else if (!IsDecreasingNumber(numbers[index], numbers[index + 1]) && index + 1 != numbers.GetLength(0) - 1 && IsCurrentConsecutive == true)
                {
                    // it's not decreasing number and not end of array
                    IsCurrentConsecutive = false;
                    TempList.RemoveRange(0, TempList.Count());
                    Console.WriteLine("Count 3: " + results.Count());
                }
                else {
                    // It's not decreasing need to skip to next iteration
                    IsCurrentConsecutive = false;
                    Console.WriteLine("Count 4: " + results.Count());

                    // if it's not decreasing exit loop and reset curr position
                }

                foreach (long[] arr in results)
                {
                    foreach (long num in arr)
                    {
                        Console.WriteLine(num);
                    }
                }

                
            }
            Console.WriteLine("Result count: " + results.Count());
            
        }
    }
}
