//👉 Write your tests below here:

KDFJLASKJDFNLJKCNMPEWOIFPQWOIKCMLASKDCNALSDJKFN

import { returnTheNaughtyListee } from "./main.js"

test('The function should return from "KDFjJLAoSKJsDFNLJKCNMPEWeOIFPQWpOIKCMLASKDChNALSDJKFN" the name "joseph', function(){
    //arrange
    const jumbled = "KDFjJLAoSKJsDFNLJKCNMPEWeOIFPQWpOIKCMLASKDChNALSDJKFN"
    const expected = "joseph"
    //act
    const actual = returnTheNaughtyListee(jumbled);

    //assert
    expect(actual).toBe(expected);
})

"KDFjJLAoSKJsDFNLJKCNMPEWeOIFPQWpOIKCMLASKDChNALSDJKFN"

test('The function should return from "KDFjJLAoSKJsDFNLJKCNMPEWeOIFPQWpOIKCMLASKDChNALSDJKFN" the name "joseph', function(){
    //arrange
    const jumbled = "KDFJLASKJDFNLJKCNMPEWOIFPQWOIKCMLASKDCNALSDJKFN"
    const expected = "joseph"
    //act
    const actual = returnTheNaughtyListee(jumbled);

    //assert
    expect(actual).toBe(expected);
})