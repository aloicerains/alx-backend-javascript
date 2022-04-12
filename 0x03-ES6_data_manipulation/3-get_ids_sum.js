import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(obs) {
  if (Array.isArray(obs)) {
    const objs = getListStudentIds(obs);
    return objs.reduce((obj1, obj2) => obj1 + obj2);
  }
  return undefined;
}
