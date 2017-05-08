const fs = require('fs');
const bencode = require('bencode');
let trackers;

module.exports = {
	addTrackers: function(file,mainTracker,trackerList,replaceTrackers){
		let buff = fs.readFileSync(argv.f);
		let data = bencode.decode(buff);
		data['created by'] = 'Nyaa 1.0';
		if(trackerList && trackerList.length > 0){
			trackers = trackerList;
		}
		else{
			trackers = require(__dirname+'/trackerlist.json');
		}
		if(replaceTrackers){
			data.announce = trackers[0];
			data['announce-list'] = [];
		}
		if(mainTracker){
			data.announce = mainTracker;
			data['announce-list'].unshift([mainTracker]);
		}
		for(let t=0;t<trackers.length;t++){
			data['announce-list'].push([trackers[t]]);
		}
		return bencode.encode(data);
	}
}