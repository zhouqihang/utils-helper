class DateUtil {
    /**
     * Format date to string
     * @param date Date you want format
     * @param format Format rule
     * @returns String
     */
    static format(date: string | number | Date, format: string = '') {
        let _date: Date = null;
        if (date instanceof Date) {
            _date = date;
        }
        else {
           _date = new Date(date);
        }

        let formatObj = {
            'M+': _date.getMonth() + 1,
            'd+': _date.getDate(),
            'H+': _date.getHours(),
            'm+': _date.getMinutes(),
            's+': _date.getSeconds(),
            'q+' : Math.floor((_date.getMonth()+3)/3),
            'S': _date.getMilliseconds()
        }

        // replace year
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, `${_date.getFullYear()}`.substr(4 - RegExp.$1.length));
        }
        // replace month day hour minute second
        Object.keys(formatObj)
            .forEach((k) => {
                if (new RegExp(`(${k})`).test(format)) {
                    format = format.replace(
                        RegExp.$1,
                        RegExp.$1.length === 1
                            ? formatObj[k]
                            : `00${formatObj[k]}`.substr(`${formatObj[k]}`.length)
                    );
                }
            });
        return format;
    }

    private date: Date | null = null;
    private formatString = 'yyyy-MM-dd HH:mm:ss';

    /**
     * constructor
     * @param p Date string or timestamp or Date object
     */
    constructor(p?: string | number | Date) {
        this.setDate(p);
    }

    /**
     * Get current date object
     * @returns Date object
     */
    public getDate() {
        return this.date;
    }

    /**
     * Set date object
     * @param date Date string or timestamp or Date object
     */
    public setDate(date?: string | number | Date) {
        if (date instanceof Date) {
            this.date = date;
        }
        else {
            this.date = new Date(date);
        }
        return this;
    }

    /**
     * Format date to string
     * @param string Format rule, if null, it will be yyyy-MM-dd HH:mm:ss
     * @returns String
     */
    public format(string: string = null) {
        if (string === null) {
            return DateUtil.format(this.date, this.formatString);
        }
        return DateUtil.format(this.date, string);
    }

}

export default DateUtil;
