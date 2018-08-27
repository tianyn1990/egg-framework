module.exports = {
    get isIOS() {
        const iosReg = /(iPhone|iPod|iPad)/i;
        return iosReg.test(this.get('user-agent'));
    },
    get isAndroid() {
        const aosReg =/Android/i;
        return aosReg.test(this.get('user-agent'));
    }
};