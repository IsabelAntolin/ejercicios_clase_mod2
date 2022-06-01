/*
let x = 10;
let y = "a";
y === "b" || x >= 10;


 let x = 3;
 let y = 8;
 !(x == "3" || x === y) && !(y !== 8 && x <= y);
    (v) 
 !( v     o     f   )    y    !( f     y    v)
    !(v)                 y             !(f)
     (f)                 y               (v)
                         (f)

__________________________________________________________
 let str = "";
 let msj = "jaja!";
 let esGracioso = "false";

 !((str || msj) && esGracioso);
    !(f  o    v) y     v
    !(v)         y     v
       f         y    v
              f

*/
let str1 = "hola";
let str2 = "adios";
let int1 = 1;
let str3= "1";

(str1 && str2)
/*    v     v
       v
*/
(str1  && !(str2))
/*  v    y    !(v)
  v  y     f
     f*/

 (str3  == int1 )
    /* v */
 (str3 === int1)
 /* f */