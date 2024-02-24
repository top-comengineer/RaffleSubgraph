import { log } from '@graphprotocol/graph-ts'
import { TicketSold } from '../generated/templates/Raffle/Raffle'
import { Mint, Raffle, Winner } from '../generated/schema'
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
  log.info('ADDRESS', [event.params.from.toString()])
  let raffle = Raffle.load(event.params.from)

  if (!raffle) {
    raffle = new Raffle(event.params.from)
    raffle.save()
  }

  let winnerId = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let winner = Winner.load(winnerId)

  if (!winner) {
    winner = new Winner(winnerId)
    winner.blockNumber = event.block.number
    winner.timestamp = event.block.timestamp
    winner.raffleId = raffle.id
    winner.amount = event.params.value
    winner.buyer = event.params.to
    winner.tokenAddress = event.address
    winner.save()
  }
}
