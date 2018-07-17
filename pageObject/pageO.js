module.exports = {
    url : 'https://devmountain-qa.github.io/employee-manager/1.1_Version/index.html',
    elements : {
        // Employee Card
       employeeID : 'span[name="employeeID"]', 
       nameEntry : 'input[name="nameEntry"]',
       phoneEntry : 'input[name="phoneEntry"]',
       Title : 'input[name="titleEntry"]',
       Save : 'button[name="save"]',
       Cancel : 'button[name="cancel"]',
       errorCard : 'div[class="errorCard"]',
        // simulated list of employees
       cell1 : { selector: '//li[1]', locateStrategy: 'xpath' },
       cell2 : { selector: '//li[2]', locateStrategy: 'xpath' },
       cell3 : { selector: '//li[3]', locateStrategy: 'xpath' },
       cell4 : { selector: '//li[4]', locateStrategy: 'xpath' },
       cell5 : { selector: '//li[5]', locateStrategy: 'xpath' },
       cell6 : { selector: '//li[6]', locateStrategy: 'xpath' },
       cell7 : { selector: '//li[7]', locateStrategy: 'xpath' },
       cell8 : { selector: '//li[8]', locateStrategy: 'xpath' },
       cell9 : { selector: '//li[9]', locateStrategy: 'xpath' },
       cell10 :{ selector:  '//li[10]', locateStrategy: 'xpath' },
       


    }
}