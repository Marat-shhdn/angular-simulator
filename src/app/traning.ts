interface IUser {
  name: string;
  age: number;
  surname: string;
  addres?: string;
}

interface RegistredUser extends IUser {
  email: string;
}

type IUploadStatus = 'loading' | 'success' | 'error';
type ITextFormat = 'uppercase' | 'lowercase' | 'capitalize';

let uploadStatus: IUploadStatus;
let textFormat: ITextFormat;

const users: IUser[] = [
  { name: 'Ivan', age: 32, surname: 'Ivanov', addres: 'st. Green' },
  { name: 'Petr', age: 17, surname: 'Petrov', addres: 'st. Yellow' },
  { name: 'Vasil', age: 40, surname: 'Vasiliev', addres: 'st. Black' },
];

const filterUsers: IUser[] = users.filter((user: IUser) => user.age >= 18);

console.log(filterUsers);

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(5, 6));

function formatString(line: string, status: ITextFormat): string {
  let result: string = '';
  if (status === 'uppercase') {
    result = line.toUpperCase();
  } else if (status === 'lowercase') {
    result = line.toLowerCase();
  } else if (status === 'capitalize') {
    result = line
      .split(' ')
      .map((word) => {
        if (word.length === 0) return;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  return result;
}

console.log(formatString('Hello maaan', 'capitalize'));
console.log(formatString('Hello maaan', 'lowercase'));
console.log(formatString('Hello maaan', 'uppercase'));

function deleteSymbol(line: string, symbol: string): string {
  return line.replaceAll(symbol, '');
}

console.log(deleteSymbol('Осень наступила', 'н'));
