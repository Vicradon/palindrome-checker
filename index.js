function palindrome(str) {
  const strArr = str.toLowerCase().split(' ');
  const palindromeArr = []
  for (let i of strArr) {
    const wordArr = i.split('');
    const length = wordArr.length;
    if (length % 2 !== 0 && length > 2) {
      const workWith = (length - 1) / 2;

      if (i.slice(0, workWith) === i.slice(workWith + 1, (workWith * 2) + 1).split('').reverse().join('')) {
        palindromeArr.push(i)
      }
    }
  }

  const lastArr = palindromeArr.map((x, i) => {
    return +[x.length, i].join('')
  });

  const index = Number(String(lastArr.sort((a, b) => b - a)[0]).split('')[1]);

  if (palindromeArr.length === 0) {
    return "No Palindrome Word";
  }
  return palindromeArr[index];
}

const $ = n => document.querySelector(n)

$('#check').onclick = () => {
  const result = palindrome($('#palindrome-input').value);
  $('#result').innerHTML = `<b>${result}</b> is the longest palindrome word in the senetence`;
  if (result.split(' ').length > 2){
    $('#result').textContent = result;
  }
}

console.log(palindrome("Madam Malayalam Arora teaches"));