import { GradeType, GradeTypes } from './types';
import { grades } from './constants'

interface GradeOutput {
  [key: string]: GradeType;
}

const getGrades = (obj: GradeTypes): GradeOutput => {
  const newObj: GradeOutput = {};
  Object.entries(obj).forEach(([key, value]) => {
    const subkeys = key.split(/,\s?/);
    const target = value;
    subkeys.forEach(key => {
      newObj[key] = target;
    });
  });
  return newObj;
};
const gradeBands: GradeOutput = getGrades(grades);

export { gradeBands };