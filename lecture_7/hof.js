let arr=[1,2,3,4];

let mul=arr.map((data)=>data*data);
console.log(mul);

let num=arr.find((data)=>data===3);
console.log(num);


let blogs=[
    {
        id:1,
        title:"first blog",
        url:"https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"forest night stars nature forest at night"
    },
    {
        id:2,
        title:"second blog",
        url:"https://plus.unsplash.com/premium_photo-1736451320089-e3fcb0430cb3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"starry sky night photography Free pictures"
    }
]
let blog=blogs.find((blog)=>blog.id===2);
    console.log(blog);