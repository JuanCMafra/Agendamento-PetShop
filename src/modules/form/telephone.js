const telephone = document.getElementById("telephone")

telephone.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d+)/, '($1) $2 $3-$4');
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
  }

  e.target.value = value;
})

