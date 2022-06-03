// Declaração da matriz
var matrizA = [[],[],[]];
var matrizB = [[],[],[]];
var matrizAt = [[],[],[]];
var matrizBt = [[],[],[]];
var matrizSoma = [[],[],[]];
var matrizSub = [[],[],[]];

// Percorrendo a matriz
for(linha = 0; linha < 3; linha++){
  for(coluna = 0; coluna < 3; coluna++){
    matrizA[linha][coluna] = parseInt(Math.random()*100)
    matrizB[linha][coluna] = parseInt(Math.random()*100)
  }
}

// Montando a transposta A
for(linha = 0; linha < 3; linha++){
  for(coluna = 0; coluna < 3; coluna++){
    matrizAt[linha][coluna] = matrizA[coluna][linha]
  }
}

// Montando a transposta B
for(linha = 0; linha < 3; linha++){
  for(coluna = 0; coluna < 3; coluna++){
    matrizBt[linha][coluna] = matrizB[coluna][linha]
  }
}

// Montando a matriz soma e matriz subtração
for(linha = 0; linha < 3; linha++){
  for(coluna = 0; coluna < 3; coluna++){
    matrizSoma[linha][coluna] = matrizA[linha][coluna] + matrizB[linha][coluna]
    matrizSub[linha][coluna] = matrizA[linha][coluna] - matrizB[linha][coluna]
  }
}

alert('Visualizar a matriz A')
for(linha = 0; linha < 3; linha++){
  alert(matrizA[linha]) 
}

alert('Visualizar a matriz B')
for(linha = 0; linha < 3; linha++){
  alert(matrizB[linha]) 
}

alert('Visualizar a matriz At')
for(linha = 0; linha < 3; linha++){
  alert(matrizAt[linha])
}

alert('Visualizar a matriz Bt')
for(linha = 0; linha < 3; linha++){
  alert(matrizBt[linha])
}

alert('Visualizar a matriz soma')
for(linha = 0; linha < 3; linha++){
  alert(matrizSoma[linha]) 
}

alert('Visualizar a matriz subitração')
for(linha = 0; linha < 3; linha++){
  alert(matrizSub[linha]) 
}