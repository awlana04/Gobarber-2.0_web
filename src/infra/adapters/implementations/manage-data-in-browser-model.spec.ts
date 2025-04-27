import ManageDataInBrowser from './manage-data-in-browser-model';

import database from '__tests__/database/database.json';

describe('', () => {
  it('should be able to save data in browser', async () => {
    const manageData = new ManageDataInBrowser();
    const user = await manageData.saveData(
      'user',
      database.users.filter((user) => user.email === 'john@doe.com')
    );

    const userInBrowser = localStorage.getItem('@GoBarber-2.0:user');
    expect(userInBrowser).toBe({
      user: {
        id: '78c3',
        name: 'John Doe',
        email: 'john@doe.com',
        password: '12345678',
        location: 'Somewhere Over the Rainbow',
      },
    });
  });
});
