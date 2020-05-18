const readline = require('readline-sync')

function start() {
    const content = {};
    
    content.searchItem = askAndReturnSearchItem();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchItem() {
        return readline.question('Digite o deseja procurar na Wikipedia: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['quem e', 'o que e', 'qual a sua historia']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma tematica ');

        return prefixes[selectedPrefixIndex]
    }

    console.log(content)
}

start()