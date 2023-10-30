// 1.Do the below programs in anonymous function & IIFE

    // 1.Print odd numbers in an array

        // Anonymous Function
        const printOddNumbers = function(arr) {
        arr.forEach(function(num) {
            if (num % 2 !== 0) {
            console.log(num);
            }
        });
        }
        
        // IIFE
        (function(arr) {
        arr.forEach(function(num) {
            if (num % 2 !== 0) {
            console.log(num);
            }
        });
        })([1, 2, 3, 4, 5]);


    
    // 2.Convert all the strings to title caps in a string array
        
        // Anonymous Function
        const convertToTitleCaps = function(arr) {
        return arr.map(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        });
        }
        
        // IIFE
        (function(arr) {
        const result = arr.map(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        });
        console.log(result);
        })(["apple", "banana", "cherry"]);

    
    // 3.Sum of all numbers in an array

        const sumOfNumbers = function(arr) {
            return arr.reduce(function(total, num) {
            return total + num;
            }, 0);
        }
        
        console.log(sumOfNumbers([1, 2, 3, 4, 5]));
        
    // 4.Return all the prime numbers in an array
            
        const isPrime = function(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
            }
            return true;
        }
        
        const primeNumbers = function(arr) {
            return arr.filter(function(num) {
            return isPrime(num);
            });
        }
        
        console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    
    // 5.Return all the palindromes in an array

        const isPalindrome = function(str) {
            str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
            const reversed = str.split("").reverse().join("");
            return str === reversed;
        }
        
        const palindromes = function(arr) {
            return arr.filter(function(str) {
            return isPalindrome(str);
            });
        }
        
        console.log(palindromes(["racecar", "hello", "level", "world", "deified"]));

        

    // 6.Return median of two sorted arrays of the same size.

        // Anonymous Function
        const findMedianSortedArrays = function(nums1, nums2) {
        const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
        const middle = Math.floor(mergedArray.length / 2);
        if (mergedArray.length % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
        } else {
        return mergedArray[middle];
        }
    };
    
    console.log(findMedianSortedArrays([1, 3], [2, 4]));

    
    // 7.Remove duplicates from an array

        // Anonymous Function
        const removeDuplicates = function(arr) {
            return arr.filter((value, index, self) => self.indexOf(value) === index);
        };
        
        console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

        
    // 8.Rotate an array by k times
        
        // Anonymous Function
const rotateArray = function(arr, k) {
        if (k > 0) {
        const removed = arr.splice(arr.length - k);
        arr.unshift(...removed);
        }
        return arr;
    };
    
    console.log(rotateArray([1, 2, 3, 4, 5], 2));




// 2.Do the below programs in arrow functions.

        // 1.Print odd numbers in an array
            const printOddNumbers = (arr) => {
                arr.forEach((num) => {
                if (num % 2 !== 0) {
                    console.log(num);
                }
                });
            };
            
            printOddNumbers([1, 2, 3, 4, 5]);


            // 2.Convert all the strings to title caps in a string array
                const convertToTitleCaps = (arr) => {
                    return arr.map((str) => {
                    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                    });
                };
                
                const result = convertToTitleCaps(["apple", "banana", "cherry"]);
                console.log(result);

            // 3.Sum of All Numbers in an Array:
                    const sumOfNumbers = (arr) => {
                        return arr.reduce((total, num) => total + num, 0);
                    };
                    
                    console.log(sumOfNumbers([1, 2, 3, 4, 5]));
                    
                
            // 4.Return All Prime Numbers in an Array:
                const isPrime = (num) => {
                    if (num <= 1) return false;
                    for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        return false;
                    }
                    }
                    return true;
                };
                
                const primeNumbers = (arr) => {
                    return arr.filter((num) => isPrime(num));
                };
                
                console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
                

            // 5.Return All Palindromes in an Array:
                const isPalindrome = (str) => {
                    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
                    const reversed = str.split("").reverse().join("");
                    return str === reversed;
                };
                
                const palindromes = (arr) => {
                    return arr.filter((str) => isPalindrome(str));
                };
                
                console.log(palindromes(["racecar", "hello", "level", "world", "deified"]));
                


            
