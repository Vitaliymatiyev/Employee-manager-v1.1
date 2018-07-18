let pageO = {}
module.exports = {
    before: browser => {
        pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },  
    'Naigating Away' : browser => {
        pageO
            .click('@cell8')
            .click('@Title')
            .clearValue('@Title')
            .setValue('@Title','Cola')
    },
    'Cancel button' : () => {
        pageO
            .click('@cell9')
            .expect.element('@Cancel').to.have.attribute('disabled')
    },       
    'Save button' : () => {
        pageO
            .click('@cell9')
            .expect.element('@Save').to.have.attribute('disabled')
    },
    'Navigate away' : browser => {
        pageO
            .click('@cell9')
            .verify.containsText('@cell9', 'Eve Sparks')
            browser.pause(3000)
    }
}
