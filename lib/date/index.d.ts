declare class DateUtil {
    /**
     * Format date to string
     * @param date Date you want format
     * @param format Format rule
     * @returns String
     */
    static format(date: string | number | Date, format?: string): string;
    private date;
    private formatString;
    /**
     * constructor
     * @param p Date string or timestamp or Date object
     */
    constructor(p?: string | number | Date);
    /**
     * Get current date object
     * @returns Date object
     */
    getDate(): Date;
    /**
     * Set date object
     * @param date Date string or timestamp or Date object
     */
    setDate(date?: string | number | Date): this;
    /**
     * Format date to string
     * @param string Format rule, if null, it will be yyyy-MM-dd HH:mm:ss
     * @returns String
     */
    format(string?: string): string;
}
export default DateUtil;
