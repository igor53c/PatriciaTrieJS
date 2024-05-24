export class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

export class PatriciaTrie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Delete a word from the trie
    delete(word) {
        const _delete = (node, currentWord, depth) => {
            if (depth === currentWord.length) {
                if (!node.isEndOfWord) {
                    return false;
                }
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }
            const char = currentWord[depth];
            if (!node.children[char]) {
                return false;
            }
            const shouldDeleteChild = _delete(node.children[char], currentWord, depth + 1);
            if (shouldDeleteChild) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }
            return false;
        };

        _delete(this.root, word, 0);
    }
}
