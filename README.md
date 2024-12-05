# Digit To Pashto Word

`digitToPashtoWord` is a JavaScript function that converts numbers into their equivalent Pashto words. It supports a wide range of numbers, including positive and large values up to billions. The function is ideal for educational tools, financial applications, and Pashto-language user interfaces.

## Features

- Converts numbers to Pashto words, from **0** to billions.
- Handles **positive** and **negative** numbers.
- Supports **thousands**, **lakhs (لکه)**, **millions (میلیون)**, and **billions (میلیارد)**.
- Special handling for numbers ending in **20**, displaying "شل" or "ویشت" appropriately.

---

## Examples

### Basic Conversions

| Number | Pashto Word (Output)               |
|--------|------------------------------------|
| 5      | پینځه                             |
| 20     | شل                                |
| 37     | اووه دیرش                          |
| 100    | سل                                |
| 924382 | نه لکه څلور ویشت زره دری سوه دوه اتیا |

---

### Handling Special Cases

1. **Standalone 20**:  
   - Input: `20`  
   - Output: **شل**  

2. **Numbers ending in 20**:  
   - Input: `324`  
   - Output: **دری سوه څلور ویشت**

3. **Special handling for 20000**:  
   - Input: `20000`  
   - Output: **شل زره**

---



### Large Numbers

| Number     | Pashto Word (Output)                                 |
|------------|------------------------------------------------------|
| 345678     |دری لکه پينځه څلویښت زره شپږ سوه او اته اویا                 |
| 1000000    | یو میلیون                                           |
| 1000000000 | یو میلیارد                                           |

---

## Limitations

- Only supports **integers**. Decimal numbers are not handled.
- Complex number formatting for currency or financial outputs is not supported.

---

## Usage

1. Pass the input number to the function.
2. The function returns the Pashto equivalent as a string.
3. Use the output directly for display in user interfaces or reports.
   
example
let result = digitToPashtoWord(12045);
console.log(result); // Outputs: "دولس زره پنځه څلویښت"

---
