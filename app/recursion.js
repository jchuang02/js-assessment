recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {

    if (dirName == undefined || dirName == data.dirName) {
      if (data.subDirs.length === 0) {
        return data.files;
      } else if(data.subDirs.length > 1) {
        let temp = data.files;
        for (var i = 0; i < data.subDirs.length; i++) {
          temp = [...temp, ...listFiles(data.subDirs[i])];
        }
        return temp;
      } else if (data.subDirs.length === 1) {
        return [...data.files, ...listFiles(data.subDirs[0])];
      }
    } else {
      if (data.subDirs.length === 0) { //no more folders left
        return [];
      } else  {
        let temp = [];
        for (var i = 0; i < data.subDirs.length; i++) {
            temp = [...temp, ...listFiles(data.subDirs[i], dirName)];
        }
        return temp;
      }
    }
  },

  /**n

   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  },

};
