import { TicketSold } from '../types/templates/Raffle/Raffle'; // Update the path based on the actual location of the generated types
import { Mint, Raffle } from '../types/schema';

export function handleTicketSold(event: TicketSold): void {
  let raffle = Raffle.load(event.address.toHexString()); 
  if (raffle != null) {
    let mint = new Mint(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
    mint.blockNumber = event.block.number;
    mint.timestamp = event.block.timestamp;
    mint.raffleId = raffle.id;
    mint.amount = event.params.tokenId;
    mint.tokenHolder = event.params.buyer;
    mint.save();
  }
}
