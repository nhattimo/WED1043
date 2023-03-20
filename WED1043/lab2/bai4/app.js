let week = [
    "Tue",
    "Thu",
    "Sat", 
    "Nine"
]
week.splice(3,1,"Mon", "Wed", "Fri", "Sun"); // At position 3 (ở vị trí 3), remove 1 ( xóa 1 ), add 4 elements (thêm 4 phần tử): 
console.log(week[3],week[0],week[4],week[1],week[5],week[2],week[6] );
