// 数值范围：(2^-1023到2^1024)
// 解释： 根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数

// 精度： -(2^53-1) 到 2^53-1
// 原因： 精度最多只能到53个二进制位