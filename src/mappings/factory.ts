import {log} from '@graphprotocol/graph-ts';
import {RaffleCreated} from '../types/RaffleFactory/RaffleFactory';
import {RaffleFactory, Raffle, RaffleLoader} from '../types/schema';
import {FACTORY_ADDRESS, ADDRESS_ZERO} from './helpers';
import {TicketSold} from '../types/templates/Raffle/Raffle'

export function handleRaffleCreated(event: RaffleCreated): void {
  let raffleFactory = RaffleFactory.load(FACTORY_ADDRESS);
  let raffle = new Raffle(event.params.raffleContract.toHexString());

  if (raffleFactory == null) {
    raffleFactory = new RaffleFactory(FACTORY_ADDRESS);
    let raffleLoader =  raffleFactory.raffles;
    let raffles = raffleLoader.load();
    raffles.push(raffle);

    raffleFactory.save();
  }

  raffle.id = event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  raffle.address = event.params.raffleContract;
  raffle.save();

  let raffleLoader = raffleFactory.raffles;
  let raffles = raffleLoader.load();
  raffles.push(raffle)
  raffleFactory.save();
}
