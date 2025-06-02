import { promisify } from 'util';
import fs from 'fs';

const readFileAsync = promisify(fs.readFile);

export default readFileAsync;
