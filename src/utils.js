  // const formatJson = () => {
  //   let retVal = [];
  //   for (const key in datajj) {
  //     const data = { number: datajj[key].cart, data: [datajj[key].data] }
  //     retVal.push(data);
  //   }
  //   const ddd = retVal.map((item) => {
  //     const retVal = []
  //     const id = item.number;
  //     const data = item.data;
  //     retVal.push(id, data)
  //     return retVal
  //   })
  //   return ddd;
  // }

  // function formatData(data) {
  //   const mergedArr = [];
  //   if (data) {
  //     for (let i = 0; i < data.length; i++) {
  //       const id = data[i][0];
  //       const str = data[i][1][0];
  //       const existingObj = mergedArr.find(obj => obj.id === id);

  //       if (existingObj) {
  //         existingObj.data.push(str);
  //       } else {
  //         mergedArr.push({ id, data: [str] });
  //       }
  //     }
  //     const lior = mergedArr.map(obj => {
  //       // const retVal = []
  //       // retVal.push(obj.data)
  //       return obj.data
  //     });
  //     // console.log(lior)
  //     return lior;
  //   }
  // }

  // const transactions = formatData(formatJson());

  // function calcData(data) {
  //   console.log('------------------start---------------------------')
  //   // console.log(data.length)

  //   if (Array.isArray(data)) {
  //     // Calculate the support for each itemset
  //     var support = {};
  //     var minSupport = 0.08; // Minimum support threshold
  //     for (var i = 0; i < data.length; i++) {
  //       for (var j = 0; j < data[i].length; j++) {
  //         if (support[data[i][j]]) {
  //           support[data[i][j]] += 1;
  //         } else {
  //           support[data[i][j]] = 1;
  //         }
  //       }
  //     }

  //     // Calculate the confidence for each rule
  //     var confidence = {};
  //     var minConfidence = minSupport; // Minimum confidence threshold

  //     for (var item in support) {
  //       var itemset = [item];
  //       confidence[itemset] = {};
  //       for (var i = 0; i < data.length; i++) {
  //         if (data[i].indexOf(item) >= 0) {
  //           for (var j = 0; j < data[i].length; j++) {
  //             if (data[i][j] != item) {
  //               var itemset2 = [item, data[i][j]];
  //               if (confidence[itemset][itemset2] == undefined) {
  //                 confidence[itemset][itemset2] = 1;
  //               } else {
  //                 confidence[itemset][itemset2] += 1;
  //               }
  //             }
  //           }
  //         }
  //       }
  //       for (var itemset2 in confidence[itemset]) {
  //         var s = support[itemset2.split(",")[0]];
  //         var c = confidence[itemset][itemset2] / support[item];
  //         // console.log(itemset2)

  //         if (c >= minConfidence) {
  //           console.log(itemset.join(",") + " -> " + itemset2 + " (support: " + s + ", confidence: " + c + ")");
  //         }
  //         // if (c >= minConfidence) {
  //         //   console.log(itemset.join(",") + " -> " + itemset2 + " (support: " + s + ", confidence: " + c + ")");
  //         // }
  //       }
  //     }
  //   } else {
  //     console.log('there is no data')
  //   }
  //   console.log('------------------end---------------------------')
  // }

  // function secFunction() {
  //   // Create a sample dataset of customer transactions
  //   // const transactions = [
  //   //   ['bread', 'milk', 'eggs'],
  //   //   ['bread', 'diapers', 'beer', 'eggs'],
  //   //   ['milk', 'diapers', 'beer', 'cola'],
  //   //   ['bread', 'milk', 'diapers', 'beer'],
  //   //   ['bread', 'milk', 'diapers', 'cola']
  //   // ];

  //   // Create a function to generate itemsets from transactions
  //   function generateItemsets(transactions) {
  //     const itemsets = {};

  //     for (let transaction of transactions) {
  //       for (let item of transaction) {
  //         if (!itemsets[item]) {
  //           itemsets[item] = 0;
  //         }
  //         itemsets[item]++;
  //       }
  //     }

  //     return itemsets;
  //   }

  //   // Create a function to generate frequent itemsets from itemsets
  //   function generateFrequentItemsets(itemsets, minSupport) {
  //     const frequentItemsets = {};
  //     const numTransactions = transactions.length;

  //     for (let item in itemsets) {
  //       const support = itemsets[item] / numTransactions;

  //       if (support >= minSupport) {
  //         frequentItemsets[item] = support;
  //       }
  //     }

  //     return frequentItemsets;
  //   }

  //   // Create a function to generate association rules from frequent itemsets
  //   function generateAssociationRules(frequentItemsets, minConfidence) {
  //     const associationRules = [];

  //     for (let itemset in frequentItemsets) {
  //       const items = itemset.split(',');

  //       if (items.length > 1) {
  //         for (let i = 0; i < items.length; i++) {
  //           const antecedent = items.slice(0, i).concat(items.slice(i + 1));
  //           const consequent = [items[i]];
  //           const confidence = frequentItemsets[itemset] / frequentItemsets[antecedent.join(',')];

  //           if (confidence >= minConfidence) {
  //             associationRules.push([antecedent, consequent, confidence]);
  //           }
  //         }
  //       }
  //     }

  //     return associationRules;
  //   }

  //   // Test the functions with the sample dataset
  //   const minSupport = 0.001;
  //   const minConfidence = 0.3;

  //   const itemsets = generateItemsets(transactions);
  //   const frequentItemsets = generateFrequentItemsets(itemsets, minSupport);
  //   const associationRules = generateAssociationRules(frequentItemsets, minConfidence);

  //   console.log('Frequent itemsets:', frequentItemsets);
  //   // console.log('Association rules:', associationRules);

  // }

  // function Tfunction() {
  //   // Function to generate pairs of products
  //   function generatePairs(transaction) {
  //     const pairs = [];
  //     for (let i = 0; i < transaction.length; i++) {
  //       for (let j = i + 1; j < transaction.length; j++) {
  //         pairs.push([transaction[i], transaction[j]]);
  //       }
  //     }
  //     return pairs;
  //   }

  //   // Function to count pairs of products in transactions
  //   function countPairs(transactions) {
  //     const pairCounts = {};
  //     for (let i = 0; i < transactions.length; i++) {
  //       const pairs = generatePairs(transactions[i]);
  //       for (let j = 0; j < pairs.length; j++) {
  //         const pair = pairs[j];
  //         if (pairCounts[pair]) {
  //           pairCounts[pair]++;
  //         } else {
  //           pairCounts[pair] = 1;
  //         }
  //       }
  //     }
  //     return pairCounts;
  //   }

  //   // Function to sort pairs by frequency
  //   function sortPairs(pairCounts) {
  //     const sortedPairs = [];
  //     for (let pair in pairCounts) {
  //       sortedPairs.push([pair, pairCounts[pair]]);
  //     }
  //     sortedPairs.sort(function (a, b) {
  //       return b[1] - a[1];
  //     });
  //     return sortedPairs;
  //   }

  //   // Generate and sort pairs of products by frequency
  //   const pairCounts = countPairs(transactions);
  //   const sortedPairs = sortPairs(pairCounts);

  //   // Output results
  //   console.log("Pairs of products and their frequency:");
  //   for (let i = 0; i < sortedPairs.length; i++) {
  //     // if (sortedPairs[i][0] === 'מצעי כותנה,מצעי פרקל') {
  //     console.log(sortedPairs[i][0] + ": " + sortedPairs[i][1]);
  //     // }
  //   }

  // }

  // function Ffunction() {
  //   // Sample data
  //   // const transactions = [
  //   //   ["bread", "milk", "cheese"],
  //   //   ["bread", "milk", "eggs"],
  //   //   ["bread", "butter"],
  //   //   ["milk", "butter"],
  //   //   ["bread", "milk", "butter", "cheese"],
  //   //   ["bread", "milk", "butter", "eggs"],
  //   //   ["milk", "cheese", "eggs"],
  //   //   ["milk", "butter", "eggs"],
  //   //   ["bread", "milk", "cheese", "eggs"],
  //   //   ["bread", "butter", "cheese"],
  //   // ];

  //   // Set minimum support and confidence values
  //   const minSupport = 0.000000001;
  //   const minConfidence = 0.0000001;

  //   // Create a list of unique items
  //   const uniqueItems = Array.from(new Set(transactions.flat()));

  //   // Generate all possible itemsets
  //   const allItemsets = [];
  //   for (let i = 0; i < uniqueItems.length; i++) {
  //     for (let j = i + 1; j < uniqueItems.length; j++) {
  //       allItemsets.push([uniqueItems[i], uniqueItems[j]]);
  //     }
  //   }

  //   // Calculate the support for each itemset
  //   const support = {};
  //   for (const itemset of allItemsets) {
  //     let count = 0;
  //     for (const transaction of transactions) {
  //       if (itemset.every((item) => transaction.includes(item))) {
  //         count++;
  //       }
  //     }
  //     const itemsetString = itemset.join(",");
  //     const supportValue = count / transactions.length;
  //     support[itemsetString] = supportValue;
  //   }
  //   // console.log(uniqueItems)
  //   // Generate frequent itemsets
  //   const frequentItemsets = {};
  //   for (const [itemset, supportValue] of Object.entries(support)) {
  //     // console.log(itemset, supportValue)
  //     if (supportValue >= minSupport) {
  //       frequentItemsets[itemset] = supportValue;
  //     }
  //   }

  //   // Generate association rules
  //   const associationRules = [];
  //   for (const itemset of Object.keys(frequentItemsets)) {

  //     const items = itemset.split(",");
  //     if (items.length > 1) {
  //       for (let i = 0; i < items.length; i++) {
  //         const antecedent = items.slice(0, i).concat(items.slice(i + 1));
  //         const consequent = [items[i]];
  //         const confidence =
  //           frequentItemsets[itemset] / frequentItemsets[antecedent.join(",")];
  //         if (confidence >= minConfidence) {
  //           associationRules.push([antecedent, consequent, confidence]);
  //         }
  //       }
  //     }
  //   }

  //   // Print the results
  //   console.log("Frequent Itemsets:");
  //   console.log(frequentItemsets);
  //   // console.log("Association Rules:");
  //   // console.log(associationRules);

  // }
