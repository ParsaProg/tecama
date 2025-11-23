export default function convertToFarsiNumbers(text) {
    // Mapping of English digits to Farsi digits
    const englishToFarsi = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    };

    // Replace each English digit with its corresponding Farsi digit
    return text.replace(/[0-9]/g, (match) => englishToFarsi[match]);
}