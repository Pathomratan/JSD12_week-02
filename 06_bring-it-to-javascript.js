// 1. รายชื่อ ID สินค้า
let productslist = ["product_id_1", "product_id_2", "product_id_3", "product_id_4",
     "product_id_5", "product_id_6"];

// 2. ข้อมูลสินค้า (ชื่อสินค้า ราคา และประเทศต้นทาง)
let productsdata = [
  ["Honey",100,"China"],
  ["FlowerHoney",150,"Mexico"],
  ["RoseHoney",220,"India"],
  ["SunflowerHoney",300,"Turkey"],
  ["AcaciaHoney",400,"Italy"],
  ["WildflowerHoney",500,"Spain"]
];
// 3. สร้างอาร์เรย์ใหม่ที่รวมข้อมูลจาก productslist และ productsdata เข้าด้วยกัน
let products = productslist.map((id, index) => {
  return {
    id: id,
    name: productsdata[index][0],
    price: productsdata[index][1],
    origin: productsdata[index][2]
  };
});
console.log(productslist);
console.log(products);


