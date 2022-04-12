export default function getListStudents() {
  const obj = (id, firstName, location) => ({ id, firstName, location });
  return [obj(1, 'Guillaume', 'San Francisco'), obj(2, 'James', 'Columbia'), obj(5, 'Serena', 'San Francisco')];
}
