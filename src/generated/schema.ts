// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Raffle extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Raffle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Raffle must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Raffle", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Raffle | null {
    return changetype<Raffle | null>(
      store.get_in_block("Raffle", id.toHexString()),
    );
  }

  static load(id: Bytes): Raffle | null {
    return changetype<Raffle | null>(store.get("Raffle", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get raffleFactory(): string | null {
    let value = this.get("raffleFactory");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set raffleFactory(value: string | null) {
    if (!value) {
      this.unset("raffleFactory");
    } else {
      this.set("raffleFactory", Value.fromString(<string>value));
    }
  }

  get mint(): MintLoader {
    return new MintLoader(
      "Raffle",
      this.get("id")!.toBytes().toHexString(),
      "mint",
    );
  }
}

export class RaffleFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RaffleFactory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RaffleFactory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("RaffleFactory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): RaffleFactory | null {
    return changetype<RaffleFactory | null>(
      store.get_in_block("RaffleFactory", id),
    );
  }

  static load(id: string): RaffleFactory | null {
    return changetype<RaffleFactory | null>(store.get("RaffleFactory", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get raffles(): RaffleLoader {
    return new RaffleLoader(
      "RaffleFactory",
      this.get("id")!.toString(),
      "raffles",
    );
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Mint | null {
    return changetype<Mint | null>(store.get_in_block("Mint", id));
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get raffleId(): Bytes {
    let value = this.get("raffleId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set raffleId(value: Bytes) {
    this.set("raffleId", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get tokenHolder(): Bytes {
    let value = this.get("tokenHolder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set tokenHolder(value: Bytes) {
    this.set("tokenHolder", Value.fromBytes(value));
  }
}

export class MintLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Mint[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Mint[]>(value);
  }
}

export class RaffleLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Raffle[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Raffle[]>(value);
  }
}
