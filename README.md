# add-trackers
[![npm](https://img.shields.io/npm/v/add-trackers.svg?style=flat-square)](https://npmjs.com/add-trackers)
[![npm downloads](https://img.shields.io/npm/dm/add-trackers.svg?style=flat-square)](https://npmjs.com/add-trackers)

Add trackers to exist torrent file.

## Install with [npm](https://npmjs.org)

```
npm install bencode
npm install add-trackers
```

## Usage

```javascript
const { addTrackers } = require('add-trackers');
const fs = require('fs');
```

### Add trackers

```javascript
let newFile = addTrackers(pathToFile,mainTracker,trackerList,replaceTrackers);
fs.writeFileSync(pathToFile,newFile);
```

* `pathToFile` (string) - path to torrent file
* `mainTracker` (string) - update main tracker
* `trackerList` (array) - tracker list (if false use default list)
* `replaceTrackers` (boolean) - replace trackers from tracker list