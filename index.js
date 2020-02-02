function palindromeWord(str) {
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

function palindromeSentence(str) {
  const joinedStr = str.toLowerCase().split(' ').join('');

  const length = joinedStr.length;
  if (length % 2 !== 0 && length > 2) {
    const workWith = (length - 1) / 2;

    if (joinedStr.slice(0, workWith) === joinedStr.slice(workWith + 1, (workWith * 2) + 1).split('').reverse().join('')) {
      return "Yes, it is a palindrome"
    }
    return "No, it is not a palindrome"
  }

  if (str.length === 0) {
    return "Empty sentence";
  }
}

const $ = n => document.querySelector(n)

$('#check-word').onclick = () => {
  const result = palindromeWord($('#palindrome-word-input').value);
  $('#word-result').innerHTML = `<b>${result}</b> is the longest palindrome word in the senetence`;
  if (result.split(' ').length > 2) {
    $('#word-result').textContent = result;
  }
}

$('#check-sentence').onclick = () => {
  const result = palindromeSentence($('#palindrome-sentence-input').value);
  $('#sentence-result').textContent = result;
}
