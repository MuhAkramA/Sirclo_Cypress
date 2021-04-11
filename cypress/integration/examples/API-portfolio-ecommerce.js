// type definitions for custom commands like "createDefaultTodos"
///<reference types="Cypress" />


describe('API testing request',() => {
    it('API testing request', () => {
      cy.request({
          method: 'POST', 
          url: 'https://hapidev.tanamduit.com/ecommerce/v2.0/mf/transaction/buy/banktransfer',
          headers: {
            'Accept': 'application/json',  
            'Content-Type' : 'application/json',
            'X-Ca-Key': '203812398',
            'X-Ca-Signature': 'HXFA3O/bYFbj9fsg6MJRx6zFn/cKn2p/xoOZYiEZATQ=',
            'User-Access-Key':'362eeebf6889f4681ac99e36da0ee580.NDg2Mzk3MzUyOnJvYmludmFuYWtyYW1AZ21haWwuY29tOjQ4NjM5NzM1Mg==',
            'Tenant-Id' : '203812398',
            'Accept-Encoding':'application/json'
          },
          body: {       
                "partnerTrxId":"AQWZQYAXZBGKSLASFGLGWNBFDZDAAAQ",
                "productCode":"BZ002MMCKASMAX00",
                "trxAmount":"50000000",
                "transferReceipt" : "data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAIAAACogXwNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGtSURBVFhH7Y7bcsMwCETz/z/tYh1KCQLJcpxMp/V5sJflon1sv5I71gp3rBX+SqxHhzYuZeFoFeIdySYXiQJqdQxapxk9dvy9y5Pl55YyCavzU5Jb5974RCxVK7w31unrtrh0oRq+Y2V8KNZqpmr+yliDXbqC1o3eMa6JxdZ0NwxIWa1EdzA6gJWw2C4p5iDAtwKFW0yn2LAXYGUQ0EaeHKNwiwV8QesGpZleoL2DEEIrkLuCLPQ75ngRwAe1ui0B7R1P7sJ+r1vDBEpvtpEf1P1G3YZa3QrkrqdaxqRrmG/gg1rPuziB3A30+zgB85mByhHQmIHc7bFDYCUCfNmm9NXgoP23J3dT2kG9lQphn2ulmV6gvWidHUwj1mP0RvYYhFKgtK/Rmk+Op2ykcEtAYwpee/xkmJEyOJ6ykWK3TIDXHj8WZnyrp2ykcAvUaoQSGPNow7W07liIZYdMGKEEzLQ15ejOHqR+IG2NV8YsxFKVQYJL0IP8xviFlLQ7XhlzNJaqgn5AnOnWgPnmwQfCWChXOfSeqgOQxlB3nfObA17MJNyxVvhPsV5l274AB8ELK4wuvGkAAAAASUVORK5CYII=",
                "customerAccountBankCode" : "CENAIDJA",
                "customerAccountNumber" : "54322232",
                "destinationProductBankIndex" : "0"
            }
        }).then(response => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('message', 'Berhasil')
        }) 
        })
    })
  
