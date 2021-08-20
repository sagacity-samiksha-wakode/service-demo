import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService
{
createDb()
{
  let bookDetails=[

    {id:100, employee_name:'samiksha', employee_salary:20000 ,employee_age:34},

  ];
  return {books:bookDetails}
}
}
