export const getTodaysDate = () => {
    const today = new Date();
    return `${today.getDate().toString().padStart(2,'0')}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getFullYear()}`;
}

// #96DE72
// #ee403c