import {log} from '@graphprotocol/graph-ts';
import {RaffleCreated} from '../types/RaffleFactory/RaffleFactory';
import {RaffleFactory, Raffle} from '../types/schema';
import {FACTORY_ADDRESS, ADDRESS_ZERO} from './helpers';

export function handleRaffleCreated(event: RaffleCreated): void {
  let raffle = new Raffle(event.params.raffleContract.toHexString());
  raffle.address = event.params.raffleContract;
  let raffleFactory = RaffleFactory.load(FACTORY_ADDRESS);
  if (raffleFactory != null) {
    let raffleLoader = raffleFactory.raffles; 
    let raffles = raffleLoader.load(); 
    raffles.push(raffle);
    raffleFactory.save(); // Save the changes to the raffleFactory entity
    raffle.raffleFactory = raffleFactory.id;
  }
  raffle.save();
}
