import fs from 'fs-extra'

console.log('Start copy fils..\nFrom ./source to ./target');

fs.copy('./source', './target', err => {
  if (err) throw err
  console.log("Copy Success!");
}) // copies file