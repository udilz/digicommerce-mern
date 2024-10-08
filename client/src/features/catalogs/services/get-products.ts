export async function getProducts() {
  try {
    const res = await fetch('http://localhost:8000/api/products', {
      credentials: 'include',
    });
    console.log(res.status);

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('Something went wrong...');
  }
}
