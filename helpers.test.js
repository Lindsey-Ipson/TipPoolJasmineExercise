describe('helpers tests', function () {
    beforeEach(function () {
        allPayments = {payment1: {billAmt: '100', tipAmt: '25', tipPercent: 25}, payment2: {billAmt: '200', tipAmt: '40', tipPercent: 20}}
    })
    
    it('should return a sum total for billAmt, tipAmt, or tipPercent from allPayments objects, given the type of sum as an input, on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(300);
        expect(sumPaymentTotal('tipAmt')).toEqual(65);
        expect(sumPaymentTotal('tipPercent')).toEqual(45);
    })

    it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function () {
        let billAmt = 100;
        let tipAmt = 30;
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(30);
    })

    it('should append a newly created td element from value in 2nd parameter to a table row element in 1st parameter on appendTd()', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'testTd');
        expect(newTr.innerHTML).toEqual('<td>testTd</td>');
    })


    it('should add a delete button to a Tr upon appendDeleteBtn(tr)', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.innerHTML).toEqual('<td>X</td>');
    })

    afterEach(function () {
        allPayments = {};
        paymentId = 0;
    })

});



