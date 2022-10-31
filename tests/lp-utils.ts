import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  AzuroBetChanged,
  BetterWin,
  ClaimTimeoutChanged,
  DaoRewardChanged,
  lpInitialized,
  LiquidityAdded,
  LiquidityRemoved,
  LiquidityRequested,
  MinDepoChanged,
  NewBet,
  OracleRewardChanged,
  lpOwnershipTransferred,
  PeriodChanged,
  ReinforcementAbilityChanged,
  Transfer,
  WithdrawTimeoutChanged,
  coreChanged
} from "../generated/lp/lp"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createAzuroBetChangedEvent(
  newAzuroBet: Address
): AzuroBetChanged {
  let azuroBetChangedEvent = changetype<AzuroBetChanged>(newMockEvent())

  azuroBetChangedEvent.parameters = new Array()

  azuroBetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAzuroBet",
      ethereum.Value.fromAddress(newAzuroBet)
    )
  )

  return azuroBetChangedEvent
}

export function createBetterWinEvent(
  better: Address,
  tokenId: BigInt,
  amount: BigInt
): BetterWin {
  let betterWinEvent = changetype<BetterWin>(newMockEvent())

  betterWinEvent.parameters = new Array()

  betterWinEvent.parameters.push(
    new ethereum.EventParam("better", ethereum.Value.fromAddress(better))
  )
  betterWinEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  betterWinEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return betterWinEvent
}

export function createClaimTimeoutChangedEvent(
  newClaimTimeout: BigInt
): ClaimTimeoutChanged {
  let claimTimeoutChangedEvent = changetype<ClaimTimeoutChanged>(newMockEvent())

  claimTimeoutChangedEvent.parameters = new Array()

  claimTimeoutChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newClaimTimeout",
      ethereum.Value.fromUnsignedBigInt(newClaimTimeout)
    )
  )

  return claimTimeoutChangedEvent
}

export function createDaoRewardChangedEvent(
  newDaoFee: BigInt
): DaoRewardChanged {
  let daoRewardChangedEvent = changetype<DaoRewardChanged>(newMockEvent())

  daoRewardChangedEvent.parameters = new Array()

  daoRewardChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newDaoFee",
      ethereum.Value.fromUnsignedBigInt(newDaoFee)
    )
  )

  return daoRewardChangedEvent
}

export function createlpInitializedEvent(version: i32): lpInitialized {
  let lpInitializedEvent = changetype<lpInitialized>(newMockEvent())

  lpInitializedEvent.parameters = new Array()

  lpInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return lpInitializedEvent
}

export function createLiquidityAddedEvent(
  account: Address,
  amount: BigInt,
  leaf: BigInt
): LiquidityAdded {
  let liquidityAddedEvent = changetype<LiquidityAdded>(newMockEvent())

  liquidityAddedEvent.parameters = new Array()

  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  liquidityAddedEvent.parameters.push(
    new ethereum.EventParam("leaf", ethereum.Value.fromUnsignedBigInt(leaf))
  )

  return liquidityAddedEvent
}

export function createLiquidityRemovedEvent(
  account: Address,
  leaf: BigInt,
  amount: BigInt
): LiquidityRemoved {
  let liquidityRemovedEvent = changetype<LiquidityRemoved>(newMockEvent())

  liquidityRemovedEvent.parameters = new Array()

  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("leaf", ethereum.Value.fromUnsignedBigInt(leaf))
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return liquidityRemovedEvent
}

export function createLiquidityRequestedEvent(
  requestWallet: Address,
  requestedValueLp: BigInt
): LiquidityRequested {
  let liquidityRequestedEvent = changetype<LiquidityRequested>(newMockEvent())

  liquidityRequestedEvent.parameters = new Array()

  liquidityRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestWallet",
      ethereum.Value.fromAddress(requestWallet)
    )
  )
  liquidityRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestedValueLp",
      ethereum.Value.fromUnsignedBigInt(requestedValueLp)
    )
  )

  return liquidityRequestedEvent
}

