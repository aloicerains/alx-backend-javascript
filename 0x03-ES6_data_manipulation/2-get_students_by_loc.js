export default function getStudentsByLocation(objs, city) {
  if (Array.isArray(objs) && typeof (city) === 'string') {
    return objs.filter((obj) => obj.location === city);
  }
  return [];
}
