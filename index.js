const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const findMatching = drivers.filter(names)

// function names(name) {
//     return name == 'Bobby'
// }

function findMatching(drivers, name) {
    return drivers.filter(function(names) {
        return names === name || names === name.toLowerCase()
    })
}

findMatching(drivers, 'Bobby')

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(names) {
        return names.startsWith(name);
    });
}

fuzzyMatch(drivers, 'Sa')

// function

// function findMatching(name) {
//     return drivers.filter(function(names){
//         return names.toLowerCase == name
//     })
// }


// const specify2 = drivers.filter(word2)

// function word2(name){
//     return name == 'Bobby' && name == 'Sammy'
// }

// const emptyFinding = drivers.filter(word3)

// function word3(name){
//     return name.startsWith('Susan')
// }

// function fuzzyMatch(name) {
//     return drivers.filter(function(names) {
//         return names.includes(name)
//     })
// }

// const containLetter = drivers.filter(word5)

// function word5(name){
//     return name.includes('y')
// }

// const containString = drivers.filter(word6)

// function word6(name){
//     return name.includes('mm')
// }

const driver = [
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

  function matchName(drive, name) {
    return drive.filter(function(names) {
      const findHim = names.name === name
        return findHim 
    });
  }
  // function matchName(drive, person) {

  //   return drive.filter(function(names) {
  //     const personObj = [];
  //     for (let person in names)
  //     if (names.name === person) {
  //       personObj.push(names.name)
  //     }
  //       return personObj
  //   })
  // }


////Works but only for one parameter (assignment requires two)
// function findMatching(name) {
//     return drivers.filter(function(names) {
//         return names === name
//     })
// }