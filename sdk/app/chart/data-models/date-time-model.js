var DateTimeDataModel = (function () {
    function DateTimeDataModel() {
    }
    Object.defineProperty(DateTimeDataModel.prototype, "dateTimeSource", {
        get: function () {
            return [
                { timeStamp: new Date(2015, 2, 11), Amount: 10 },
                { timeStamp: new Date(2015, 3, 1), Amount: 1 },
                { timeStamp: new Date(2015, 4, 3), Amount: 3 },
                { timeStamp: new Date(2015, 5, 11), Amount: 18 },
                { timeStamp: new Date(2015, 6, 1), Amount: 7 },
                { timeStamp: new Date(2015, 7, 3), Amount: 5 },
                { timeStamp: new Date(2015, 8, 11), Amount: 4 },
                { timeStamp: new Date(2015, 9, 1), Amount: 2 },
                { timeStamp: new Date(2015, 10, 3), Amount: 6 },
            ];
        },
        enumerable: true,
        configurable: true
    });
    return DateTimeDataModel;
})();
exports.DateTimeDataModel = DateTimeDataModel;
