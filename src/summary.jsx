fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(json => console.log(json));

const loadData = async() =>{
 const res = await fetch("https://jsonplaceholder.typicode.com/users")
 const data = res.json();
 return data;
} 
