let uploadStatus: 'loading' | 'success' | 'error';
let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

interface User {
  name: string;
  age: number;
  surname: string;
  addres?: string;
}

const users: User[] = [
  { name: 'Ivan', age: 32, surname: 'Ivanov', addres: 'st. Green' },
  { name: 'Petr', age: 17, surname: 'Petrov', addres: 'st. Yellow' },
  { name: 'Vasil', age: 40, surname: 'Vasiliev', addres: 'st. Black' },
];

const filterUsers: User[] = users.filter((user: User) => user.age >= 18);

interface RegistredUsers extends User {
  email: string;
}

function sum(a: number, b: number): number {
  return a + b;
}

textFormat = 'capitalize';
function formatString(line: string, status: typeof textFormat): string {
  let temp: string = '';
  if (status === 'uppercase') {
    temp = line.toUpperCase();
  } else if (status === 'lowercase') {
    temp = line.toLowerCase();
  } else if (status === 'capitalize') {
    temp = line
      .split(' ')
      .map((word) => {
        if (word.length === 0) return;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  return temp;
}

function deleteSumbol(line: string, sumbol: string): string {
  let tempString: string = '';
  tempString = line.replaceAll(sumbol, '');
  return tempString;
}

console.log(formatString('Hello maaan', textFormat));

console.log(sum(5, 6));

console.log(deleteSumbol('Осень наступила', 'н'));

console.log(filterUsers);
