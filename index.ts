import axios from 'axios';
import { Categories, Category } from './types';
const _ = require('lodash');

const categoriesArray: Array<string> = [];

const getCategories = async () => {
  const response = axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  const result: Categories = (await response).data;
  _.forEach(result.categories, ({ strCategory }: Category) => {
    categoriesArray.push(strCategory);
  });
  _.sortBy(categoriesArray, ((catg:string) =>catg ));
};

