# AutomataFinito
Autómata finito determinista que permite reconocer y validar si una cadena de caracteres, conformada por los símbolos del alfabeto de la numeración romana, corresponde o no con un número romano. 

- [x] Puede reconocer y validar números del 1 al 3999.
- [x] Si se ingresa en el estado rechazador se deja de procesar automáticamente.

Características de la numeración romana:
- Los caracteres se leen de izquierda a derecha.
- Un símbolo que es seguido de otro igual o menor conforma una suma.
- Un símbolo seguido de otro mayor forma un subconjunto donde el menor se resta del mayor.
- Los símbolos de base 5 (V, L, D) no pueden repetirse seguidos.
- Los símbolos de base 10 (I, X, C, M) pueden repetirse hasta 3 veces sumando.
- Los símbolos de base 5 (V, L, D) no pueden usarse para restar.
- Los símbolos de base 10 (I, X, C, M) pueden restar siguiendo dos reglas:
	- A números de base 5 y 10 inmediatamente superiores.
		
		| IV, IX | XL, XC | D, CM |
		| --- | --- | --- |
		| 4, 9  |  40, 90  | 00, 900 |
		
	- Si están restando no pueden repetirse.
		
		| IV | IIV |
		| --- | --- |
		| 4  |  -  |
		| Bien | Mal |
		