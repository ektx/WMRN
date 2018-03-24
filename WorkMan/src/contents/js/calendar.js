
export default class Calendar {

    /*
        当前时间在这年中的第几天
    */
    static dayOfYear (timeStr) {
        let now = timeStr ? new Date(timeStr) : new Date()
        let old = new Date(now.getFullYear(), 0, 0)
        let diff = now - old

        let day = diff / (24 * 60 * 60 * 1000)

        return Math.floor( day )
    }

    static format (format, setTime) {
        let timeArr = format.split(/\W+/);
		let markArr = format.split(/\w+/);
		let result = [];
		let time = setTime ? new Date(setTime) : new Date();
		let timeStr = '';

		let howShow = function (value, time) {
			if (value.length == 2 && time < 10) {
				time = '0'+time;
			}
			return time;
        } 
        
        for (let i = 0, l = timeArr.length; i < l; i++) {
			let _str = timeArr[i], tem = 0;
			switch ( _str ) {
				case 'YYYY':
				case 'YY':
					tem = time.getFullYear();
					if ( _str.length == 2) {
						tem = tem.toString().substr(2,2)
					}
					break;

				case 'MM':
				case 'M':
					tem = howShow(_str, time.getMonth() + 1)
					break;

				case 'DD':
				case 'D':
					tem = howShow(_str, time.getDate())
					break;

				case 'h':
				case 'hh':
					tem = howShow(_str, time.getHours());
					break;

				case 'm':
				case 'mm':
					tem = howShow(_str, time.getMinutes());
					break;

				case 's':
				case 'ss':
					tem = howShow(_str, time.getSeconds());
					break;
			}

			result.push( tem )
		}

		for (let x = 1, y = markArr.length; x < y; x++) {
			timeStr += result[x-1]+markArr[x]
		}

		return timeStr
    }
}