//👉 Write your tests below here:



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



test('The function should return from "KDFJLASKJDFNLJKCNMPEWKkDFJLKASKJDFNLJKCaNMPEWOIFPQWrOIKCMLASKDCNALeSDJKFNOIFPQWOIKCnMLASKDCNALSDJKFN" the name "karen', function(){
    //arrange
    const jumbled = "KDFJLASKJDFNLJKCNMPEWKkDFJLKASKJDFNLJKCaNMPEWOIFPQWrOIKCMLASKDCNALeSDJKFNOIFPQWOIKCnMLASKDCNALSDJKFN"
    const expected = "karen"
    //act
    const actual = returnTheNaughtyListee(jumbled);

    //assert
    expect(actual).toBe(expected);
})