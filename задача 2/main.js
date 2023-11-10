let students = [
    { name: 'Vasya', class: 6, mark: 3 },
    { name: 'Petya', class: 6, mark: 5 },
    { name: 'Masha', class: 7, mark: 4 },
    { name: 'Dasha', class: 7, mark: 4 },
    { name: 'Kolya', class: 8, mark: 2 },
    { name: 'Olya', class: 8, mark: 5 },
    { name: 'Ivan', class: 9, mark: 4 },
    { name: 'Sasha', class: 9, mark: 3 },
    { name: 'Katya', class: 9, mark: 5 }
  ];
  
  // 1. Средняя оценка всех школьников
  let totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
  let averageMark = totalMarks / students.length;
  console.log('Средняя оценка всех учащихся:', averageMark);
  
  // 2. Средние оценки по классам
  let classMarks = students.reduce((classSum, student) => {
    if (!classSum[student.class]) {
      classSum[student.class] = { count: 0, total: 0 };
    }
    classSum[student.class].total += student.mark;
    classSum[student.class].count++;
    return classSum;
  }, {});
  
  let classAverages = {};
  for (let classNum in classMarks) {
    classAverages[classNum] = classMarks[classNum].total / classMarks[classNum].count;
  }
  console.log('Средние оценки учащихся, сгруппированных по классу:', classAverages);
  
  // 3. Пять лучших
  let topStudents = students.sort((a, b) => b.mark - a.mark).slice(0, 5);
  console.log('Пять лучших учащихся, отсортированных по полю mark:', topStudents);
  
  