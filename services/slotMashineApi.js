const gameOne = Promise.resolve({
  data: {
    reels: [
      ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
      ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
      ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'],
    ],
    spinCost: 1,
    winCases: [
      // [image, quantity, reward]
      ['cherry', 3, 50],
      ['cherry', 2, 40],
      ['apple', 3, 20],
      ['apple', 2, 10],
      ['banana', 3, 15],
      ['banana', 2, 5],
      ['lemon', 3, 3],
    ]
  }
})

const getRandomInd = size => {
  return Math.floor(Math.random() * size)
}

const api = {
  makeSpin(coins) {
    return gameOne.then(result => {
      const gameParams = result.data
      const spinResult = gameParams.reels.map(reel => reel[getRandomInd(reel.length)])
      const outputMap = spinResult.reduce((obj, item) => {
        obj[item] ? obj[item]++ : obj[item] = 1
        return obj
      }, {})

      let balance = coins - gameParams.spinCost
      const sortedWinCases = gameParams.winCases.sort((a, b) => b[2] - a[2])
      for (const [image, quantity] of Object.entries(outputMap)) {
        const winCase = sortedWinCases
          .find(([winImage, winQ]) => winImage === image && winQ === quantity)
        if (winCase) {
          balance += winCase[2]
          break
        }
      }
      return { balance, spinResult }
    })
  },
}

module.exports = api