import fs from 'fs';
import path from 'path';

export async function writeData(data: any) {
  fs.writeFileSync(
    path.join(
      __dirname,
      '..',
      '..',
      '..',
      '__tests__',
      'database',
      'database.json'
    ),
    JSON.stringify(data)
  );
}
