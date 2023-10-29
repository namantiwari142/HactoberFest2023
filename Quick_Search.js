class QuickSearch {
  constructor(n) {
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  union(p, q) {
    const pID = this.id[p];
    const qID = this.id[q];

    if (pID === qID) return;

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pID) {
        this.id[i] = qID;
      }
    }
  }

  connected(p, q) {
    return this.id[p] === this.id[q];
  }
}

// Example usage:
const n = 10; // Number of elements
const quickSearch = new QuickSearch(n);

quickSearch.union(4, 3);
quickSearch.union(3, 8);
quickSearch.union(6, 5);
quickSearch.union(9, 4);
quickSearch.union(2, 1);

console.log(quickSearch.connected(0, 7)); // false
console.log(quickSearch.connected(8, 9)); // true
