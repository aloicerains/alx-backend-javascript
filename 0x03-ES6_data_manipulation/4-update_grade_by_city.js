export default function updateStudentGradeByCity(stds, city, grades) {
  return stds.filter((std) => std.location === city)
    .map((std) => {
      const grad = grades.filter((g) => g.studentId === std.id);
      if (grad.length === 1) std.grade = grad[0].grade;
      else std.grade = 'N/A';
      return std;
    });
}
