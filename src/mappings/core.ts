import { log } from '@graphprotocol/graph-ts'
import { TicketSold, WinnerChosen } from '../generated/templates/Raffle/Raffle'
import { Mint, Raffle, Winner, PickWinner } from '../generated/schema'
import { Transfer } from '../generated/templates/ERC20/ERC20'

export function handleTicketSold(event: TicketSold): void {
  let raffle = Raffle.load(event.address)

  if (!raffle) {
    raffle = new Raffle(event.address)
    raffle.save()
  }

  let mintId = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let mint = Mint.load(mintId)

  if (!mint) {
    mint = new Mint(mintId)
    mint.blockNumber = event.block.number
    mint.timestamp = event.block.timestamp
    mint.raffleId = raffle.id
    mint.amount = event.params.tokenId
    mint.tokenHolder = event.params.buyer
    mint.save()
  }
}

export function handleTransfer(event: Transfer): void {
  let winnerId = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let winner = Winner.load(winnerId)

  if (!winner) {
    winner = new Winner(winnerId)
    winner.blockNumber = event.block.number
    winner.timestamp = event.block.timestamp
    winner.raffleId = event.params.from
    winner.amount = event.params.value
    winner.buyer = event.params.to
    winner.tokenAddress = event.address
    winner.save()
  }
}

export function handlePickWinner(event: WinnerChosen): void {
  let raffle = Raffle.load(event.address)

  if (!raffle) {
    raffle = new Raffle(event.address)
    raffle.save()
  }

  let pickId = event.transaction.hash.toHex()
  let pickWinner = PickWinner.load(pickId)

  if(!pickWinner) {
    pickWinner = new PickWinner(pickId)
    pickWinner.raffleId = raffle.id
    pickWinner.address = event.params.winner
    pickWinner.blockNumber = event.block.number
    pickWinner.save()
  }
}
