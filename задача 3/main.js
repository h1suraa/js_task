function isObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
  
    for (var key in obj1) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        if (!isObjectsEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  var obj1 = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
  };
  
  var obj2 = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
  };
  
  console.log(isObjectsEqual(obj1, obj2));
   
  obj2.lastName = 'Ivanov';
   
  console.log(isObjectsEqual(obj1, obj2));
   
  var obj3 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    father: {
      firstName: 'Ivan',
      lastName: 'Pupkin'
    }
  };
  
  var obj4 = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    father: {
      firstName: 'Ivan',
      lastName: 'Pupkin'
    }
  };
  
  console.log(isObjectsEqual(obj3, obj4));
   
  obj4.father.lastName = 'Ivanov';
   
  console.log(isObjectsEqual(obj3, obj4));
  