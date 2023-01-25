
/* ============AUFGABE 1.1 =========== */

 let firstName = "Tom"
let lastName = "Braun"

const fullName = firstName + " " + lastName 


/* ============ AUFGABE 1.2 == INDEX-OF========= */



const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean";

/* 
console.log(txt.indexOf("h"))
VM2117:1   27
undefined

console.log(txt. indexOf("Earth"))
VM1968:1   38

console.log(txt.indexOf("Moon"))
VM2293:1   -1
undefined
 */

/*  ============  AUFGABE 1.4 = SLICE ========= */

const A = "Susi is going to codingschool"

const Susi = A.slice(0,4)

/* 
console.log(A.slice(0,4))
VM453:1 Susi

const Susi = A.slice(0,4)
undefined
console.log(Susi)
VM1079:1 Susi
*/

const is = A.slice(5,7)

/*  
console.log(A.slice(5,7))
VM802:1 is
undefined

const is = A.slice(5,7)
undefined
console.log(is)
VM1200:1 
+*/

const longText = A.slice(5,16) +" "+ A.slice(23,29)

/* 
console.log(A.slice(5,16))
VM1348:1 is going to 

console.log(A.slice(23,29))
VM2039:1 

console.log(longText)
VM292:1 is going to school
*/

const school = A.slice(-6)

/* console.log(school)
VM402:1 school */

const SiS = Susi + " "  + is +" " + school

/* console.log(SiS)
VM529:1 Susi is school
 */

document.write(Susi + "<br>")
document.write(is + "<br>")
document.write(longText + "<br>")
document.write(school + "<br>")
document.write(SiS + "<br>")

document.write(Susi + " " + longText + "<br>" )


/* ============= AUFGABE 1.7 --REPLACE ============ */

const text = "Sam is good at codingschool";

const bad = text.replace("good", "bad");
document.write(bad + "<br>"); 

const leer = text.replace("coding", "");
document.write(leer + "<br>");

const tennis = text.replace("codingschool", "tennis");
document.write(tennis + "<br>");


/* =========AUFGABE 1.8  - LOWER / UPPER CASE */

const coding = "Sam is going to codingschool";

/* SAM IS GOING TO SCHOOL
sam is going at school 
SAM is going to SCHOOL
sam IS GOING TO school
Sam Is Going To School */

const coding0 = coding.replace("coding", "");

/* console.log(coding0)
VM1660:1 Sam is going to school */


const coding1 = coding0.toUpperCase();
document.write(coding1 + "<br>")

/* console.log(coding1)
VM1692:1 SAM IS GOING TO SCHOOL */

const coding2 = coding0. toLowerCase();
document.write(coding2 + "<br>")

/* console.log(coding2)
VM1734:1 sam is going to school */


const coding3 = coding2.slice(0,3).toLocaleUpperCase() + " " + coding2.slice(4,15) + " " + coding2.slice(16,22).toLocaleUpperCase();

/*console.log(coding3)
VM2861:1 SAM is going to SCHOOL*/

const coding4 = coding2.slice(0,3) + " " + coding2.slice(4,15).toLocaleUpperCase() + " " + coding2.slice(16,22);

/* console.log(coding4)
VM3273:1 sam IS GOING TO school */


/* ==========AUFGABE 1.9 -- CONCAT =========== */

const text1 = "Sam is going to codingschool";
const text2 = "Susi"
const text3 = "programming bike"
const text4 = "and"

/*
Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden, die du bereits gelernt hast.

exp1 - Sam is going to school and to the movie theater
exp2 - Sam is going to movie theater
exp3 - Susi and Sam are going to school
exp4 - Susi and Sam are going to gym and to the movie theater
exp5 - Susi is going to school and to the movie theater */


let exp0 = "to the movie theater"

let exp1 = text1.replace("coding", "").concat(" ", text4, " ", exp0);
/* console.log(exp1)
VM245:1 Sam is going to school and to the movie theater */
document.write(exp1 + "<br>")

let exp2 = text1.replace("codingschool", " movie theater")
/* console.log(exp2)
VM482:1 Sam is going to movie theater */
document.write(exp2 +"<br>")


let exp3 = text2.concat(" ", text4, " ", text1.replace("is", "are").replace("coding", ""))
/* console.log(exp3)
VM407:1 Susi and Sam are going to school */
document.write(exp3 +"<br>")


let exp4 = exp3.slice(0,26).concat("gym", " ", text4, " ", exp0)
/* console.log(exp4)
VM375:1 Susi and Sam are going to gym and to the movie theater */
document.write(exp4 +"<br>")


let exp5 = text2.concat(" ", exp1.slice(4,23), text4," ", exp0)
/* console.log(exp5)
VM827:1 Susi is going to school and to the movie theater */
document.write(exp5 +"<br>")
