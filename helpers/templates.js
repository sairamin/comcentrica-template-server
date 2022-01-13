var DomParser = require('dom-parser');

const formatTemplate = (template = {}, details = {}) => {
    const { text } = template;
    let formattedText = text;
    var parser = new DomParser();
    const document = parser.parseFromString(text, 'text/html')
    const mentions = document.getElementsByClassName('mention')
    for(let i = 0; i <  mentions.length; i++) {
        const mention = mentions[i]
        const key = mention.getAttribute('data-id')
        formattedText = formattedText.replace(mention.outerHTML, details[key])
    }
    return {
        ...template.dataValues,
        text: formattedText
    }
}

module.exports = formatTemplate;