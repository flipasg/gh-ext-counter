export default function countFilesByExt(fileNames: string[]) {
  return fileNames.reduce((filesByExt, fileName) => {
    const ext = fileName.split('.').pop()
    if (ext) {
      filesByExt[ext] = (filesByExt[ext] || 0) + 1
    }
    return filesByExt
  }, {} as Record<string, number>)
}
