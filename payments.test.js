describe('payments tests', function () {

    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    })

    it('should create a curPayment object with billAmt, tipAmt, and tipPercent on createCurPayment() with valid inputs', function () {
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '25', tipPercent: 25})
    })

    it('should not create a curPayment object with empty inputs', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    });

    it('should add a curPayment object to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(allPayments.payment1.billAmt).toEqual('100');
        expect(allPayments.payment1.tipAmt).toEqual('25');
        expect(allPayments.payment1.tipPercent).toEqual(25);
    });

    it('should create a table row with Bill amt Tip amt Tip percent in paymentTable on appendPaymentTable()', function () {
       let curPayment = createCurPayment();
       allPayments['payment1'] = curPayment;
       appendPaymentTable(curPayment);
       let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$25');
        expect(curTdList[2].innerText).toEqual('25%');
        expect(curTdList.length).toEqual(4);
})

    it('should add bill total, tip total, and tip % avg to Shift Summary on updateSummary()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$25');
        expect(summaryTds[2].innerHTML).toEqual('25%');
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        let sumTdList = document.querySelectorAll('#summaryTable tbody tr td');
        for (let td of sumTdList) {
            td.innerHTML='';
        }
        paymentId = 0;
        allPayments = {};
    })
   

});



