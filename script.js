document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const result1 = toCase('Mthatha');
  document.getElementById('result').innerText = `Result for 'Mthatha': '${result1}'`;

  const result2 = toCase('HelloWorld');
  document.getElementById('result').innerText += `\nResult for 'HelloWorld': '${result2}'`;

  const result3 = toCase('OpenAI');
  document.getElementById('result').innerText += `\nResult for 'OpenAI': '${result3}'`;
});

function toCase(str) {
  if (!str) {
    return '-';
  }

  const lowerCaseStr = str.toLowerCase();
  const upperCaseStr = str.toUpperCase();

  return `${lowerCaseStr}-${upperCaseStr}`;
}

