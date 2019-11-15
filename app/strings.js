stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let count = 0;
    let reduced = str[0];
    for (var i = 1; i < str.length; i++) {
      if (str[i] == str[i - 1]) {
        count++;
        if (count < amount) {
          reduced += str[i];
        }
      } else {
        reduced += str[i];
        count = 0;
      }
    }
    return reduced;

  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    var arr = str.split('');
    arr.reverse();
    return arr.join(''); 
  },
};
