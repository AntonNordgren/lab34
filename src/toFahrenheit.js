export const toFahrenheit = (degrees) => {

    if( typeof degrees !== 'number' && typeof degrees !== 'string' || degrees === Infinity || degrees < -273.15) {
        return NaN;
    }
    
    return degrees * 9 / 5 + 32;
}