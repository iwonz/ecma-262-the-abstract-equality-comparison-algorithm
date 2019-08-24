// 11.9.3 The Abstract Equality Comparison Algorithm (https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3)

import { Type, ToNumber, ToPrimitive } from './utils';

interface Description {
  operands?: Operands;
  section?: string;
  selector: string;
  description: string;
  result?: undefined | boolean;
}

interface Descriptions {
  [propName: string]: Description;
}

export interface Operands {
  x: any;
  y: any;
}

const descriptions: Descriptions = {
  '1': {
    selector: 'li:nth-child(1)',
    description: 'If Type(x) is the same as Type(y), then',
  },
  '1 a': {
    selector: 'li:nth-child(1) > ol > li:nth-child(1)',
    description: 'If Type(x) is Undefined, return true.',
  },
  '1 b': {
    selector: 'li:nth-child(1) > ol > li:nth-child(2)',
    description: 'If Type(x) is Null, return true.',
  },
  '1 c': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3)',
    description: 'If Type(x) is Number, then',
  },
  '1 c i': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(1)',
    description: 'If x is NaN, return false.',
  },
  '1 c ii': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(2)',
    description: 'If y is NaN, return false.',
  },
  '1 c iii': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(3)',
    description: 'If x is the same Number value as y, return true.',
  },
  '1 c iv': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(4)',
    description: 'If x is +0 and y is −0, return true.',
  },
  '1 c v': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(5)',
    description: 'If x is −0 and y is +0, return true.',
  },
  '1 c vi': {
    selector: 'li:nth-child(1) > ol > li:nth-child(3) > ol > li:nth-child(6)',
    description: 'Return false.',
  },
  '1 d': {
    selector: 'li:nth-child(1) > ol > li:nth-child(4)',
    description:
      'If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.',
  },
  '1 e': {
    selector: 'li:nth-child(1) > ol > li:nth-child(5)',
    description:
      'If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.',
  },
  '1 f': {
    selector: 'li:nth-child(1) > ol > li:nth-child(6)',
    description: 'Return true if x and y refer to the same object. Otherwise, return false.',
  },
  '2': {
    selector: 'li:nth-child(2)',
    description: 'If x is null and y is undefined, return true.',
  },
  '3': {
    selector: 'li:nth-child(3)',
    description: 'If x is undefined and y is null, return true.',
  },
  '4': {
    selector: 'li:nth-child(4)',
    description:
      'If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).',
  },
  '5': {
    selector: 'li:nth-child(5)',
    description:
      'If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.',
  },
  '6': {
    selector: 'li:nth-child(6)',
    description: 'If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.',
  },
  '7': {
    selector: 'li:nth-child(7)',
    description: 'If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).',
  },
  '8': {
    selector: 'li:nth-child(8)',
    description:
      'If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).',
  },
  '9': {
    selector: 'li:nth-child(9)',
    description:
      'If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.',
  },
  '10': {
    selector: 'li:nth-child(10)',
    description: 'Return false.',
  },
};

export function abstractEquality(x: any, y: any): Description[] {
  const stack: Description[] = [];

  function pushToStack(
    section: string | Description[],
    result?: undefined | boolean,
  ): Description[] {
    if (Array.isArray(section)) {
      stack.push(...section);
    } else {
      stack.push({
        operands: { x, y },
        section,
        selector: descriptions[section].selector,
        description: descriptions[section].description,
        result,
      });
    }

    return stack;
  }

  const TypeX = Type(x);
  const TypeY = Type(y);

  // 1
  if (TypeX === TypeY) {
    pushToStack('1');

    // a
    if (TypeX === 'undefined') {
      return pushToStack('1 a', true);
    }

    // b
    if (TypeX === 'null') {
      return pushToStack('1 b', true);
    }

    // c
    if (TypeX === 'number') {
      pushToStack('1 c');

      // i
      if (isNaN(x)) {
        return pushToStack('1 c i', false);
      }

      // ii
      if (isNaN(y)) {
        return pushToStack('1 c ii', false);
      }

      // iii
      if (x === y) {
        return pushToStack('1 c iii', true);
      }

      // iv
      if (x === +0 && y === -0) {
        return pushToStack('1 c iv', true);
      }

      // v
      if (x === -0 && y === +0) {
        return pushToStack('1 c v', true);
      }

      // vi
      return pushToStack('1 c vi', false);
    }

    // d
    if (TypeX === 'string') {
      if (x === y) {
        return pushToStack('1 d', true);
      }

      return pushToStack('1 d', false);
    }

    // e
    if (TypeX === 'boolean') {
      if ((x === true && y === true) || (x === false && y === false)) {
        return pushToStack('1 e', true);
      }

      return pushToStack('1 e', false);
    }

    // f
    if (TypeX === 'object') {
      if (x === y) {
        return pushToStack('1 f', true);
      }

      return pushToStack('1 f', false);
    }
  }

  // 2
  if (x === null && y === undefined) {
    return pushToStack('2', true);
  }

  // 3
  if (x === undefined && y === null) {
    return pushToStack('3', true);
  }

  // 4
  if (TypeX === 'number' && TypeY === 'string') {
    pushToStack('4');

    return pushToStack(abstractEquality(x, ToNumber(y)));
  }

  // 5
  if (TypeX === 'string' && TypeY === 'number') {
    pushToStack('5');

    return pushToStack(abstractEquality(ToNumber(x), y));
  }

  // 6
  if (TypeX === 'boolean') {
    pushToStack('6');

    return pushToStack(abstractEquality(ToNumber(x), y));
  }

  // 7
  if (TypeY === 'boolean') {
    pushToStack('7');

    return pushToStack(abstractEquality(x, ToNumber(y)));
  }

  // 8
  if (TypeX === 'string' || (TypeX === 'number' && TypeY === 'object')) {
    pushToStack('8');

    return pushToStack(abstractEquality(x, ToPrimitive(y)));
  }

  // 9
  if ((TypeX === 'object' && TypeY === 'string') || TypeY === 'number') {
    pushToStack('9');

    return pushToStack(abstractEquality(ToPrimitive(x), y));
  }

  return pushToStack('10');
}
