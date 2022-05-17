//สร้าง ปิรามิดโดยหาค่า Max เอามาบวกกัน
const longestSlide = pyramid => {
    for (let i = pyramid.length - 2; i > -1; i--)
      for (let j = 0; j < i + 1; j ++)
        pyramid[i][j] += Math.max(...pyramid[i + 1].slice(j, j + 2));
    return pyramid[0][0];
  }
  console.log(longestSlide([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]))
  console.log(longestSlide([[2], [9, 4], [1, 8, 7], [6, 4, 7, 2]]))