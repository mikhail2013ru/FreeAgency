(function() {
    var me = {};

    me.isEmail = function(email) {
        var re = /^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
        return re.test(email);
    }

    me.isNumber = function(number) {
        var re = /^\d+$/;
        return re.test(number);
    }

    me.isNotEmpty = function(str) {
        return Boolean(str);
    };

    ITVDN.validation = me;
}());