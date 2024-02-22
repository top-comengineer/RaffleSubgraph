import {log} from '@graphprotocol/graph-ts';
import { TicketSold } from '../generated/templates/Raffle/Raffle';
import { Mint, Raffle } from '../generated/schema';

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
