async function getData() {
  const response = await fetch("http://localhost:4000/faqs");
  const data = await response.json();
  return data
}

