// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RaffleStopped extends ethereum.Event {
  get params(): RaffleStopped__Params {
    return new RaffleStopped__Params(this);
  }
}

export class RaffleStopped__Params {
  _event: RaffleStopped;

  constructor(event: RaffleStopped) {
    this._event = event;
  }
}

export class ReceivedRandomness extends ethereum.Event {
  get params(): ReceivedRandomness__Params {
    return new ReceivedRandomness__Params(this);
  }
}

export class ReceivedRandomness__Params {
  _event: ReceivedRandomness;

  constructor(event: ReceivedRandomness) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get randomWords(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class RequestedRandomness extends ethereum.Event {
  get params(): RequestedRandomness__Params {
    return new RequestedRandomness__Params(this);
  }
}

export class RequestedRandomness__Params {
  _event: RequestedRandomness;

  constructor(event: RequestedRandomness) {
    this._event = event;
  }

  get requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TicketSold extends ethereum.Event {
  get params(): TicketSold__Params {
    return new TicketSold__Params(this);
  }
}

export class TicketSold__Params {
  _event: TicketSold;

  constructor(event: TicketSold) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenWithdrawn extends ethereum.Event {
  get params(): TokenWithdrawn__Params {
    return new TokenWithdrawn__Params(this);
  }
}

export class TokenWithdrawn__Params {
  _event: TokenWithdrawn;

  constructor(event: TokenWithdrawn) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WinnerChosen extends ethereum.Event {
  get params(): WinnerChosen__Params {
    return new WinnerChosen__Params(this);
  }
}

export class WinnerChosen__Params {
  _event: WinnerChosen;

  constructor(event: WinnerChosen) {
    this._event = event;
  }

  get place(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Raffle__getWinnersResultWinnersStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get wallet(): Address {
    return this[1].toAddress();
  }
}

export class Raffle extends ethereum.SmartContract {
  static bind(address: Address): Raffle {
    return new Raffle("Raffle", address);
  }

  adminFeeFraction(): i32 {
    let result = super.call(
      "adminFeeFraction",
      "adminFeeFraction():(uint8)",
      [],
    );

    return result[0].toI32();
  }

  try_adminFeeFraction(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "adminFeeFraction",
      "adminFeeFraction():(uint8)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createdAt(): BigInt {
    let result = super.call("createdAt", "createdAt():(uint32)", []);

    return result[0].toBigInt();
  }

  try_createdAt(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("createdAt", "createdAt():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  endTime(): BigInt {
    let result = super.call("endTime", "endTime():(uint32)", []);

    return result[0].toBigInt();
  }

  try_endTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("endTime", "endTime():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeCollectionWallet(): Address {
    let result = super.call(
      "feeCollectionWallet",
      "feeCollectionWallet():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_feeCollectionWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "feeCollectionWallet",
      "feeCollectionWallet():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPrizeSplits(): Array<i32> {
    let result = super.call("getPrizeSplits", "getPrizeSplits():(uint8[])", []);

    return result[0].toI32Array();
  }

  try_getPrizeSplits(): ethereum.CallResult<Array<i32>> {
    let result = super.tryCall(
      "getPrizeSplits",
      "getPrizeSplits():(uint8[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32Array());
  }

  getPrizeTokens(): Array<Address> {
    let result = super.call(
      "getPrizeTokens",
      "getPrizeTokens():(address[])",
      [],
    );

    return result[0].toAddressArray();
  }

  try_getPrizeTokens(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getPrizeTokens",
      "getPrizeTokens():(address[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTokenBalances(): Array<BigInt> {
    let result = super.call(
      "getTokenBalances",
      "getTokenBalances():(uint256[])",
      [],
    );

    return result[0].toBigIntArray();
  }

  try_getTokenBalances(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTokenBalances",
      "getTokenBalances():(uint256[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getWinners(): Array<Raffle__getWinnersResultWinnersStruct> {
    let result = super.call(
      "getWinners",
      "getWinners():((uint256,address)[])",
      [],
    );

    return result[0].toTupleArray<Raffle__getWinnersResultWinnersStruct>();
  }

  try_getWinners(): ethereum.CallResult<
    Array<Raffle__getWinnersResultWinnersStruct>
  > {
    let result = super.tryCall(
      "getWinners",
      "getWinners():((uint256,address)[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Raffle__getWinnersResultWinnersStruct>(),
    );
  }

  hasWinners(): boolean {
    let result = super.call("hasWinners", "hasWinners():(bool)", []);

    return result[0].toBoolean();
  }

  try_hasWinners(): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasWinners", "hasWinners():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)],
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isReadyToPickWinners(): boolean {
    let result = super.call(
      "isReadyToPickWinners",
      "isReadyToPickWinners():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_isReadyToPickWinners(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isReadyToPickWinners",
      "isReadyToPickWinners():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isReadyToPrepare(): boolean {
    let result = super.call(
      "isReadyToPrepare",
      "isReadyToPrepare():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_isReadyToPrepare(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isReadyToPrepare",
      "isReadyToPrepare():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSaleActive(): boolean {
    let result = super.call("isSaleActive", "isSaleActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_isSaleActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSaleActive", "isSaleActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isStopped(): boolean {
    let result = super.call("isStopped", "isStopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_isStopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isStopped", "isStopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  linkAddress(): Address {
    let result = super.call("linkAddress", "linkAddress():(address)", []);

    return result[0].toAddress();
  }

  try_linkAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("linkAddress", "linkAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint32)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paymentToken(): Address {
    let result = super.call("paymentToken", "paymentToken():(address)", []);

    return result[0].toAddress();
  }

  try_paymentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("paymentToken", "paymentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prizeSplits(param0: BigInt): i32 {
    let result = super.call("prizeSplits", "prizeSplits(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toI32();
  }

  try_prizeSplits(param0: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("prizeSplits", "prizeSplits(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  prizeTokens(param0: BigInt): Address {
    let result = super.call("prizeTokens", "prizeTokens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_prizeTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "prizeTokens",
      "prizeTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  randomWord(): BigInt {
    let result = super.call("randomWord", "randomWord():(uint256)", []);

    return result[0].toBigInt();
  }

  try_randomWord(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("randomWord", "randomWord():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  shouldPayoutRemainingPaymentToken(): boolean {
    let result = super.call(
      "shouldPayoutRemainingPaymentToken",
      "shouldPayoutRemainingPaymentToken():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try_shouldPayoutRemainingPaymentToken(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "shouldPayoutRemainingPaymentToken",
      "shouldPayoutRemainingPaymentToken():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  startTime(): BigInt {
    let result = super.call("startTime", "startTime():(uint32)", []);

    return result[0].toBigInt();
  }

  try_startTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startTime", "startTime():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ticketPrice(): BigInt {
    let result = super.call("ticketPrice", "ticketPrice():(uint96)", []);

    return result[0].toBigInt();
  }

  try_ticketPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ticketPrice", "ticketPrice():(uint96)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index),
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index),
      ],
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vrfAddress(): Address {
    let result = super.call("vrfAddress", "vrfAddress():(address)", []);

    return result[0].toAddress();
  }

  try_vrfAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("vrfAddress", "vrfAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vrfRequestId(): BigInt {
    let result = super.call("vrfRequestId", "vrfRequestId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_vrfRequestId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("vrfRequestId", "vrfRequestId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  winnerIds(param0: BigInt): BigInt {
    let result = super.call("winnerIds", "winnerIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBigInt();
  }

  try_winnerIds(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("winnerIds", "winnerIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _prizeTokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _ticketPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _endTime(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _adminFeeFraction(): i32 {
    return this._call.inputValues[7].value.toI32();
  }

  get _prizeSplits(): Array<i32> {
    return this._call.inputValues[8].value.toI32Array();
  }

  get _shouldPayoutRemainingPaymentToken(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }

  get _feeCollectionWallet(): Address {
    return this._call.inputValues[10].value.toAddress();
  }

  get _linkAddress(): Address {
    return this._call.inputValues[11].value.toAddress();
  }

  get _vrfAddress(): Address {
    return this._call.inputValues[12].value.toAddress();
  }

  get _paymentToken(): Address {
    return this._call.inputValues[13].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class PickWinnersCall extends ethereum.Call {
  get inputs(): PickWinnersCall__Inputs {
    return new PickWinnersCall__Inputs(this);
  }

  get outputs(): PickWinnersCall__Outputs {
    return new PickWinnersCall__Outputs(this);
  }
}

export class PickWinnersCall__Inputs {
  _call: PickWinnersCall;

  constructor(call: PickWinnersCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PickWinnersCall__Outputs {
  _call: PickWinnersCall;

  constructor(call: PickWinnersCall) {
    this._call = call;
  }
}

export class PreparePickWinnersCall extends ethereum.Call {
  get inputs(): PreparePickWinnersCall__Inputs {
    return new PreparePickWinnersCall__Inputs(this);
  }

  get outputs(): PreparePickWinnersCall__Outputs {
    return new PreparePickWinnersCall__Outputs(this);
  }
}

export class PreparePickWinnersCall__Inputs {
  _call: PreparePickWinnersCall;

  constructor(call: PreparePickWinnersCall) {
    this._call = call;
  }

  get callbackGasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get requestConfirmations(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class PreparePickWinnersCall__Outputs {
  _call: PreparePickWinnersCall;

  constructor(call: PreparePickWinnersCall) {
    this._call = call;
  }
}

export class RawFulfillRandomWordsCall extends ethereum.Call {
  get inputs(): RawFulfillRandomWordsCall__Inputs {
    return new RawFulfillRandomWordsCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomWordsCall__Outputs {
    return new RawFulfillRandomWordsCall__Outputs(this);
  }
}

export class RawFulfillRandomWordsCall__Inputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }

  get _requestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _randomWords(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class RawFulfillRandomWordsCall__Outputs {
  _call: RawFulfillRandomWordsCall;

  constructor(call: RawFulfillRandomWordsCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class StopSaleCall extends ethereum.Call {
  get inputs(): StopSaleCall__Inputs {
    return new StopSaleCall__Inputs(this);
  }

  get outputs(): StopSaleCall__Outputs {
    return new StopSaleCall__Outputs(this);
  }
}

export class StopSaleCall__Inputs {
  _call: StopSaleCall;

  constructor(call: StopSaleCall) {
    this._call = call;
  }
}

export class StopSaleCall__Outputs {
  _call: StopSaleCall;

  constructor(call: StopSaleCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawLinkCall extends ethereum.Call {
  get inputs(): WithdrawLinkCall__Inputs {
    return new WithdrawLinkCall__Inputs(this);
  }

  get outputs(): WithdrawLinkCall__Outputs {
    return new WithdrawLinkCall__Outputs(this);
  }
}

export class WithdrawLinkCall__Inputs {
  _call: WithdrawLinkCall;

  constructor(call: WithdrawLinkCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawLinkCall__Outputs {
  _call: WithdrawLinkCall;

  constructor(call: WithdrawLinkCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}