export function createMinDepoChangedEvent(newMinDepo: BigInt): MinDepoChanged {
  let minDepoChangedEvent = changetype<MinDepoChanged>(newMockEvent())

  minDepoChangedEvent.parameters = new Array()

  minDepoChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newMinDepo",
      ethereum.Value.fromUnsignedBigInt(newMinDepo)
    )
  )

  return minDepoChangedEvent
}

export function createNewBetEvent(
  owner: Address,
  betId: BigInt,
  conditionId: BigInt,
  outcomeId: BigInt,
  amount: BigInt,
  odds: BigInt,
  fund1: BigInt,
  fund2: BigInt
): NewBet {
  let newBetEvent = changetype<NewBet>(newMockEvent())

  newBetEvent.parameters = new Array()

  newBetEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam("betId", ethereum.Value.fromUnsignedBigInt(betId))
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam(
      "conditionId",
      ethereum.Value.fromUnsignedBigInt(conditionId)
    )
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam(
      "outcomeId",
      ethereum.Value.fromUnsignedBigInt(outcomeId)
    )
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam("odds", ethereum.Value.fromUnsignedBigInt(odds))
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam("fund1", ethereum.Value.fromUnsignedBigInt(fund1))
  )
  newBetEvent.parameters.push(
    new ethereum.EventParam("fund2", ethereum.Value.fromUnsignedBigInt(fund2))
  )

  return newBetEvent
}

export function createOracleRewardChangedEvent(
  newOracleFee: BigInt
): OracleRewardChanged {
  let oracleRewardChangedEvent = changetype<OracleRewardChanged>(newMockEvent())

  oracleRewardChangedEvent.parameters = new Array()

  oracleRewardChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOracleFee",
      ethereum.Value.fromUnsignedBigInt(newOracleFee)
    )
  )

  return oracleRewardChangedEvent
}

export function createlpOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): lpOwnershipTransferred {
  let lpOwnershipTransferredEvent = changetype<lpOwnershipTransferred>(
    newMockEvent()
  )

  lpOwnershipTransferredEvent.parameters = new Array()

  lpOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  lpOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return lpOwnershipTransferredEvent
}

export function createPeriodChangedEvent(newPeriod: BigInt): PeriodChanged {
  let periodChangedEvent = changetype<PeriodChanged>(newMockEvent())

  periodChangedEvent.parameters = new Array()

  periodChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newPeriod",
      ethereum.Value.fromUnsignedBigInt(newPeriod)
    )
  )

  return periodChangedEvent
}

export function createReinforcementAbilityChangedEvent(
  newReinforcementAbility: BigInt
): ReinforcementAbilityChanged {
  let reinforcementAbilityChangedEvent = changetype<
    ReinforcementAbilityChanged
  >(newMockEvent())

  reinforcementAbilityChangedEvent.parameters = new Array()

  reinforcementAbilityChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newReinforcementAbility",
      ethereum.Value.fromUnsignedBigInt(newReinforcementAbility)
    )
  )

  return reinforcementAbilityChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createWithdrawTimeoutChangedEvent(
  newWithdrawTimeout: BigInt
): WithdrawTimeoutChanged {
  let withdrawTimeoutChangedEvent = changetype<WithdrawTimeoutChanged>(
    newMockEvent()
  )

  withdrawTimeoutChangedEvent.parameters = new Array()

  withdrawTimeoutChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newWithdrawTimeout",
      ethereum.Value.fromUnsignedBigInt(newWithdrawTimeout)
    )
  )

  return withdrawTimeoutChangedEvent
}

export function createcoreChangedEvent(newCore: Address): coreChanged {
  let coreChangedEvent = changetype<coreChanged>(newMockEvent())

  coreChangedEvent.parameters = new Array()

  coreChangedEvent.parameters.push(
    new ethereum.EventParam("newCore", ethereum.Value.fromAddress(newCore))
  )

  return coreChangedEvent
}
