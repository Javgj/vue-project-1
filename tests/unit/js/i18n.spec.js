import { loadedLanguageAsync } from '@/plugins/i18n'

describe('i18n library', () => {
  describe('check when the parameter is bad', () => {
    test('should be a null', async () => {
      await expect(loadedLanguageAsync(null)).resolves.toBeNull()
    })

    test('should be a empty string or locale doesnt exist', async () => {
      const strs = ['', 'tk']
      for (const str of strs) {
        await expect(loadedLanguageAsync(str)).rejects.toThrow(`Cannot find module './${str}.json'`)
      }
    })

    test('should be other type of data', async () => {
      const strs = [{}, [], 0]
      for (const str of strs) {
        await expect(loadedLanguageAsync(str)).resolves.toBe(str)
      }
    })
  })

  describe('check when the parameter exists', () => {
    test('should be the same language or the language was already loaded', async () => {
      await expect(loadedLanguageAsync('en')).resolves.toBe('en')
    })

    test('the language hasn`t been loaded yet', async () => {
      expect(loadedLanguageAsync('es')).toBeInstanceOf(Object)
      await expect(loadedLanguageAsync('es')).resolves.toBe('es')
    })
  })
})
