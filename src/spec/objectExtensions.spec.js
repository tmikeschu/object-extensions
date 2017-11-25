import { Object } from '../lib'

const { map, reduce } = Object.prototype

describe('Object.prototype extensions', () => {
  describe('.map', () => {
    it('maps a function over each key value pair', () => {
      const mapper = (key, value) => ({
        [key.toUpperCase()]: value * value
      })

      const ages = { mike: 26, hannah: 25 }

      expect(map.bind(ages)(mapper)).toEqual({
        MIKE: 676,
        HANNAH: 625,
      })
    })

    it('only accepts a function that returns an object', () => {
      const mapPrimitive = (key, value) => key.toUpperCase()
      const mapArray = (key, value) => ([key, value])

      const ages = { mike: 26, hannah: 25 }

      expect(() => {
        map.bind(ages)(mapPrimitive)
      }).toThrow("Function must return an object {}")

      expect(() => {
        map.bind(ages)(mapArray)
      }).toThrow("Function must return an object {}")
    })
  })
})
