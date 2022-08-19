import countFilesByExt from '../countFilesByExt'

describe('countFilesByExt', () => {
  test('should count files by extension', () => {
    const fileNames = ['file.js', 'file.ts', 'file.tsx', 'file.jsx']
    const result = countFilesByExt(fileNames)
    expect(result).toEqual({
      js: 1,
      ts: 1,
      tsx: 1,
      jsx: 1,
    })
  })

  test('should return empty json with empty list', () => {
    const result = countFilesByExt([])
    expect(result).toEqual({})
  })

  test('should consider files without dot as extension', () => {
    const fileNames = [
      'file.js',
      'file.ts',
      'file.tsx',
      'file.jsx',
      'env',
      '.editorconfig',
      'file.tsx',
      'file.tsx',
    ]
    const result = countFilesByExt(fileNames)
    expect(result).toEqual({
      js: 1,
      ts: 1,
      tsx: 3,
      jsx: 1,
      env: 1,
      editorconfig: 1,
    })
  })
})
