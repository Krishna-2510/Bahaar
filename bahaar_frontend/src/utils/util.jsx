export const getTodaysDate = () => {
    const today = new Date();
    return `${today.getDate().toString().padStart(2,'0')}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getFullYear()}`;
}

export const calculateAge = (birthDateStr) => {
    // Parse the input date string
    const [day, month, year] = birthDateStr.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day); // month is 0-indexed in JS

    const today = new Date();
    const ageInMilliseconds = today - birthDate;

    // Calculate age in days
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    if (ageInDays < 30) {
        return ageInDays === 0 ? 'Added today' : `${ageInDays} day${ageInDays === 1 ? '' : 's'}`;
    }

    // Calculate age in months
    const ageInMonths = Math.floor(ageInDays / 30);
    if (ageInMonths < 12) {
        return `${ageInMonths} months`;
    }

    // Calculate age in years
    const ageInYears = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust for the case where the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return `${ageInYears - 1} years`;
    }

    return `${ageInYears} years`;
}
