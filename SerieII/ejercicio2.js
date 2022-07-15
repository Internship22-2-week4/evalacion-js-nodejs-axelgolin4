
function getCoins(coin) {
    var coins = []
    coins[0] = 0    //1
    coins[1] = 0    //2
    coins[2] = 0    //5
    coins[3] = 0    //10
    coins[4] = 0    //20
    coins[5] = 0    //50
    var bandera = false
    
    while( bandera == false){
        if(coin >= 50){
            coin = coin - 50
            coins[5] = coins[5] +1
        }
        else if(coin >= 20 ) {
            coin = coin - 20
            coins[4] = coins[4] +1
        }
        else if(coin >= 10 ) {
            coin = coin - 10
            coins[3] = coins[3] +1
        }
        else if(coin >= 5 ) {
            coin = coin - 5
            coins[2] = coins[2] +1
        }
        else if(coin >= 2 ) {
            coin = coin - 2
            coins[1] = coins[1] +1
        }
        else if(coin >= 1 ) {
            coin = coin - 1
            coins[0] = coins[0] +1
        }
        else{
            bandera = true
        }

    }

    // console.log(coins[0] + " monedas de 1 centimo")
    // console.log(coins[1] + " monedas de 2 centimos")
    // console.log(coins[2] + " monedas de 5 centimos")
    // console.log(coins[3] + " monedas de 10 centimos")
    // console.log(coins[4] + " monedas de 20 centimos")
    // console.log(coins[5] + " monedas de 50 centimos")
    // console.log("------------------")
    console.log(coins)
    console.log(" ")
}


getCoins(51)
getCoins(3)
getCoins(5)
getCoins(16)
getCoins(100)