export const canGetLicense = (license, age) => {

    let licenses = [
        {licenseType: 'A', ageLimit: 24},
        {licenseType: 'B', ageLimit: 18},
        {licenseType: 'BE', ageLimit: 18},
        {licenseType: 'C', ageLimit: 21},
        {licenseType: 'D', ageLimit: 24}
    ];

    if(age < 0 || age >= 120) {
        throw new Error('Invalid age');
    }

    if(typeof license !== 'string') {
        throw new Error('License paramter is not a string');
    }

    if(typeof age !== 'number') {
        throw new Error('Age parameter is not a number');
    }

    let foundLicenseType = false;
    for(let i = 0; i < licenses.length; i++) {
        if(licenses[i].licenseType === license) {
            foundLicenseType = true;
        }
    }

    if(foundLicenseType === false) {
        throw new Error('LicenseType does not exist');
    }

    for(let i = 0; i < licenses.length; i++) {
        if(licenses[i].licenseType === license) {
            if(age >= licenses[i].ageLimit) {
                return true;
            }
            return false;
        }
    }
}