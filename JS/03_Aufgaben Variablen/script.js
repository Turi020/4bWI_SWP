 // Erstelle eine Variable banana mit dem Wert "Banane" 

 let banana = "Banane";
 console.log(banana);

 // Erstelle eine Variable apple mit dem Wert "Apple" 
 let apple = "Apple";
 console.log(apple);


 // Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 

 let bananaPricePerKilo = 2.14;

 // Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 

 let applePricePerKilo = 3.43;

 // Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 

 let Gewicht = 0.34;
 console.log("Ein Apfel hat durchschnittlich ein Gewicht von " + Gewicht + " Kilo");

 // Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 

 let GewichtBanane = 0.22;
 console.log("Ein Banane hat durchschnittlich ein Gewicht von " + GewichtBanane + " Kilo");

 // Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 

 let Bananeperkilo = 1 / GewichtBanane;
 let Appleperkilo = 1 / Gewicht;

 console.log("Banane per Kilo " + Bananeperkilo);
 console.log("Apfel per Kilo " + Appleperkilo);

 let Bananepreis = bananaPricePerKilo / Bananeperkilo;
 let Applepreis = applePricePerKilo / Appleperkilo;

 console.log("Banane Preis " + Bananepreis);
 console.log("Apfel Preis " + Applepreis);

 // Preis von 8 Äpfeln 
 let result = Applepreis * 8;
 console.log("Der Preis von 8 Äpfeln beträgt " + result);

 // Preis von 17 Bananen
 let result1 = Bananepreis * 17;
 console.log("Der Preis von 17 Bananen beträgt " + result1);

 // Preis von 1 Tonne Äpfel 
 let result2 = Applepreis * 1000;
 console.log("Der Preis von 1 Tonnen Äpfel beträgt " + result2);

 // Preis von 1 Tonne Bananen
 let result3 = Bananepreis * 1000;
 console.log("Der Preis von 1 Tonnen Bananen beträgt " + result3);