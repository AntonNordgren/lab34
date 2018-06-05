export const toFahrenheit = (degrees) => {

    if( typeof degrees !== 'number' && typeof degrees !== 'string' ||
        degrees === Infinity || degrees === -Infinity || degrees <= -273.16 || (parseInt(degrees) === NaN)) {
        return NaN;
    }
    
    return degrees * 9 / 5 + 32;
}