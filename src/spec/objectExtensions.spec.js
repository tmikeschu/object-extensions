import { Object } from '../lib'

describe('Object.prototype extensions', () => {
  describe('.map', () => {
    it('maps a function over each key value pair', () => {
      const mapper = (key, value) => ({
        [key.toUpperCase()]: value * value
      })

      const ages = { mike: 26, hannah: 25 }

      expect(ages.map(mapper)).toEqual({
        MIKE: 676,
        HANNAH: 625,
      })
    });
  });
});
