let pageO = {}
module.exports = {
    before: browser => {
    pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },    
'Check side list' : () => {
    pageO        
        .click('@cell1')
        .click('@cell7')
        .click('@cell3')
        .expect.element('@employeeID').text.to.equal('ID: 3')
    },
'Field lines1' : () => { 
    pageO
        .click('@nameEntry') //name
        .clearValue('@nameEntry')
        .setValue('@nameEntry','Frank Castle')
        .click('@phoneEntry') //phone
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry','1291974123')
        .click('@Title') // title
        .clearValue('@Title')
        .setValue('@Title','The Punisher') 
        .click('@Save')
        .verify.containsText('@cell3', 'Frank Castle')
},
'Field lines2' : () => {
    pageO
        .click('@cell1')
        .click('@nameEntry') //name
        .clearValue('@nameEntry')
        .setValue('@nameEntry','Matt Murdock')
        .click('@phoneEntry') //phone
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry','1213461298')
        .click('@Title') // title
        .clearValue('@Title')
        .setValue('@Title','Daredevil') 
        .click('@Cancel')
        .verify.containsText('@cell1', 'Bernice Ortiz')    
},
'Field lines3' : browser => {
    pageO
        .click('@cell7')
        .click('@nameEntry') //name
        .clearValue('@nameEntry')
        .setValue('@nameEntry','qwertyuiopasdfghjklzxcvbnmqazxcvrfgiuy')
        .click('@Save')
        .verify.containsText('@errorCard', 'The name field must be between 1 and 30 characters long. The title field must be between 1 and 30 characters long.')
        browser.getCssProperty('input[name="nameEntry"]','border-bottom', result => {
            browser.assert.equal(result.value, '2px solid rgb(204, 0, 0)')
        })
        browser.pause(10000)
}




}