export default function updateStudentGradeByCity(arr, city, newGrades) {
  const newArr = arr.filter((item) => item.location === city);

  const updatedArr = newArr.map((item) => {
    const newGradesObj = newGrades.find((grade) => grade.studentId === item.id);
    if (newGradesObj) {
      return { ...item, grade: newGradesObj.grade };
    }
    return { ...item, grade: 'N/A' };
  });

  return updatedArr;
}
