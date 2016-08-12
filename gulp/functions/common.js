/**
 * This file/module contains all internal configuration for the build/compile process.
 */
module.exports = {
	// this function ensures the string is cut from within the array of data strings to the end
	processCutoff: function(str, data){
		var temp = [];
		for(var i=0,len=data.length;i<len;i++){
			var index = data[i].indexOf(str);
			if(index !== -1){
				temp.push(data[i].substring(index, data[i].length));
			}else{
				temp.push(data[i]);
			}
		}
		return temp;
	},
	getLibraryList: function(paths, extension){
		var libs = Object.keys(paths),
			libsList = [];

		for(var i=0,len = libs.length; i< len;i++){
			libsList.push(paths[libs[i]] + extension);
		}
		return libsList;
	},
	getFormatedCompileObject: function(obj){
		var str = '({';
		var keys = Object.keys(obj);
		for(var i=0,len = keys.length; i<len; i++){
			str += (keys[i] + ':');
			if(typeof(obj[keys[i]]) !== 'object'){
				str += '\"' + obj[keys[i]] + '\"';
			}else{
				var subKeys = Object.keys(obj[keys[i]]);
				if(subKeys.length>1){
					str += '{';
					for(var j=0; j<subKeys.length; j++){
						str += subKeys[j] + ': \"' + obj[keys[i]][subKeys[j]] + '\"';
						str +=  (subKeys.length > 1 && j===(subKeys.length-1)) ? '' : ',';
					}
					str += '}';
				}
				else{
					str += obj[keys[i]][subKeys[0]];
				}
			}
			str +=  (keys.length > 1 && i===(keys.length-1)) ? '' : ',';
		}
		str += '})';
		return str;
	}
};