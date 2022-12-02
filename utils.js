//exercise1
function matrixProduct(mat1, mat2){
    let result = [];
    let firstLine = [];
    let secondLine = [];
    let prd1 = mat1[0][0]*mat2[0][0] + mat1[0][1]*mat2[1][0];
    let prd2 = mat1[0][0]*mat2[0][1] + mat1[0][1]*mat2[1][1];
    let prd3 = mat1[1][0]*mat2[0][0] + mat1[1][1]*mat2[1][0];
    let prd4 = mat1[1][0]*mat2[0][1] + mat1[1][1]*mat2[1][1];
    firstLine.push(prd1, prd2);
    secondLine.push(prd3, prd4);
    result.push(firstLine, secondLine);
    console.log(result);
}
//exercise2

function matrixSum(mat1, mat2){
    let result = [];
    let sum1 = [mat1[0][0] + mat2[0][0], mat1[0][1] + mat2[0][1]];
    let sum2 = [mat1[1][0] + mat2[1][0], mat1[1][1] + mat2[1][1]];
    result.push(sum1, sum2);
    console.log(result);
}

//exercise3
function sumOfEachRow(mat){
    let sumRow = [];
    for (let r = 0; r < mat.length; r++) {
        let sum = 0;
        for (let c = 0; c < mat[r].length; c++) {
           sum += mat[r][c];
        }
        sumRow.push(sum);
    }
    console.log(sumRow);
}

//exercise4

function countWords(string){
    let result = 1;
    let index = 0;
    while(index < string.length){
        if(string[index] != " " && string[index + 1] == " "){
            result++;
            index++;
        } else {
            index++;
        }
    }
    console.log(result);
}


//exercise5

function trim(word){
    let trimmed = "";
    let index = 0;
    if(word[index] == " " || word[index + word.length -1] == " "){
        trimmed = word.substr(1, word.length - 1);
    }
    console.log(trimmed);
}




module.exports = {
   sumOfEachRow : sumOfEachRow,
   trim : trim,
   countWords : countWords,
   matrixSum : matrixSum,
   matrixProduct : matrixProduct
}