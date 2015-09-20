# Node.js-FS
測試、DEMO node.js filesystem

#### 利用模組 fs-extra

* 複製某資料夾下的所有檔案

  ``` js
  import fs from 'fs-extra'
  fs.copy( source_path, target_path, callback )
  ```