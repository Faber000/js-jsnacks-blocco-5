const cars = [
    {
        marca : "marca 1",
        modello : "modello 1",
        alimentazione : "metano",
    },
    
    {
        marca : "marca 2",
        modello : "modello 2",
        alimentazione : "diesel",
    },
    
    {
        marca : "marca 3",
        modello : "modello 3",
        alimentazione : "diesel",
    },
    
    {
        marca : "marca 4",
        modello : "modello 4",
        alimentazione : "benzina",
    },
    
    {
        marca : "marca 5",
        modello : "modello 5",
        alimentazione : "elettrico",
    },
    
    {
        marca : "marca 6",
        modello : "modello 6",
        alimentazione : "benzina",
    },
    
    {
        marca : "marca 7",
        modello : "modello 7",
        alimentazione : "benzina",
    },
    
    {
        marca : "marca 8",
        modello : "modello 8",
        alimentazione : "gpl",
    },
    
    {
        marca : "marca 9",
        modello : "modello 9",
        alimentazione : "diesel",
    },
    
    {
        marca : "marca 10",
        modello : "modello 10",
        alimentazione : "benzina",
    },
]

const array1 = cars.filter(car => car.alimentazione == "benzina");
const array2 = cars.filter(car => car.alimentazione == "diesel");
const array3 = cars.filter(car => car.alimentazione != "benzina" && car.alimentazione != "diesel");

console.log(array1);
console.log(array2);
console.log(array3);