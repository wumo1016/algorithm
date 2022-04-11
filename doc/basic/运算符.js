/* 异或运算符(^)
1. 0 ^ 任何数 = 任何数
2. 任何数 ^ 自身 = 0
3. 异或满足交换律、结合律
4.两个位置上相同的返回 0 不同的返回 1

a ^ 0 = a
a ^ a = 0
a ^ b ^ a = b ^ a ^ a = b ^ (a ^ a) = b ^ 0 = b

leetcode: 
  - 136
  - 17.04
*/

/*
按位与: 都是1才是1
按位或: 都是0才是0
按位异或: 不一样才是1
*/