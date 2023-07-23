/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
});

/* ============================== Phase 2 ============================== */

// Your code here

let result = await fetch("/products", {
    method:"POST",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
});
console.log(result.status);
console.log(result.headers.get("Content-Type"));
console.log(result.url);

//is redirecting but status code is 200, should be 302
/* ============================== Phase 3 ============================== */

// Your code here
 result = await fetch("/products", {
    method:"POST",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:new URLSearchParams({
        name: "Caribbean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
      })
});
