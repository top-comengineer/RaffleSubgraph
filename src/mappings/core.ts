import { TicketSold } from '../types/templates/Raffle/Raffle';
import { Mint, Raffle } from '../types/schema';

export function handleTicketSold(event: TicketSold): void {
  let raffle = Raffle.load(event.address.toHexString());

  if (!raffle) {
    raffle = new Raffle(event.address.toHexString());
    raffle.save();
  }

  let mintId = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let mint = Mint.load(mintId);

  if(!mint) {
    mint = new Mint(mintId);
    mint.blockNumber = event.block.number;
    mint.timestamp = event.block.timestamp;
    mint.raffleId = raffle.id;
    mint.amount = event.params.tokenId;
    mint.tokenHolder = event.params.buyer;
    mint.save();
  }
}
