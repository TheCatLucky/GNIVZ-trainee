import { readFileSync } from 'fs';
import { Geo, Incomings } from './incomes';

const geo = readFileSync('geo.json', 'utf-8') as Geo|unknown;
const incomings = readFileSync('incomings.json', 'utf-8') as Incomings | unknown;
