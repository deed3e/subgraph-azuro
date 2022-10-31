import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AllConditionsStopped,
  ConditionCreated,
  ConditionResolved,
  ConditionShifted,
  ConditionStopped,
  Initialized,
  LpChanged,
  MaintainerUpdated,
  MaxBanksRatioChanged,
  OracleAdded,
  OracleRenounced,
  OwnershipTransferred
} from "../generated/core/core"

export function createAllConditionsStoppedEvent(
  flag: boolean
): AllConditionsStopped {
  let allConditionsStoppedEvent = changetype<AllConditionsStopped>(
    newMockEvent()
  )

  allConditionsStoppedEvent.parameters = new Array()

  allConditionsStoppedEvent.parameters.push(
    new ethereum.EventParam("flag", ethereum.Value.fromBoolean(flag))
  )

  return allConditionsStoppedEvent
}

export function createConditionCreatedEvent(
  oracleConditionId: BigInt,
  conditionId: BigInt,
  timestamp: BigInt
): ConditionCreated {
  let conditionCreatedEvent = changetype<ConditionCreated>(newMockEvent())

  conditionCreatedEvent.parameters = new Array()

  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "oracleConditionId",
      ethereum.Value.fromUnsignedBigInt(oracleConditionId)
    )
  )
  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "conditionId",
      ethereum.Value.fromUnsignedBigInt(conditionId)
    )
  )
  conditionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return conditionCreatedEvent
}

export function createConditionResolvedEvent(
  oracleConditionId: BigInt,
  conditionId: BigInt,
  outcomeWin: BigInt,
  state: i32,
  amountForLp: BigInt
): ConditionResolved {
  let conditionResolvedEvent = changetype<ConditionResolved>(newMockEvent())

  conditionResolvedEvent.parameters = new Array()

  conditionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "oracleConditionId",
      ethereum.Value.fromUnsignedBigInt(oracleConditionId)
    )
  )
  conditionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "conditionId",
      ethereum.Value.fromUnsignedBigInt(conditionId)
    )
  )
  conditionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "outcomeWin",
      ethereum.Value.fromUnsignedBigInt(outcomeWin)
    )
  )
  conditionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )
  conditionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "amountForLp",
      ethereum.Value.fromUnsignedBigInt(amountForLp)
    )
  )

  return conditionResolvedEvent
}

export function createConditionShiftedEvent(
  oracleCondId: BigInt,
  conditionId: BigInt,
  newTimestamp: BigInt
): ConditionShifted {
  let conditionShiftedEvent = changetype<ConditionShifted>(newMockEvent())

  conditionShiftedEvent.parameters = new Array()

  conditionShiftedEvent.parameters.push(
    new ethereum.EventParam(
      "oracleCondId",
      ethereum.Value.fromUnsignedBigInt(oracleCondId)
    )
  )
  conditionShiftedEvent.parameters.push(
    new ethereum.EventParam(
      "conditionId",
      ethereum.Value.fromUnsignedBigInt(conditionId)
    )
  )
  conditionShiftedEvent.parameters.push(
    new ethereum.EventParam(
      "newTimestamp",
      ethereum.Value.fromUnsignedBigInt(newTimestamp)
    )
  )

  return conditionShiftedEvent
}

export function createConditionStoppedEvent(
  conditionId: BigInt,
  flag: boolean
): ConditionStopped {
  let conditionStoppedEvent = changetype<ConditionStopped>(newMockEvent())

  conditionStoppedEvent.parameters = new Array()

  conditionStoppedEvent.parameters.push(
    new ethereum.EventParam(
      "conditionId",
      ethereum.Value.fromUnsignedBigInt(conditionId)
    )
  )
  conditionStoppedEvent.parameters.push(
    new ethereum.EventParam("flag", ethereum.Value.fromBoolean(flag))
  )

  return conditionStoppedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLpChangedEvent(newLp: Address): LpChanged {
  let lpChangedEvent = changetype<LpChanged>(newMockEvent())

  lpChangedEvent.parameters = new Array()

  lpChangedEvent.parameters.push(
    new ethereum.EventParam("newLp", ethereum.Value.fromAddress(newLp))
  )

  return lpChangedEvent
}

export function createMaintainerUpdatedEvent(
  maintainer: Address,
  active: boolean
): MaintainerUpdated {
  let maintainerUpdatedEvent = changetype<MaintainerUpdated>(newMockEvent())

  maintainerUpdatedEvent.parameters = new Array()

  maintainerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maintainer",
      ethereum.Value.fromAddress(maintainer)
    )
  )
  maintainerUpdatedEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return maintainerUpdatedEvent
}

export function createMaxBanksRatioChangedEvent(
  newRatio: BigInt
): MaxBanksRatioChanged {
  let maxBanksRatioChangedEvent = changetype<MaxBanksRatioChanged>(
    newMockEvent()
  )

  maxBanksRatioChangedEvent.parameters = new Array()

  maxBanksRatioChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRatio",
      ethereum.Value.fromUnsignedBigInt(newRatio)
    )
  )

  return maxBanksRatioChangedEvent
}

export function createOracleAddedEvent(newOracle: Address): OracleAdded {
  let oracleAddedEvent = changetype<OracleAdded>(newMockEvent())

  oracleAddedEvent.parameters = new Array()

  oracleAddedEvent.parameters.push(
    new ethereum.EventParam("newOracle", ethereum.Value.fromAddress(newOracle))
  )

  return oracleAddedEvent
}

export function createOracleRenouncedEvent(oracle: Address): OracleRenounced {
  let oracleRenouncedEvent = changetype<OracleRenounced>(newMockEvent())

  oracleRenouncedEvent.parameters = new Array()

  oracleRenouncedEvent.parameters.push(
    new ethereum.EventParam("oracle", ethereum.Value.fromAddress(oracle))
  )

  return oracleRenouncedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
