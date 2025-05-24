function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3)); // Output: 8






function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false





function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
    const s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(areaOfTriangle(3, 4, 5)); // Output: 6






function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return (total / 300) * 100;
}

function mainFunction(m1, m2, m3) {
    console.log("Average:", average(m1, m2, m3));
    console.log("Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(85, 90, 95);









function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log(customIndexOf("hello", "e")); // Output: 1






function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log(deleteVowels("This is a test")); // Ths s  tst






function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
console.log(deleteVowels("This is a test")); // Ths s  tst










function countSuccessiveVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length - 1; i++) {
        switch (true) {
            case vowels.includes(text[i]) && vowels.includes(text[i + 1]):
                count++;
                break;
        }
    }
    return count;
}
console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));
// Output: 3 (ea, ea, ui)












function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

let km = 2;
console.log("Meters:", toMeters(km));
console.log("Feet:", toFeet(km));
console.log("Inches:", toInches(km));
console.log("Centimeters:", toCentimeters(km));
















function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

let km = 2;
console.log("Meters:", toMeters(km));
console.log("Feet:", toFeet(km));
console.log("Inches:", toInches(km));
console.log("Centimeters:", toCentimeters(km));




function noteCounter(amount) {
    let hundred = Math.floor(amount / 100);
    let fifty = Math.floor((amount % 100) / 50);
    let ten = Math.floor(((amount % 100) % 50) / 10);
    
    console.log("100 notes:", hundred);
    console.log("50 notes:", fifty);
    console.log("10 notes:", ten);
}
noteCounter(370); 
// 100 notes: 3, 50 notes: 1, 10 notes: 2



