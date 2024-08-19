let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];



function findMatching(drivers, name) {
    return drivers.filter( (driver) => {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers , letters) {
    return drivers.filter((dirver) => {
        return dirver.toLowerCase().startsWith(letters.toLowerCase())
    }) 
}


const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversObj , driverName){
    return driversObj.filter((driver) => {
        return driver.name.toLowerCase() === driverName.toLowerCase(   ) 
    })
}

console.log(matchName(driversObj , "Bobby"));
