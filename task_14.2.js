const dog = {
    name: "Оладушек",
    legs: 4,
    isAwesome: true
    };
    
function propertySearch (key, obj) {
    return key in obj;
} //возвращает true, если ключ найден, иначе возаращает false.
    
propertySearch ("isAwesome", dog);