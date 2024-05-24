import { PatriciaTrie } from './PatriciaTrie.js';

function testInsertAndSearch() {
    const trie = new PatriciaTrie();

    const wordsToInsert = ["hello", "world", "hi", "her", "hero", "heron"];
    for (const word of wordsToInsert) {
        trie.insert(word);
    }

    for (const word of wordsToInsert) {
        console.assert(trie.search(word), `Word ${word} should be found in the trie.`);
    }

    const notInsertedWords = ["hell", "wor", "heroes", "heroic"];
    for (const word of notInsertedWords) {
        console.assert(!trie.search(word), `Word ${word} should not be found in the trie.`);
    }
}

function testDelete() {
    const trie = new PatriciaTrie();

    const wordsToInsert = ["hello", "world", "hi", "her", "hero", "heron"];
    for (const word of wordsToInsert) {
        trie.insert(word);
    }

    const wordsToDelete = ["hello", "hero", "heron"];
    for (const word of wordsToDelete) {
        trie.delete(word);
        console.assert(!trie.search(word), `Word ${word} should not be found in the trie after deletion.`);
    }

    const remainingWords = ["world", "hi", "her"];
    for (const word of remainingWords) {
        console.assert(trie.search(word), `Word ${word} should still be found in the trie.`);
    }
}

testInsertAndSearch();
testDelete();

console.log("All tests passed.");
