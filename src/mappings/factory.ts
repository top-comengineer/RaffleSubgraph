import { RaffleCreated } from '../generated/RaffleFactory/RaffleFactory';
import { RaffleFactory, Raffle } from '../generated/schema';
import { Raffle as RaffleContract } from "../generated/templates";

import { FACTORY_ADDRESS } from './helpers';

export function handleRaffleCreated(event: RaffleCreated): void {

  let raffleFactory = RaffleFactory.load(FACTORY_ADDRESS);
  let raffle = new Raffle(event.params.raffleContract);

  if (raffleFactory == null) {
    raffleFactory = new RaffleFactory(FACTORY_ADDRESS);
    raffleFactory.save();
  }

  raffle.raffleFactory = raffleFactory.id;
  raffle.id = event.params.raffleContract
  raffle.address = event.params.raffleContract;

  RaffleContract.create(event.params.raffleContract);

  raffle.save();
}
