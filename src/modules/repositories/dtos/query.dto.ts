import { IsNotEmpty, IsString, IsOptional, IsDate, IsIn, IsNumber } from 'class-validator';

export class QueryDTO {


  @IsOptional()
  @IsDate({ message: 'created should be valid Date format' })
  @IsNotEmpty({ message: 'created cannot be blank' })
  created: Date;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'language cannot be blank' })
  @IsIn([
    'javascript',
    'java',
    'scala',
    'c',
    'c#',
    'c++',
    'php',
    'typeScript',
    'python'
  ])
  language: string;


  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'top cannot be blank' })
  @IsIn([
    10,
    50,
    100
  ])
  per_page: number;
}
