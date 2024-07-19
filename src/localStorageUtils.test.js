import { getUserData, saveUserData } from './utils/localStorageUtils';

describe('localStorageUtils', () => {
    beforeEach(() => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
      jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
      jest.spyOn(Storage.prototype, 'clear').mockImplementation(() => {});
    });
  
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    test('getUserData returns default data if no data in localStorage', () => {
      const defaultData = [
        {
          id: 1,
          name: 'John Doe',
          workouts: [
            { type: 'Running', minutes: 30 },
            { type: 'Cycling', minutes: 45 }
          ]
        },
        {
          id: 2,
          name: 'Jane Smith',
          workouts: [
            { type: 'Swimming', minutes: 60 },
            { type: 'Running', minutes: 20 }
          ]
        },
        {
          id: 3,
          name: 'Mike Johnson',
          workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
          ]
        }
      ];
      // Mock the getItem implementation
      Storage.prototype.getItem.mockReturnValue(null);
      expect(getUserData()).toEqual(defaultData);
    });
  
    test('getUserData returns parsed data from localStorage', () => {
      const mockData = JSON.stringify([
        { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] }
      ]);
      Storage.prototype.getItem.mockReturnValue(mockData);
      expect(getUserData()).toEqual([
        { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] }
      ]);
    });
  
    test('saveUserData saves data to localStorage', () => {
      const mockData = [
        { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }] }
      ];
      saveUserData(mockData);
      expect(Storage.prototype.setItem).toHaveBeenCalledWith('userData', JSON.stringify(mockData));
    });
  });
  