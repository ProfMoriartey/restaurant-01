// The restaurant this build is for. To make a site for another restaurant,
// add a folder under src/restaurants and point this import at it.
import { restaurant } from './restaurants/flu-burger';

export const { settings, content } = restaurant;
