import express from 'express'

export const logger = (req: express.Request, res: express.Response, next: Function): void => {
  let url = req.url
  console.log(`${url} was visited`)
  next()
}
