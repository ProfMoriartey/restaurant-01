import type { Restaurant } from '../../lib/types';
import { settings } from './settings';
import { tr } from './tr';
import { en } from './en';

export const restaurant: Restaurant = {
  settings,
  content: { tr, en },
};
