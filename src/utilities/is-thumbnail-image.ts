export const isThumbnailImage = (filename: string | boolean) => {
  return `${filename}`.includes('thumbnail')
}
